import { Box, Heading } from 'native-base';

export const Chat = () => {
  return (
    <Box
      backgroundColor={'gray.200'}
      width={'100%'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        backgroundColor={'white'}
        width={'80%'}
        height={'xl'}
        borderRadius={8}
        padding={4}
      >
        <Heading size="xl" mb="4" color="orange.500">
          Chat
        </Heading>
      </Box>
    </Box>
  );
};
