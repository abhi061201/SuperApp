import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';
import Screen2 from '../Screens/Screen2';
import MiniApp3 from 'rn-third-app-superapp';
import MiniApp1 from 'rn-first-mini-app';
import MiniApp2 from 'rn-second-mini-app';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="MiniApp1" component={MiniApp1} />
      <Stack.Screen name="MiniApp2" component={MiniApp2} />
      <Stack.Screen name="MiniApp3" component={MiniApp3} />
    </Stack.Navigator>
  );
}

export default RootStack;
