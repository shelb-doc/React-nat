import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { Header } from 'components';
import './index.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
