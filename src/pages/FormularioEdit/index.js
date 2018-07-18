import React, { Component } from 'react';

import PropTypes from 'prop-types';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';

import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProdutoActions } from '../../store/ducks/produtos';

class FormularioEdit extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity style={{margin: 20}} onPress={() => navigation.goBack()}>
        <FontAwesome style={styles.iconebutton} >{Icons.chevronLeft}</FontAwesome>
      </TouchableOpacity>
    ),
  });

  state = {
    title: '',
    currency: '',
    value: '',
    description: ''
  };

  static propTypes = {
    formEditRequest: PropTypes.func.isRequired,
    produto: PropTypes.shape({
      idProduto: PropTypes.string,
      title: PropTypes.string,
      currency: PropTypes.string,
      value: PropTypes.number,
      description: PropTypes.string,
      loading: PropTypes.bool,
    }).isRequired,
  };

  loadingRender = () => {
    if(this.props.produto.loading){
      return (
          <ActivityIndicator size="small" color={styles.loading.color} />
      )
    }
  }

  EnviarDados = () => {
    this.loadingRender()
    let produto = this.props.formEditRequest(this.state);
    if(produto) {
      this.props.navigation.navigate('Produtos');
    }
  }

  componentDidMount() {
    const { produto } = this.props.navigation.state.params;
    if(produto) {
      this.setState({
        idProduto: produto._id,
        title: produto.title,
        currency: produto.price.currency,
        value: produto.price.value,
        description: produto.description,
      })
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
                keyboardType='numeric'
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

export default connect(mapStateToProps, mapDispatchToProps)(FormularioEdit);
