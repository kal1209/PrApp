"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCategoryInfo = exports.fetchCategoryInfoFailure = exports.fetchCategoryInfoSuccess = exports.fetchCategoryInfoRequest = exports.fetchCategories = exports.fetchCategoriesFailure = exports.fetchCategoriesSuccess = exports.fetchCategoriesRequest = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _category = require("../actionTypes/category");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchCategoriesRequest = function fetchCategoriesRequest() {
  return {
    type: _category.FETCH_CATEGORIES_REQUEST
  };
};

exports.fetchCategoriesRequest = fetchCategoriesRequest;

var fetchCategoriesSuccess = function fetchCategoriesSuccess(categories) {
  return {
    type: _category.FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};

exports.fetchCategoriesSuccess = fetchCategoriesSuccess;

var fetchCategoriesFailure = function fetchCategoriesFailure(error) {
  return {
    type: _category.FETCH_CATEGORIES_FAILURE,
    payload: error
  };
};

exports.fetchCategoriesFailure = fetchCategoriesFailure;

var fetchCategories = function fetchCategories() {
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
  return function (dispatch) {
    var categories = [{
      id: '1',
      img: 'food.png',
      title: 'Food'
    }, {
      id: '2',
      img: 'water.png',
      title: 'Water'
    }, {
      id: '3',
      img: 'weapons_ammo.png',
      title: 'Weapons & Ammo'
    }, {
      id: '4',
      img: 'medical.png',
      title: 'Medical'
    }, {
      id: '5',
      img: 'toiletries.png',
      title: 'Toiletries'
    }, {
      id: '6',
      img: 'protective_equipment.png',
      title: 'Protective_Equipment'
    }, {
      id: '7',
      img: 'documents.png',
      title: 'Documents'
    }, {
      id: '8',
      img: 'miscellaneous.png',
      title: 'Miscellaneous'
    }, {
      id: '9',
      img: 'persons.png',
      title: 'Persons'
    }, {
      id: '10',
      img: 'locations.png',
      title: 'Locations'
    }, {
      id: '11',
      img: 'tools.png',
      title: 'Tools'
    }, {
      id: '12',
      img: 'coordinates.png',
      title: 'Coordinates'
    }, {
      id: '13',
      img: 'frequencies.png',
      title: 'Frequencies'
    }, {
      id: '14',
      img: 'expiring.png',
      title: 'Expiring'
    }, {
      id: '15',
      img: 'expiring_soon.png',
      title: 'Expiring Soon'
    }];
    dispatch(fetchCategoriesSuccess(categories));
  };
};

exports.fetchCategories = fetchCategories;

var fetchCategoryInfoRequest = function fetchCategoryInfoRequest() {
  return {
    type: _category.FETCH_CATEGORY_INFO_REQUEST
  };
};

exports.fetchCategoryInfoRequest = fetchCategoryInfoRequest;

var fetchCategoryInfoSuccess = function fetchCategoryInfoSuccess(categories) {
  return {
    type: _category.FETCH_CATEGORY_INFO_SUCCESS,
    payload: categories
  };
};

exports.fetchCategoryInfoSuccess = fetchCategoryInfoSuccess;

var fetchCategoryInfoFailure = function fetchCategoryInfoFailure(error) {
  return {
    type: _category.FETCH_CATEGORY_INFO_FAILURE,
    payload: error
  };
};

exports.fetchCategoryInfoFailure = fetchCategoryInfoFailure;

var fetchCategoryInfo = function fetchCategoryInfo() {
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
  return function (dispatch) {
    var categoryInfo = [{
      title: 'cake',
      amount: '2'
    }];
    dispatch(fetchCategoryInfoSuccess(categoryInfo));
  };
};

exports.fetchCategoryInfo = fetchCategoryInfo;