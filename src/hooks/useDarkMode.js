import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode');

  return [darkMode, setDarkMode];
}

export default useDarkMode;