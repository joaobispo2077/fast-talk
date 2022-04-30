import { createStackNavigator } from '@react-navigation/stack';

import { Chat } from '@src/screens/Chat';
import { JoinChat } from '@src/screens/JoinChat';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="JoinChat"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="JoinChat" component={JoinChat} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};
