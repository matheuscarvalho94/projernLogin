import { fetcher } from '../../services/api';


import { call, put } from 'redux-saga/effects';

import { Creators as MercadoActions } from '../ducks/mercado';
import { Creators as ProdutosActions } from '../ducks/produtos';
import {AsyncStorage} from 'react-native';

export function* getProdutos() {
  try {
    const response = yield call(fetcher.get, '/products');
    yield put(ProdutosActions.getProdutosSuccess(response));
  } catch (err) {
    yield put(ProdutosActions.getProdutosFailure('Erro ao buscar dados da API', err));
  }
}

export function* getMercado() {
  try {
    const response = yield call(fetcher.get, '/market');
    yield put(MercadoActions.getMercadoSuccess(response));
  } catch (err) {
    yield put(MercadoActions.getMercadoFailure('Erro ao buscar dados da API', err));
  }
}

export function* removeMercado(action) {
  try {
    const response = yield call(fetcher.delete, `/products/${action.payload.idArquivo}`);
    yield put(MercadoActions.removeProdutosuccess(response.data));
    yield getMercado();
  } catch (err) {
    yield put(MercadoActions.removeProdutoError('Erro ao buscar dados da API', err));
  }
}

export function* addAffiliates(action) {
  let { Produto } = action.payload;
  try {
    const response = yield call(fetcher.put, `/products/${Produto}/affiliates`);
    yield put(MercadoActions.addAffiliarSuccess(response.data));
    yield getProdutos();
    yield getMercado();
  } catch (err) {
    yield put(MercadoActions.addAffiliarError('Erro ao buscar dados da API', err));
    // console.log(err, 'service api')
  }
}

export function* removeAffiliatesMercado(action) {
  try {
    const response = yield call(fetcher.delete, `/products/${action.payload.idArquivo}/affiliates/`);
    yield put(MercadoActions.removeAffiliatesSuccess(response.data));
    yield getProdutos();
    yield getMercado();
  } catch (err) {
    yield put(MercadoActions.removeAffiliatesError('Erro ao buscar dados da API', err));
  }
}
