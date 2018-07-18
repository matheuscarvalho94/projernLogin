import api, { fetcher } from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ProdutosActions } from '../ducks/produtos';
import { Creators as MercadoActions } from '../ducks/mercado';
import {AsyncStorage, Alert} from 'react-native';
import { Buffer } from 'buffer';

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

export function* removeProduto(action) {
  try {
    const response = yield call(fetcher.delete, `/products/${action.payload.idArquivo}`);
    yield put(ProdutosActions.removeProdutoSuccess(response.data));
    yield getProdutos();
  } catch (err) {
    yield put(ProdutosActions.removeProdutoError('Erro ao buscar dados da API', err));
  }
}

export function* removeAffiliatesProduto(action) {
  try {
    const response = yield call(fetcher.delete, `/products/${action.payload.idArquivo}/affiliates/`);
    yield put(ProdutosActions.removeProdutoSuccess(response.data));
    yield getProdutos();
    yield getMercado();
  } catch (err) {
    yield put(ProdutosActions.removeProdutoError('Erro ao buscar dados da API', err));
  }
}

// Edit Produto
export function* getEditProduto(action) {
  let { Produto } = action.payload;
  let params = {
    thumb: Produto.thumb,
    title: Produto.title,
    price: {
      currency: Produto.currency,
      value: parseInt(Produto.value),
    },
    description: Produto.description,
    affiliates: [],
  }
  console.log(Produto)
  try {
    const response = yield call(fetcher.put, `/products/${Produto.idProduto}`, Buffer.from(JSON.stringify(params)));
    console.log(response)
    yield put(ProdutosActions.formEditSuccess(response));
    yield getProdutos();
  } catch (err) {
    yield put(ProdutosActions.formEditError('Erro ao buscar dados da API', err));
  }
}

// Edit Produto
export function* postAddProduto(action) {
  let { Produto } = action.payload;

  let params = {
    thumb: Produto.thumb,
    title: Produto.title,
    price: {
      currency: Produto.currency,
      value: parseInt(Produto.value),
    },
    description: Produto.description,
    affiliates: [],
  }

  try {
    const response = yield call(fetcher.post, `/products`, params);
    yield put(ProdutosActions.formAddSuccess(response.data));
    yield getProdutos();
  } catch (err) {
    yield put(ProdutosActions.formAddError('Erro ao buscar dados da API', err));

  }
}
