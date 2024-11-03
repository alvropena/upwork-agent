import React from 'react';
import type { FC } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

const App: FC = () => {
  return (
    <ChakraProvider>
      <Box p={4}>
        Hello World
      </Box>
    </ChakraProvider>
  );
};

export default App;