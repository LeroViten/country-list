import React, { useEffect, useState } from 'react';
import { getCountries } from '../../../services/apiService';
import CountryListItem from '../CountryListItem';
import Loader from '../../Loader';
import './CountryList.scss';

export default function CountryList() {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setCountries(result);

    setLoading(false);
  };

  return (
    <div className="listWrapper">
      {loading && <Loader />}
      {countries && (
        <ul className="list">
          {countries.map((country) => (
            <CountryListItem country={country} key={country.name} />
          ))}
        </ul>
      )}
    </div>
  );
}
