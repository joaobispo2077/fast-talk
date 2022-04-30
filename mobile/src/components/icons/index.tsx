import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'native-base';
import React from 'react';

export const ICONS = {
  chat: (
    <Icon
      as={Ionicons}
      name="chatbox"
      size="5"
      color="muted.400"
      marginRight={2}
    />
  ),
  user: (
    <Icon
      as={Ionicons}
      name="people"
      size="5"
      color="muted.400"
      marginRight={2}
    />
  ),
  calendar: (
    <Icon
      as={Ionicons}
      name="calendar"
      size="5"
      color="muted.400"
      marginRight={2}
    />
  ),
  email: (
    <Icon
      as={Ionicons}
      name="mail"
      size="5"
      color="muted.400"
      marginRight={2}
    />
  ),
  goback: (
    <Icon
      as={Ionicons}
      name="arrow-back"
      size="5"
      color="muted.400"
      marginRight={2}
    />
  ),
  sendMessage: <Icon as={Ionicons} name="send" size="5" color="white" />,
  settings: <Icon as={Ionicons} name="settings" size="8" color="gray.400" />,
};
