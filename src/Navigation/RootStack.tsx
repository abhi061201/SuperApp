import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';
import Screen2 from '../Screens/Screen2';
import MobileApp from 'rn-third-app-superapp';
import CarApp from 'rn-first-mini-app';
import FoodApp from 'rn-second-mini-app';
import SplashScreen from '../Screens/SplashScreen';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true, animation: 'none' }}
      />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="CarApp" component={CarApp} />
      <Stack.Screen name="FoodApp" component={FoodApp} />
      <Stack.Screen name="MobileApp" component={MobileApp} />
    </Stack.Navigator>
  );
}

export default RootStack;
