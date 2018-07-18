import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import {
  View,
  SafeAreaView,
  Image,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';


import styles from './styles';

class Login extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
    header: null,
  });

  static propTypes = {
    getLoginRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
    loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
    loading: false,
  };


  validation = () => {
    if (!this.state.email) {
      return "E-mail";
    } else if (!this.state.password) {
      return "Senha";
    }
    return true;
  }

  loginEmail = () => {
    this.loadingRender();
    let mensagem = this.validation();
    if(mensagem==true){
      this.props.login.loading=false;
      this.props.getLoginRequest(this.state);
    }else{
      Alert.alert(
        'HotmartClub',
        "O campo " + mensagem + " é obrigatório",
        [

      {text: 'OK', onPress: () => {}},
        ],
      )
      this.props.login.loading=false;
    }
  };

  loadingRender = () => {
    if(this.props.login.loading){
      return(
        <ActivityIndicator size="small" color={styles.loading.color} />
      )
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <StatusBar barStyle="light-content" />

          <Image
            source={require('../../../img/logo2.png')}
            style={styles.Logo}/>
          <Text style={styles.description}>
            Faça seu Login e senha
          </Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="E-mail"
              placeholderTextColor="#000"
              underlineColorAndroid="transparent"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />


            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha"
              placeholderTextColor="#000"
              returnKeyType="send"
              returnKeyLabel="go"
              secureTextEntry
              underlineColorAndroid="transparent"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.loginEmail}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {
              this.loadingRender()
             }
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
