import { Center, Heading, Stack, Text } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Center margin={'30px 0'}>
      <Stack align={'center'}>
        <Heading>404</Heading>
        <Text>The Page you were looking for could not be found.</Text>
      </Stack>
    </Center>
  );
};
