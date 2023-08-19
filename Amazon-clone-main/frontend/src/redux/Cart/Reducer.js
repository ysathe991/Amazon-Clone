import {
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  DELETE_CART_SUCCESS,
  POST_CART_SUCCESS,
  CART_UPDATE_QTY,
  CART_DELETE_ITEM,
} from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST: {
      return { ...state, isLoading: true };
    }

    case GET_CART_SUCCESS: {
      return { ...state, isLoading: false, cart: payload };
    }

    case GET_CART_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }

    case DELETE_CART_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case POST_CART_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case CART_UPDATE_QTY: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id == payload.id) {
            return { ...item, quantity: payload.qty };
          } else {
            return item;
          }
        }),
      };
    }

    case CART_DELETE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((el) => el._id !== payload),
      };
    }

    default:
      return state;
  }
};
