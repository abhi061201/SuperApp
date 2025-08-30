import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigation/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;