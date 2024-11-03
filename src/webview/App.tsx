import { ChakraProvider, Box, Text } from '@chakra-ui/react'

export const App = () => {
  return (
    <ChakraProvider>
      <Box 
        p={4} 
        borderRadius="md" 
        boxShadow="lg" 
        bg="white"
        minW="300px"
      >
        <Text fontSize="xl" textAlign="center">
          Hello World!
        </Text>
      </Box>
    </ChakraProvider>
  )
}