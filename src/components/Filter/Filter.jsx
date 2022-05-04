import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/countries/countries-actions';
import * as selectors from '../../store/countries/countries-selectors.js';
import './Filter.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.getFilter);

  return (
    <div className="filterWrapper">
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(actions.filterCountries(e.target.value))}
        autoComplete="off"
        placeholder="Start typing to find a specific country"
      />
    </div>
  );
}
