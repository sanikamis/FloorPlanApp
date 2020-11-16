import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from './src/screens/home';
import Detail from './src/screens/detail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"AVM Listesi"}} />
        <Stack.Screen name="Detail" component={Detail} options={{title:"AVM Kat Planı"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;