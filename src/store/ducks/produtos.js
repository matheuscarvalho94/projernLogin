import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'produtos/GET_REQUEST',
  GET_SUCCESS: 'produtos/GET_SUCCESS',
  GET_FAILURE: 'produtos/GET_FAILURE',

  REMOVE_REQUEST: 'mercado/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'mercado/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'mercado/REMOVE_FAILURE',

  AFFILIATES_REQUEST: 'mercado/AFFILIATES_REQUEST',
  AFFILIATES_SUCCESS: 'mercado/AFFILIATES_SUCCESS',
  AFFILIATES_FAILURE: 'mercado/AFFILIATES_FAILURE',


  GET_FORMEDITREQUEST: 'produtos/GET_FORMEDITREQUEST',
  GET_FORMEDITSUCCESS: 'produtos/GET_FORMEDITSUCCESS',
  GET_FORMEDITFAILURE: 'produtos/GET_FORMEDITFAILURE',


  GET_FORMADDREQUEST: 'produtos/GET_FORMADDREQUEST',
  GET_FORMADDSUCCESS: 'produtos/GET_FORMADDSUCCESS',
  GET_FORMADDFAILURE: 'produtos/GET_FORMADDFAILURE',
};

const initialState = Immutable({
  data: [],
  price: [],
  loading: false,
  error: null,
});

export default function produto(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data.data, loading: false, error: null };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE_REQUEST:
      return { ...state, loading: true };
    case Types.REMOVE_SUCCESS:
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        errorOnAdd: null,
      };
    case Types.REMOVE_FAILURE:
      return {
        ...state,
        loading: false,
        errorOnAdd: action.payload.message,
      };

    case Types.AFFILIATES_REQUEST:
      return { ...state, loading: true };
    case Types.AFFILIATES_SUCCESS:
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        errorOnAdd: null,
      };
    case Types.AFFILIATES_FAILURE:
      return {
        ...state,
        loading: false,
        errorOnAdd: action.payload.message,
      };

    case Types.GET_FORMEDITREQUEST:
      return { ...state, loading: true };
    case Types.GET_FORMEDITSUCCESS:
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        errorOnAdd: null,
      };
    case Types.GET_FORMEDITFAILURE:
      return {
        ...state,
        loading: false,
        errorOnAdd: action.payload.message,
      };
    case Types.GET_FORMADDREQUEST:
      return { ...state, loading: true };
    case Types.GET_FORMADDSUCCESS:
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        errorOnAdd: null,
      };
    case Types.GET_FORMADDFAILURE:
      return {
        ...state,
        loading: false,
        errorOnAdd: action.payload.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  getProdutosRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getProdutosSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getProdutosFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),

  removeProdutoRequest: idArquivo => {
    return {
      type: Types.REMOVE_REQUEST,
      payload: {
        idArquivo,
      }
    }
  },

  removeProdutoSuccess: idArquivo => ({
    type: Types.REMOVE_SUCCESS,
    payload: {
      idArquivo,
    },
  }),

  removeProdutoError: (message = 'Erro ao adicionar favorito') => ({
    type: Types.REMOVE_FAILURE,
    payload: {
      message,
    },
  }),

  removeAffiliatesRequest: idArquivo => ({
    type: Types.AFFILIATES_REQUEST,
    payload: {
      idArquivo,
    },
  }),

  removeAffiliatesSuccess: idArquivo => ({
    type: Types.AFFILIATES_SUCCESS,
    payload: {
      idArquivo,
    },
  }),

  removeAffiliatesError: (message = 'Erro ao adicionar favorito') => ({
    type: Types.AFFILIATES_FAILURE,
    payload: {
      message,
    },
  }),

  formEditRequest: Produto => ({
    type: Types.GET_FORMEDITREQUEST,
    payload: {
      Produto,
    },
  }),

  formEditSuccess: idProduto => ({
    type: Types.GET_FORMEDITSUCCESS,
    payload: {
      idProduto,
    },
  }),

  formEditError: (message = 'Erro ao adicionar favorito') => ({
    type: Types.GET_FORMEDITFAILURE,
    payload: {
      message,
    },
  }),

  formAddRequest: Produto => ({
      type: Types.GET_FORMADDREQUEST,
      payload: {
        Produto,
      }
  }),

  formAddSuccess: (idProduto, price, currency, value) => ({
    type: Types.GET_FORMADDSUCCESS,
    payload: {
      idProduto,
    },
    price: {
      currency,
      value,
    },
  }),

  formAddError: (message = 'Erro ao adicionar favorito') => ({
    type: Types.GET_FORMADDFAILURE,
    payload: {
      message,
    },
  }),

};
