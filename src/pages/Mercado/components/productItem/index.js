import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MercadoActions } from '../../../../store/ducks/mercado';

import styles from './styles';


class ProductItem extends React.Component {
  render() {
    const { mercado, navigation, DelProduto, MeuId, AddAffiliates, DelAffiliates} = this.props;
    if(!mercado) return (<View/>)

  return (

  <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'MercadoInterna', params: { mercado, MeuId, AddAffiliates, DelProduto, DelAffiliates } }); }} style={styles.container}>

    <Image style={styles.avatar} source={{ uri: mercado.thumb}} />
     <View style={styles.info}>
      <Text style={styles.title}>{mercado.title}</Text>
      <Text style={styles.description} numberOfLines={2}>{mercado.description}</Text>

    </View>

  </TouchableOpacity>
  )
  }
}

ProductItem.propTypes = {
  mercado: PropTypes.shape({
    thumb: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

const mapDispatchToProps = dispatch => bindActionCreators(MercadoActions, dispatch);
export default connect(null, mapDispatchToProps)(ProductItem);
