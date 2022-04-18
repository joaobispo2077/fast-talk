import { Box, Heading, Input, Text } from 'native-base';
import React from 'react';

export const JoinChat = () => {
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
        height={'80%'}
        borderRadius={4}
        padding={4}
      >
        <Heading size="xl" mb="4">
          Join to the chat
        </Heading>
        <Text fontSize="xl">
          Headings are used for rendering headlines. Heading composes Text so
          you can use all the style props.
        </Text>
        <Input size="2xl" placeholder="Chat name" />
        <Input size="2xl" placeholder="Username" />
      </Box>
    </Box>
  );
};
