import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';
import Screen2 from '../Screens/Screen2';
import Child1 from 'rn-third-app-superapp';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Child1" component={Child1} />
    </Stack.Navigator>
  );
}

export default RootStack;
