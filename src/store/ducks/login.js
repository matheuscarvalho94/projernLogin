import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'login/GET_REQUEST',
  GET_SUCCESS: 'login/GET_SUCCESS',
  GET_FAILURE: 'login/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
});


export default function login(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}


export const Creators = {

  getLoginRequest: Usuario => ({
    type: Types.GET_REQUEST,
    payload: {
      Usuario,
    },
  }),

  getLoginSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getLoginFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),

};
