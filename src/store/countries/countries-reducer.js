import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './countries-actions';

const countries = createReducer([], {
  [actions.addCountries]: (_, { payload }) => [...payload],
});

const filter = createReducer('', {
  [actions.filterCountries]: (_, { payload }) => payload,
});

export default combineReducers({
  countries,
  filter,
});
