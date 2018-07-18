import { fetcher } from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as LoginActions } from '../ducks/login';
import {AsyncStorage, Alert} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { navigatorRef } from "../../index";

export function* getLogin(action) {
  const { Usuario } = action.payload;
  const nav = NavigationActions.reset({ index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'Main'})] });

  let params = {
    email: Usuario.email,
    password: Usuario.password,
  };

  try {
    const response = yield call(fetcher.post, `/users/login`, params);
    yield put(LoginActions.getLoginSuccess(response.data));
    const storeAndNavigate = async () => {
      await AsyncStorage.setItem('getUser', JSON.stringify(response.data.user))
      navigatorRef.dispatch(nav);
    };
    setTimeout(storeAndNavigate,1000);
  } catch (err) {
    yield put(LoginActions.getLoginFailure('Erro ao buscar dados da API', err));
    Alert.alert(
      'HotmartClub',
      'E-mail ou senha inválidos.',
      [
        {text: 'OK', onPress: () => {}},
      ],
    )
  }
}
