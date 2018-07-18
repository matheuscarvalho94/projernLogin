import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './styles';

const ProdutoInterna = ({ navigation }) => {
  const { produto } = navigation.state.params;
  const { MeuId } = navigation.state.params;
  const { DelProduto } = navigation.state.params;
  const { DelAffiliatesProduto } = navigation.state.params;

  ButtonEditarProduto = () => {
    if (produto.owner==MeuId._id){
      return(
      <TouchableOpacity onPress={() => { navigation.navigate({ routeName: 'FormularioEdit', params: { produto} }); }}  style={styles.buttonEdit} activeOpacity={0.8}>
          <FontAwesome style={styles.iconebutton} >{Icons.edit}</FontAwesome>
          <Text style={styles.buttonText}>
            Editar o produto
          </Text>
        </TouchableOpacity>
      )
    }
  }
  ButtonDeletar = () => {
    if (produto.owner==MeuId._id){
      return (
        <TouchableOpacity onPress={() => { DelProduto({ produto }); }} style={styles.buttonEvents} activeOpacity={0.8}>
          <FontAwesome style={styles.iconebutton} >{Icons.trash}</FontAwesome>
          <Text style={styles.buttonText}>
            Excluir Produto
          </Text>
        </TouchableOpacity>
      )
    }
  },
  ButtonDelAfilliation = ( ) => {
    for (var z = 0; z < produto.affiliates.length; z++) {
      if (produto.affiliates[z]==MeuId._id){
        return (
          <TouchableOpacity onPress={() => { DelAffiliatesProduto({ produto }); }} style={styles.buttonEvents} activeOpacity={0.8}>
            <FontAwesome style={styles.iconebutton} >{Icons.trash}</FontAwesome>
            <Text style={styles.buttonText}>
              Desejo retirar minha afiliação
            </Text>
          </TouchableOpacity>
        )
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: produto.thumb }}
        blurRadius={1}
      >
        <View style={styles.thumbnailContent}>
          <Text style={styles.title}>{produto.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.SubHeader}>
        <Text style={styles.TxtTitle}>VALORES:</Text>
      </View>
      <View style={styles.ContainerPryce}>
        <Text style={styles.TxtPryce}>
          Moeda: {produto.price.currency}
        </Text>
        <Text style={styles.TxtPryce}>
          Preço: {produto.price.value}
        </Text>
      </View>

      <View style={styles.SubHeader}>
        <Text style={styles.TxtTitle}>SOBRE:</Text>
      </View>
      <View style={styles.ContainerProduct}>
        <Text style={styles.descriptiontext}>{produto.description}</Text>
      </View>

      <View style={styles.ContainerButtons}>
        {
          this.ButtonEditarProduto()
        }
        {
          this.ButtonDeletar()
        }
        {
          this.ButtonDelAfilliation()
        }
      </View>
    </ScrollView>
  );
};

ProdutoInterna.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        produto: PropTypes.shape({
          thumb: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
ProdutoInterna.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <TouchableOpacity style={{ margin: 20 }} onPress={() => navigation.goBack()}>
      <FontAwesome style={styles.iconebutton} >{Icons.chevronLeft}</FontAwesome>
    </TouchableOpacity>
  ),
});

export default ProdutoInterna;
