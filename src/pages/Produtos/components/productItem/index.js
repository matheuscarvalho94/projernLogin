import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProdutoActions } from '../../../../store/ducks/produtos';


class ProductItem extends React.Component {
  render() {
    const { produto, navigation, DelProduto, MeuId, DelAffiliatesProduto} = this.props;
    if(!produto) return (<View/>)
      return (
        <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'ProdutoInterna', params: { produto, MeuId, DelProduto, DelAffiliatesProduto, navigation } }); }} style={styles.container}>
          <Image style={styles.avatar} source={{ uri: produto.thumb}} />
          <View style={styles.info}>
            <Text style={styles.title}>{produto.title}</Text>
            <Text style={styles.description} numberOfLines={2}>{produto.description}</Text>
          </View>
        </TouchableOpacity>
      )
  }
}

ProductItem.propTypes = {
  produto: PropTypes.shape({
    thumb: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

const mapDispatchToProps = dispatch => bindActionCreators(ProdutoActions, dispatch);
export default connect(null, mapDispatchToProps)(ProductItem);
