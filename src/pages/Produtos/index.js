import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { View, FlatList, StatusBar, ActivityIndicator, AsyncStorage, Text } from 'react-native';
import styles from './styles';

import ProductItem from './components/productItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProdutoActions } from '../../store/ducks/produtos';

class Produtos extends Component {
  state = {
    loading: false,
    MeuId: ''
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Meus produtos',
  });

  static propTypes = {
    removeProdutoRequest: PropTypes.func.isRequired,
    getProdutosRequest: PropTypes.func.isRequired,
    produto: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    AsyncStorage.getItem('getUser', (err, result) => {
      this.state.MeuId = JSON.parse(result);
    });
    this.props.getProdutosRequest();
  }
  renderList = () => (
    <FlatList
      data={this.props.produto.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) =>
        <ProductItem
          produto={item}
          navigation={ this.props.navigation}
          DelProduto={() => {
            this.props.removeProdutoRequest(item._id)
            this.props.navigation.navigate('Produtos');
          }}
          DelAffiliatesProduto={() => {
            this.props.removeAffiliatesRequest(item._id);
            this.props.navigation.navigate('Produtos');
          }}
          MeuId={this.state.MeuId}
        />
      }
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {
          !this.props.produto.data.length
          ? <Text style={styles.empty}>Você não possui ou é afiliado de nenhum.</Text>
          : this.props.produto.loading
          ? <ActivityIndicator color="#999" style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  produto: state.produto,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProdutoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
