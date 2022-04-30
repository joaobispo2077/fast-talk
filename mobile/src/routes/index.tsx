import { createStackNavigator } from '@react-navigation/stack';

import { Chat } from '@src/screens/Chat';
import { JoinChat } from '@src/screens/JoinChat';

export type StackNavigatorParamList = {
  JoinChat: undefined;
  Chat: { chatname: string };
};

const { Navigator, Screen } = createStackNavigator<StackNavigatorParamList>();

export const Routes = () => {
  return (
    <Navigator
      initialRouteName="JoinChat"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="JoinChat" component={JoinChat} />
      <Screen name="Chat" component={Chat} />
    </Navigator>
  );
};
