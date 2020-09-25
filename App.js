import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import store from './src/store/configure-store'
import HomeScreen from './src/screens/Home.screen'
import TodosScreen from './src/screens/Todos.screen'
import TodosDetailScreen from './src/screens/TodosDetail.screen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          {/* <Stack.Screen name='HomeScreen' component={HomeScreen} /> */}
          <Stack.Screen name='TodosScreen' component={TodosScreen} />
          <Stack.Screen name='TodosDetailScreen' component={TodosDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App