import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyled from './components/styles/Global.styles';
import Tutorial from './components/Tutorial';


const App = () => {
  const [themeName, setThemeName] = useState('dark');

  const darkThemeProperty = {
    containerBG: '#262626',
    cardContainerBG: '#1e1e1e',
    color: '#fff',
    buttonLinkColor: '#aaa',
    buttonLinkBorder: '#333',
    buttonLinkAfterBG: '#262626',
  }

  const lightThemeProperty = {
    containerBG: '#f0f2f5',
    cardContainerBG: '#fff',
    color: '#111',
    buttonLinkColor: '#111',
    buttonLinkBorder: '#aaa',
    buttonLinkAfterBG: '#111',
  }

  return (
    <ThemeProvider theme={themeName === 'dark' ? darkThemeProperty : lightThemeProperty}>
      <GlobalStyled />
      <Tutorial setThemeName={setThemeName} />
    </ThemeProvider>
  )
}

export default App;
