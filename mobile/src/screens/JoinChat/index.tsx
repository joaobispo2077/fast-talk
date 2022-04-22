import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from 'native-base';
import React from 'react';

import { ICONS } from '@src/components/icons';

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
        <FormControl>
          <Stack space="2.5" marginTop={8}>
            <Input
              size="2xl"
              placeholder="Chat name"
              InputRightElement={ICONS.chat}
            />
            <Input
              size="2xl"
              placeholder="Username"
              InputRightElement={ICONS.user}
            />
            <Input
              size="2xl"
              placeholder="Expiration in days"
              type={'number'}
              InputRightElement={ICONS.calendar}
            />
          </Stack>
        </FormControl>
        <Button marginTop={4}>Join to the chat</Button>
      </Box>
    </Box>
  );
};
