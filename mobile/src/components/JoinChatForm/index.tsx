import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {
  Button,
  CheckIcon,
  FormControl,
  Image,
  Input,
  Select,
  Stack,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as yup from 'yup';

import { avatars } from './avatars';

import { ICONS } from '@src/components/icons';
import { apiBaseUrl } from '@src/configs';
import { StackNavigatorParamList } from '@src/routes';
import { JoinChatScreenNavigationProps } from '@src/screens/JoinChat';

type JoinChatFormData = {
  chatname: string;
  username: string;
  expirationInDays: string;
  avatar?: string;
  email: string;
};

const schema = yup.object().shape({
  chatname: yup.string().required('The chat name is required'),
  username: yup.string().required('The username is required'),
  avatar: yup.string(),
  email: yup.string().email('The email is invalid'),
  expirationInDays: yup
    .number()
    .typeError('The value must be a number')
    .positive('The value must be a positive number')
    .required('The expiration in days is required'),
});

export const JoinChatForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinChatFormData>({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation<JoinChatScreenNavigationProps>();

  const hasFormError = Object.keys(errors).length > 0;

  const onSubmit = async (data: JoinChatFormData) => {
    try {
      console.log('submiting with ', data);
      // const response = await axios.post(`${apiBaseUrl}/chats`, data);
      // console.log('response', response.data);
      navigation.navigate('Chat', { chatname: data.chatname });
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  console.log('errors', errors);

  return (
    <FormControl isRequired isInvalid={hasFormError}>
      <Stack space="2.5" marginTop={8}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              size="2xl"
              placeholder="Chat name"
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
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.username?.message}
        </FormControl.ErrorMessage>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              size="2xl"
              placeholder="Email"
              InputRightElement={ICONS.email}
              value={value}
              onChangeText={(val) => onChange(val)}
              onBlur={onBlur}
            />
          )}
          name="email"
          rules={{ required: 'email is required' }}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.email?.message}
        </FormControl.ErrorMessage>
        <Controller
          control={control}
          name="avatar"
          render={({ field: { onChange, value } }) => (
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Avatar"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              selectedValue={value}
              onValueChange={(val) => onChange(val)}
            >
              {avatars.map((avatar) => (
                <Select.Item
                  key={avatar.name}
                  label={avatar.label}
                  value={avatar.url}
                  accessibilityLabel={avatar.name}
                  leftIcon={
                    <Image
                      source={{
                        uri: avatar.url,
                      }}
                      alt={avatar.label}
                      width={10}
                      height={10}
                      borderRadius={20}
                    />
                  }
                />
              ))}
            </Select>
          )}
        />
        <FormControl.ErrorMessage>
          {errors.avatar?.message}
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
            />
          )}
          name="expirationInDays"
          rules={{ required: 'expirationInDays is required' }}
          defaultValue="1"
        />
        <FormControl.ErrorMessage>
          {errors.expirationInDays?.message}
        </FormControl.ErrorMessage>
      </Stack>
      <Button
        marginTop={4}
        onPress={handleSubmit(onSubmit)}
        colorScheme="amber"
      >
        Join to the chat
      </Button>
    </FormControl>
  );
};
