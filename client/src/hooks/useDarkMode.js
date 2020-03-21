import { useState, useEffect } from 'react';

export default function useDarkMode({ initialValue }) {
  const [isOnDarkMode, setIsOnDarkMode] = useState(initialValue);

  useEffect(() => {
    isOnDarkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  }, [isOnDarkMode]);

  const turnDarkModeOn = () => setIsOnDarkMode(!isOnDarkMode);

  return [isOnDarkMode, turnDarkModeOn];
}
