import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { light, dark } from './theme';
import Sidebar from './components/Sidebar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.buttonActive};
    transition: background .3s;
  }
`;

export default function App() {
  const [mode, setMode] = useState('Светлая');
  const theme = mode === 'Светлая' ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <button
        onClick={() => setMode(m => m === 'Светлая' ? 'Темная' : 'Светлая')}
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          padding: '8px 12px',
          cursor: 'pointer',
        }}
      >
        Тема: {mode}
      </button>
      <Sidebar color={mode}/>
    </ThemeProvider>
  );
}
