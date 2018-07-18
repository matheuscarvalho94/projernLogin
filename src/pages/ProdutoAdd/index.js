import React, { Component } from 'react';

import PropTypes from 'prop-types';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';

import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProdutoActions } from '../../store/ducks/produtos';

class ProdutoAdd extends Component {

  state = {
    thumb: 'https://hotmart.s3.amazonaws.com/product_pictures/cf8aaddf-858d-428e-ac92-02833c535784/CoverMeuEvento.png',
    title: '',
    currency: '',
    value: '',
    affiliates: [],
    description: ''
  };

  static propTypes = {
    formAddRequest: PropTypes.func.isRequired,
    produto: PropTypes.shape({
      idProduto: PropTypes.string,
      title: PropTypes.string,
      currency: PropTypes.string,
      value: PropTypes.number,
      description: PropTypes.string,
      loading: PropTypes.bool,
    }).isRequired,
  };

  validation = () => {
    if (!this.state.title) {
      return "Titulo";
    }else if (!this.state.currency) {
      return "Moeda";
    } else if (!this.state.value) {
        return "Preço";
    } else if (!this.state.description) {
      return "Descrição";
    }
    return true
  }
  loadingRender = () => {
    if(this.props.produto.loading){
      return (
          <ActivityIndicator size="small" color={styles.loading.color} />
      )
    }
  }
  EnviarDados = () => {
    this.loadingRender()
    let mensagem = this.validation()
    if(mensagem==true){
      this.props.formAddRequest(this.state);
      this.setState({
        title: '',
        currency: '',
        value: '',
        affiliates: [],
        description: ''
      })
      this.props.navigation.navigate('Produtos');
    }else{
      Alert.alert(
        'HotmartClub',
        "O campo " + mensagem + " é obrigatório",
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
      )
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Titulo"
              placeholderTextColor="#000"
              underlineColorAndroid="transparent"
              value={this.state.title}
              onChangeText={title => this.setState({ title })}
            />

            <View style={styles.Boxcol50}>
              <TextInput
                style={styles.inputcol50}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Moeda"
                placeholderTextColor="#000"
                underlineColorAndroid="transparent"
                value={this.state.currency}
                onChangeText={currency => this.setState({ currency })}
              />

              <TextInput
                style={styles.inputcol50}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Valor"
                keyboardType={'numeric'}
                placeholderTextColor="#000"
                underlineColorAndroid="transparent"
                value={`${this.state.value}`}
                onChangeText={value => this.setState({ value })}
              />
          </View>

          <TextInput
            style={styles.inputDescription}
            autoCapitalize="none"
            autoCorrect={false}
            multiline={true}
            returnKeyType="send"
            returnKeyLabel="go"
            placeholder="Descrição"
            placeholderTextColor="#000"
            underlineColorAndroid="transparent"
            value={this.state.description}
            onChangeText={description => this.setState({ description })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.EnviarDados}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              Enviar
            </Text>
          </TouchableOpacity>

        </View>
        { this.loadingRender()}

    </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  produto: state.produto,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProdutoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoAdd);
