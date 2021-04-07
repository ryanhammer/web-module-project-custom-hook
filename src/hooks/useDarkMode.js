import useLocalStorage from './hooks/useLocalStorage';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  return [darkMode, setDarkMode];
}

export default useDarkMode;