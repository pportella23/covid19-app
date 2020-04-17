import React, {useState} from "react";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes';
import { GlobalStyles } from './GlobalStyles';

export default function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return( 
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <MainPage themeSwitcher={toggleTheme}/>
    </ThemeProvider>
  );
}
