import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  // Create state for dark mode in local storage via useLocalStorage hook
  const [darkMode, setDarkMode] = useLocalStorage('darkMode');

  return [darkMode, setDarkMode];
}

export default useDarkMode;