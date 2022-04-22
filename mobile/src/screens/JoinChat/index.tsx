import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ICONS } from '@src/components/icons';

type JoinChatFormData = {
  chatname: string;
  username: string;
  expirationInDays: number;
};

const schema = yup.object().shape({
  chatname: yup.string().required('The chat name is required'),
  username: yup.string().required('The username is required'),
  expirationInDays: yup
    .number()
    .typeError('The value must be a number')
    .positive('The value must be a positive number')
    .required('The expiration in days is required'),
});

export const JoinChat = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinChatFormData>({
    resolver: yupResolver(schema),
  });
  const hasFormError = Object.keys(errors).length > 0;

  const onSubmit = async (data: JoinChatFormData) => {
    console.log('submiting with ', data);
  };

  console.log('errors', errors);

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
        <FormControl isRequired isInvalid={hasFormError}>
          <Stack space="2.5" marginTop={8}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  size="2xl"
                  placeholder="Chat ame"
                  InputRightElement={ICONS.chat}
                  value={value}
                  onChangeText={(val) => onChange(val)}
                  onBlur={onBlur}
                />
              )}
              name="chatname"
              rules={{ required: 'Chatname is required', minLength: 3 }}
              defaultValue=""
            />
            <FormControl.ErrorMessage>
              {errors.chatname?.message}
            </FormControl.ErrorMessage>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  size="2xl"
                  placeholder="Username"
                  InputRightElement={ICONS.user}
                  value={value}
                  onChangeText={(val) => onChange(val)}
                  onBlur={onBlur}
                />
              )}
              name="username"
              rules={{ required: 'Username is required', minLength: 4 }}
            />
            <FormControl.ErrorMessage>
              {errors.username?.message}
            </FormControl.ErrorMessage>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  size="2xl"
                  placeholder="Expiration in days"
                  keyboardType="numeric"
                  InputRightElement={ICONS.calendar}
                  value={String(value)}
                  onChangeText={(val) => onChange(val)}
                  onBlur={onBlur}
                  defaultValue="1"
                />
              )}
              name="expirationInDays"
              rules={{ required: 'expirationInDays is required' }}
            />
            <FormControl.ErrorMessage>
              {errors.expirationInDays?.message}
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <Button
          marginTop={4}
          onPress={handleSubmit(onSubmit)}
          colorScheme="amber"
        >
          Join to the chat
        </Button>
      </Box>
    </Box>
  );
};
