import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'mercado/GET_REQUEST',
  GET_SUCCESS: 'mercado/GET_SUCCESS',
  GET_FAILURE: 'mercado/GET_FAILURE',

  REMOVE_REQUEST: 'mercado/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'mercado/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'mercado/REMOVE_FAILURE',

  AFFILIATESMERCADO_REQUEST: 'mercado/AFFILIATESMERCADO_REQUEST',
  AFFILIATES_SUCCESS: 'mercado/AFFILIATES_SUCCESS',
  AFFILIATES_FAILURE: 'mercado/AFFILIATES_FAILURE',

  ADD_REQUEST: 'mercado/ADD_REQUEST',
  ADD_SUCCESS: 'mercado/ADD_SUCCESS',
  ADD_FAILURE: 'mercado/ADD_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
  list: [],
  errorOnAdd: null,
});

export default function mercado(state = initialState, action) {
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
    case Types.AFFILIATESMERCADO_REQUEST:
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

    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        errorOnAdd: null,
      };
    case Types.ADD_FAILURE:
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
  getMercadoRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getMercadoSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getMercadoFailure: error => ({
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

  addAffiliarRequest: Produto => ({
      type: Types.ADD_REQUEST,
      payload: {
        Produto,
      },
    }),
  addAffiliarSuccess: idArquivo => ({
    type: Types.ADD_SUCCESS,
    payload: {
      idArquivo,
    },
  }),

  addAffiliarError: (message = 'Erro ao adicionar favorito') => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),

  removeAffiliatesRequest: idArquivo => {
    return {
      type: Types.AFFILIATESMERCADO_REQUEST,
      payload: {
        idArquivo,
      }
    }
  },
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


};

