import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v2/';
const QUERY_PARAMS = 'all?fields=name,region,area';

export async function getCountries() {
  try {
    const { data } = await axios.get(`${QUERY_PARAMS}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
