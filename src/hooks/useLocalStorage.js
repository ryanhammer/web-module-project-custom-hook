import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState( () => {
    // Define value as check on whether key value exists in local storage
    // If key value does not exist, it will return undefined
    const existingKey = window.localStorage.getItem(key);
    // Use ternary to parse and return stored json or, if undefined, return initialValue
    return existingKey ? JSON.parse(existingKey) : initialValue;
  });

  const setValue = (value) => {
    // Save value to state
    setStoredValue(value);
    // Save value to local storage to achieve persistence
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;