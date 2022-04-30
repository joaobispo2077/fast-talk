import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Box,
  FlatList,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  ScrollView,
} from 'native-base';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Message } from './Message';
import { messages } from './messages';

import { ICONS } from '@src/components/icons';
import { StackNavigatorParamList } from '@src/routes';

export type ChatScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Chat'
>;

type Router = RouteProp<StackNavigatorParamList, 'Chat'>;

export const Chat = () => {
  const navigation = useNavigation<ChatScreenNavigationProps>();
  const route = useRoute<Router>();

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const params = route.params || { chatname: 'Name not found' };

  return (
    <Box backgroundColor={'red.400'} flex={1} alignItems={'center'}>
      <Flex
        backgroundColor={'white'}
        width={'100%'}
        padding={4}
        borderBottomColor={'gray.200'}
        borderBottomWidth={2}
        direction={'row'}
        paddingTop={`${getStatusBarHeight() + 20}px`}
        justifyContent={'space-between'}
      >
        <HStack>
          <IconButton
            size={10}
            variant="solid"
            icon={ICONS.goback}
            onPress={handleNavigateGoBack}
            backgroundColor={'transparent'}
          />
          <Heading size="xl" color="orange.500">
            Chat - {params.chatname}
          </Heading>
        </HStack>
        <IconButton icon={ICONS.settings} />
      </Flex>
      <Flex width={'100%'} height={'100%'} flex={3} backgroundColor={'white'}>
        <ScrollView>
          <FlatList
            padding={'20px'}
            data={messages}
            renderItem={({ item }) => (
              <Message
                isMyMessage={item.isMyMessage}
                message={item.message}
                avatar={item.avatar}
                createdAt={item.createdAt}
              />
            )}
          />
          <Box
            backgroundColor={'white'}
            display="flex"
            flex={1}
            height={'100%'}
          >
            <Input
              backgroundColor={'white'}
              placeholder="Type a message..."
              placeholderTextColor="gray.500"
              width={'100%'}
              textAlignVertical="center"
              variant="filled"
              InputRightElement={
                <IconButton
                  icon={ICONS.sendMessage}
                  backgroundColor={'orange.500'}
                />
              }
              height={'100%'}
            />
          </Box>
        </ScrollView>
      </Flex>
    </Box>
  );
};
