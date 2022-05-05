import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

// Debounce search term so that it only gives us latest value ...
// ... if searchTerm has not been updated within last 500ms.
// The goal is to only have the API call fire when user stops typing ...
// ... so that we aren't hitting our API rapidly.
//    * usage:
//   const debouncedSearchTerm = useDebounce(searchTerm, 500);