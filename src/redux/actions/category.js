import axios from 'axios';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORY_INFO_REQUEST,
  FETCH_CATEGORY_INFO_SUCCESS,
  FETCH_CATEGORY_INFO_FAILURE,
} from '../actionTypes/category';

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategories = () => {
  // return (dispatch) => {
  //   dispatch(fetchCategoriesRequest());
  //   axios.get('your-api-endpoint/categories')
  //     .then(response => {
  //       const categories = response.data;
  //       dispatch(fetchCategoriesSuccess(categories));
  //     })
  //     .catch(error => {
  //       dispatch(fetchCategoriesFailure(error.message));
  //     });
  // };
  return (dispatch) => {
    const categories = [
      { id: '1', img: 'food.png', title: 'Food' },
      { id: '2', img: 'water.png', title: 'Water' },
      { id: '3', img: 'weapons_ammo.png', title: 'Weapons & Ammo' },
      { id: '4', img: 'medical.png', title: 'Medical' },
      { id: '5', img: 'toiletries.png', title: 'Toiletries' },
      { id: '6', img: 'protective_equipment.png', title: 'Protective_Equipment' },
      { id: '7', img: 'documents.png', title: 'Documents' },
      { id: '8', img: 'miscellaneous.png', title: 'Miscellaneous' },
      { id: '9', img: 'persons.png', title: 'Persons' },
      { id: '10', img: 'locations.png', title: 'Locations' },
      { id: '11', img: 'tools.png', title: 'Tools' },
      { id: '12', img: 'coordinates.png', title: 'Coordinates' },
      { id: '13', img: 'frequencies.png', title: 'Frequencies' },
      { id: '14', img: 'expiring.png', title: 'Expiring' },
      { id: '15', img: 'expiring_soon.png', title: 'Expiring Soon' },
    ];

    dispatch(fetchCategoriesSuccess(categories));
  };
};

export const fetchCategoryInfoRequest = () => ({
  type: FETCH_CATEGORY_INFO_REQUEST,
});

export const fetchCategoryInfoSuccess = (categories) => ({
  type: FETCH_CATEGORY_INFO_SUCCESS,
  payload: categories,
});

export const fetchCategoryInfoFailure = (error) => ({
  type: FETCH_CATEGORY_INFO_FAILURE,
  payload: error,
});

export const fetchCategoryInfo = () => {
  // return (dispatch) => {
  //   dispatch(fetchCategoriesRequest());
  //   axios.get('your-api-endpoint/categories')
  //     .then(response => {
  //       const categories = response.data;
  //       dispatch(fetchCategoriesSuccess(categories));
  //     })
  //     .catch(error => {
  //       dispatch(fetchCategoriesFailure(error.message));
  //     });
  // };
  return (dispatch) => {
    const categoryInfo = [
      { title: 'cake', amount: '2' }
    ];

    dispatch(fetchCategoryInfoSuccess(categoryInfo));
  };
};
