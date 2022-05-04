import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../../services/apiService';
import * as actions from '../../../store/countries/countries-actions';
import * as selectors from '../../../store/countries/countries-selectors.js';
import CountryListItem from '../CountryListItem';
import Loader from '../../Loader';
import './CountryList.scss';

export default function CountryList() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const visibleCountries = useSelector(selectors.getVisibleCountries);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      fetchData();
    }

    return () => {
      isCancelled = true;
      setLoading(false);
    };
  }, []);

  const fetchData = async () => {
    setLoading(true);

    const result = await getCountries();
    dispatch(actions.addCountries(result));

    setLoading(false);
  };

  return (
    <div className="listWrapper">
      {loading && <Loader />}
      {visibleCountries && (
        <ul className="list">
          {visibleCountries.map((country) => (
            <CountryListItem country={country} key={country.name} />
          ))}
        </ul>
      )}
    </div>
  );
}
