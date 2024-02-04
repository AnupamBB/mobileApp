import React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import SignIn from './components/patientRegistration/SignIn';
import NumberVarification from './components/patientRegistration/NumberVarification';


export type RootStackParamList = {
  SignIn: undefined;
  NumberVarification : undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name= "NumberVarification"
        component={NumberVarification}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
