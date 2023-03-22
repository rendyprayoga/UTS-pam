import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screen/Beranda';
import TodoScreen from './Screen/Todo';
import TentangScreen from './Screen/Tentang';

const Stack = createNativeStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TodoScreen" component={TodoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TentangScreen" component={TentangScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}