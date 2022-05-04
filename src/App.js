import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import CountryList from './components/Countries/CountryList';
import Filter from './components/Filter';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="App">
      <Filter />
      <CountryList />
      <ToastContainer transition={Zoom} autoClose={3000} />
    </div>
  );
}
