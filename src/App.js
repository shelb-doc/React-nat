import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { Header, Footer } from 'components';
import { HomePage } from 'pages';
import './index.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <HomePage />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
