import { Box, Heading, Text } from 'native-base';
import React from 'react';

import { JoinChatForm } from '@src/components/JoinChatForm';

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
        height={'50%'}
        borderRadius={8}
        padding={4}
      >
        <Heading size="xl" mb="4" color="orange.500">
          Fast talk
        </Heading>
        <Text fontSize="xl" color="gray.400">
          Connect with your friends and talk until the chat expires.
        </Text>
        <JoinChatForm />
      </Box>
    </Box>
  );
};
