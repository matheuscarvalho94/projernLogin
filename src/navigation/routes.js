import React from "react";
import { Platform, StatusBar, Image } from "react-native";

import {
  StackNavigator,
  TabNavigator,
 } from 'react-navigation';
import { colors } from '../styles';
import styles from './styles';

import FontAwesome, { Icons } from 'react-native-fontawesome';

//pages
import Login from '../pages/Login';
import Produtos from '../pages/Produtos';
import ProdutoInterna from '../pages/ProdutoInterna';
import ProdutoAdd from '../pages/ProdutoAdd';
import Mercado from '../pages/Mercado';
import MercadoInterna from '../pages/MercadoInterna';
import FormularioEdit from '../pages/FormularioEdit';
import Splash from '../pages/Splash';

const navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Image
    source={require('../../img/logo2.png')}
    style={styles.Logo}/>
  ),
  headerStyle: {
    backgroundColor: colors.darker,
    height: 60,
    paddingTop: 10,
   },
   headerBackTitle: null,
   headerLeft: null,

})

export const NavegacaoMercado = StackNavigator({
  Mercado: { screen: Mercado },
  MercadoInterna: { screen: MercadoInterna},
  },
  {
    navigationOptions
  }
);

export const NavegacaoProduto = StackNavigator({
  Produtos: { screen: Produtos },
  ProdutoInterna: { screen: ProdutoInterna },
  FormularioEdit: { screen: FormularioEdit },
  ProdutoAdd: { screen: ProdutoAdd },
},
  {
    navigationOptions
  }
);

export const NavagecaoProdutoAdd = StackNavigator({
  ProdutoAdd: { screen: ProdutoAdd },
},
  {
    navigationOptions
  }
);


export const Main = TabNavigator({
  NavegacaoMercado: {
    screen: NavegacaoMercado,
    navigationOptions: {
      tabBarLabel: "Mercado",
      tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: 25}} color={tintColor}>{Icons.shoppingCart}</FontAwesome>

    },
  },
  NavegacaoProduto: {
    screen: NavegacaoProduto,
    navigationOptions: {
      tabBarLabel: "Produtos",
      tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: 25}} color={tintColor}>{Icons.briefcase}</FontAwesome>
    },
  },

  NavagecaoProdutoAdd: {
    screen: NavagecaoProdutoAdd,
    navigationOptions: {
      tabBarLabel: "Add Produtos",
      tabBarIcon: ({ tintColor }) => <FontAwesome style={{fontSize: 25}} color={tintColor}>{Icons.edit}</FontAwesome>
    },
  },
},
{
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#fff',
      inactiveTintColor:'#999999',
      iconStyle: {
          padding: 0,
          margin: 0,
          width: Platform.OS === 'ios' ? 90 : 20,
          height: Platform.OS === 'ios' ? 90 : 20,
      },
      style: {
        backgroundColor: colors.secundary,
        height: Platform.OS === 'ios' ? 60 : 60,
        padding: 0,
        paddingTop: 0,
      },
      labelStyle: {
        fontSize: Platform.OS === 'ios' ? 15 : 15,
      },
      indicatorStyle: {
          backgroundColor: 'white'
      },
    }
},
);


const MainNavigator = StackNavigator({
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  },
  Main: {
    screen: Main
  }
},{
  initialRouteName: "Splash",
  headerMode: "none",
});

export default MainNavigator;
