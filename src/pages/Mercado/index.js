import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { View, FlatList, StatusBar, ActivityIndicator, AsyncStorage} from 'react-native';
import styles from './styles';

import ProductItem from './components/productItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MercadoActions } from '../../store/ducks/mercado';

class Mercado extends Component {
  state = {
    loading: false,
    MeuId: '',
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Mercado',
  });

  static propTypes = {
    removeProdutoRequest: PropTypes.func.isRequired,
    getMercadoRequest: PropTypes.func.isRequired,
    addAffiliarRequest: PropTypes.func.isRequired,
    removeAffiliatesRequest: PropTypes.func.isRequired,
    mercado: PropTypes.shape({
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
    this.props.getMercadoRequest();
  }


  renderList = () => (
    <FlatList
      data={this.props.mercado.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) =>
        <ProductItem
          mercado={item}
          navigation={ this.props.navigation}
          AddAffiliates={() => {
            this.props.addAffiliarRequest(item._id);
            this.props.navigation.navigate('Mercado');
          }}
          DelProduto={() => {
            this.props.removeProdutoRequest(item._id)
            this.props.navigation.navigate('Mercado');
          }}
          DelAffiliates={() => {
            this.props.removeAffiliatesRequest(item._id);
            this.props.navigation.navigate('Mercado');
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

        { this.props.mercado.loading
          ? <ActivityIndicator color="#fff" style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mercado: state.mercado,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MercadoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mercado);
