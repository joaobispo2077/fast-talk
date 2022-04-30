import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box, Heading, IconButton } from 'native-base';

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

  const params = route.params;

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
        <IconButton
          size={10}
          variant="solid"
          icon={ICONS.goback}
          onPress={handleNavigateGoBack}
        />
        <Heading size="xl" mb="4" color="orange.500">
          Chat - {params.chatname}
        </Heading>
      </Box>
    </Box>
  );
};
