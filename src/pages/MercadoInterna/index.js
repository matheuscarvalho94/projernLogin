import React from 'react';
import PropTypes from 'prop-types';

import {
  HeaderBackButton
 } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './styles';

const MercadoInterna = ({ navigation }) => {
  const { mercado } = navigation.state.params;
  const { MeuId } = navigation.state.params;
  const { AddAffiliates } = navigation.state.params;
  const { DelProduto } = navigation.state.params;
  const { DelAffiliates } = navigation.state.params;


  ButtonAddRemove = () => {
    let retorno = []
    for (var q = 0; q < mercado.affiliates.length; q++) {
      if (mercado.affiliates[q]==MeuId._id){
        retorno.push(mercado.affiliates[q])
      }
    }
    let count = retorno.length;
    switch (count) {
      case 1:
      return(
      <TouchableOpacity onPress={() => { DelAffiliates({ mercado }); }} style={styles.buttonEvents} activeOpacity={0.8}>
        <FontAwesome style={styles.iconebutton} >{Icons.trash}</FontAwesome>
        <Text style={styles.buttonText}>
          Desejo retirar minha afiliação
        </Text>
      </TouchableOpacity>
      )
      case 0:
      return(
        <TouchableOpacity onPress={() => { AddAffiliates({ mercado }) }}  style={styles.buttonEdit} activeOpacity={0.8}>
        <FontAwesome style={styles.iconebutton} >{Icons.plug}</FontAwesome>
        <Text style={styles.buttonText}>
          Me afiliar ao produto
        </Text>
      </TouchableOpacity>
      )
        break;
     }
  }

  ButtonDeletar = () => {
    if (mercado.owner==MeuId._id){
      return (
        <TouchableOpacity onPress={() => { DelProduto({ mercado }); }} style={styles.buttonEvents} activeOpacity={0.8}>
          <FontAwesome style={styles.iconebutton} >{Icons.trash}</FontAwesome>
          <Text style={styles.buttonText}>
            Excluir Produto
          </Text>
        </TouchableOpacity>
      )
    }
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: mercado.thumb }}
        blurRadius={1}
      >
        <View style={styles.thumbnailContent}>
          <Text style={styles.title}>{mercado.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.SubHeader}>
        <Text style={styles.TxtTitle}>VALORES:</Text>
      </View>
      <View style={styles.ContainerPryce}>
        <Text style={styles.TxtPryce}>
          Moeda: {mercado.price.currency}
        </Text>
        <Text style={styles.TxtPryce}>
          Preço: {mercado.price.value}
        </Text>
      </View>

      <View style={styles.SubHeader}>
        <Text style={styles.TxtTitle}>SOBRE:</Text>
      </View>
      <View style={styles.ContainerProduct}>
        <Text style={styles.descriptiontext}>{mercado.description}</Text>
      </View>

      <View style={styles.ContainerButtons}>
      {
        this.ButtonAddRemove()
      }
      {
        this.ButtonDeletar()
      }
      </View>
    </ScrollView>
  );
};

MercadoInterna.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        mercado: PropTypes.shape({
          thumb: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
MercadoInterna.navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity style={{margin: 20}} onPress={() => navigation.goBack()}>
        <FontAwesome style={styles.iconebutton} >{Icons.chevronLeft}</FontAwesome>
      </TouchableOpacity>
    ),
});

export default MercadoInterna;
