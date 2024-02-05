import React from 'react';
// import { View, Text } from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import SignIn from './components/patientRegistration/SignIn';
import NumberVarification from './components/patientRegistration/NumberVarification';
import RegistrationNav from './components/RegistrationNav';
import Registration from './components/patientRegistration/Registration';

export type RootStackParamList = {
  SignIn: undefined;
  NumberVarification: undefined;
  Registration: undefined;
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
          name="NumberVarification"
          component={NumberVarification}
          options={{
            headerTitle: () => <RegistrationNav heading='Registration' subHeading='patient' />,
            headerStyle: {
            },
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <RegistrationNav heading='Registration' subHeading='patient' />,
            headerStyle: {
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
