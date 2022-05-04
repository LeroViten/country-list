import React from 'react';
import './CountryListItem.scss';

export default function CountryListItem({ country }) {
  return (
    <li className="list-item">
      <p>
        Country Name: <strong>{country.name}</strong>
      </p>
      <p>
        Region: <strong>{country.region}</strong>
      </p>
      <p>
        Area: <strong>{country.area}</strong>
      </p>
    </li>
  );
}
