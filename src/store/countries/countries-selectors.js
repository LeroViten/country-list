export const getCountries = (state) => state.countries.countries;
export const getFilter = (state) => state.countries.filter;

export const getVisibleCountries = (state) => {
  const countries = getCountries(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return countries.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
