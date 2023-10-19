
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsFillSunFill,BsMoon } from "react-icons/bs";

const ToggleButton = styled.button`
  background: ${props => (props.darkMode ? 'black' : 'white')};
  color: ${props => (props.darkMode ? 'white' : 'black')};
  padding: 4px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load the user's preference for dark mode from local storage, if available
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // Update the application's theme or styles based on darkMode
    document.body.style.backgroundColor = darkMode ? '#2B3440' : 'white';
    document.body.style.color = darkMode ? 'white' : '#2B3440';

    // Save the user's preference for dark mode to local storage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ToggleButton darkMode={darkMode} onClick={handleToggle}>
      {darkMode ? <BsFillSunFill></BsFillSunFill> : <BsMoon></BsMoon>}
    </ToggleButton>
  );
};

export default DarkModeToggle;
