import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/store/configure-store'
import HomeScreen from './src/screens/home.screen'

const Stack = createStackNavigator();
export default App = () => {
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
}