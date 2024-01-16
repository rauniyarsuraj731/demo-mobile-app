import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import ListScreen from './components/ListScreen';
import DetailScreen from './components/DetailScreen';



function App() {
  const Stack = createNativeStackNavigator()

  return (
   <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="Home" component={ListScreen} options={{headerShown:false}} />
    <Stack.Screen name ="DetailScreen" component={DetailScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}



export default App;
