import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORY_INFO_REQUEST,
  FETCH_CATEGORY_INFO_SUCCESS,
  FETCH_CATEGORY_INFO_FAILURE,
} from '../actionTypes/category';

const initialState = {
  categories: [],
  categoryInfo: [],
  loading: false,
  error: '',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
        error: '',
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        loading: false,
        categories: [],
        error: action.payload,
      };
    case FETCH_CATEGORY_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORY_INFO_SUCCESS:
      return {
        loading: false,
        categoryInfo: action.payload,
        error: '',
      };
    case FETCH_CATEGORY_INFO_FAILURE:
      return {
        loading: false,
        categoryInfo: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
