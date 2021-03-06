/*
 * Session Reducer
 */

import Config from 'config';
import { ActionTypes } from 'actions';

export const initialLoadState = {
  loading: false,
  loaded: false,
  error: null,
  errors: null,
};

const initialState = {
  ...initialLoadState,
  empty: false,
  invalid: false,
  validateToken: {
    initialLoadState
  }
};

export default function session(state = initialState, action = {}) {
  const { payload = {} } = action;

  switch (action.type) {

    /*
     * Sign In
     */

    case ActionTypes.SIGN_IN__START: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case ActionTypes.SIGN_IN__SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        loaded: true,
      };
    }
    case ActionTypes.SIGN_IN__EMPTY: {
      return {
        ...state,
        loading: false,
        empty: true,
      };
    }
    case ActionTypes.SIGN_IN__INVALID: {
      return {
        ...state,
        loading: false,
        invalid: true,
      };
    }
    case ActionTypes.SIGN_IN__FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload.error,
        errors: payload.errors,
      };
    }

    /*
     * Sign In
     */

    case ActionTypes.SIGN_UP__INIT: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.SIGN_UP__SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        loaded: true,
      };
    }
    case ActionTypes.SIGN_UP__ERROR: {
      return {
        ...state,
        loading: false,
        error: payload.error,
        errors: payload.errors,
      };
    }

    /*
     * Sign Out
     */

    case ActionTypes.SIGN_OUT: {
      return {
        ...initialState,
      };
    }

    case ActionTypes.VALIDATE__INIT: {
      return {
        ...state,
        validateToken: {
          ...initialLoadState,
          loading: true,
        },
      };

    }

    case ActionTypes.VALIDATE__SUCCESS: {
      console.log(payload);
      return {
        ...state,
        ...payload,
        validateToken: {
          ...state.validateToken,
          loading: false,
          loaded: true,
        },
      };

    }

    case ActionTypes.VALIDATE__ERROR:{
      return {
        ...state,
        validateToken: {
          ...state.validateToken,
          loading: false,
          error: payload.error,
          errors: payload.errors,
        },
      };

    }
  }

  return state;
}
