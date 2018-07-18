import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';
import { Types as MercadoTypes } from '../ducks/mercado';
import { Types as ProdutosTypes } from '../ducks/produtos';

import { getLogin } from './login';
import { getMercado, removeMercado, addAffiliates, removeAffiliatesMercado } from './mercado';
import { getProdutos, removeProduto, removeAffiliatesProduto, getEditProduto, postAddProduto } from './produtos';

export default function* rootSaga() {
  return yield all([

    takeLatest(LoginTypes.GET_REQUEST, getLogin),

    takeLatest(MercadoTypes.GET_REQUEST, getMercado),
    takeLatest(MercadoTypes.REMOVE_REQUEST, removeMercado),
    takeLatest(MercadoTypes.ADD_REQUEST, addAffiliates),
    takeLatest(MercadoTypes.AFFILIATESMERCADO_REQUEST, removeAffiliatesMercado),

    takeLatest(ProdutosTypes.GET_REQUEST, getProdutos),
    takeLatest(ProdutosTypes.REMOVE_REQUEST, removeProduto),
    takeLatest(ProdutosTypes.AFFILIATES_REQUEST, removeAffiliatesProduto),
    takeLatest(ProdutosTypes.GET_FORMEDITREQUEST, getEditProduto),

    takeLatest(ProdutosTypes.GET_FORMADDREQUEST, postAddProduto),

  ]);
}

