import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from './src/screens/home';
import Detail from './src/screens/detail';
import styles from './src/screens/home/styles';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Alışveriş Merkezleri", headerStyle:{backgroundColor:'#C03461',borderBottomColor:'#F3698C',borderBottomWidth:2},headerTintColor:'#fff', headerTitleAlign:'center'}} />
        <Stack.Screen name="Detail" component={Detail} options={{title:"Kat Planı", headerStyle:{backgroundColor:'#C03461',borderBottomColor:'#F3698C',borderBottomWidth:2},headerTintColor:'#fff', headerTitleAlign:'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;