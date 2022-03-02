import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import DetailPhoto from '../screens/DetailPhoto';

import type {RootStackParamList} from './Navigation.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="DetailPhoto" component={DetailPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
