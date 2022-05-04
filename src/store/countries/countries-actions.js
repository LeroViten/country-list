import { createAction } from '@reduxjs/toolkit';

export const addCountries = createAction('countries/add');

export const filterCountries = createAction('countries/filter');
