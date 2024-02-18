import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { StatusBar } from 'react-native';
// Navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './components/patientRegistration/SignIn';
import NumberVarification from './components/patientRegistration/NumberVarification';
import RegistrationNav from './components/RegistrationNav';
import Registration from './components/patientRegistration/Registration';
import CareSupport from './components/patientRegistration/CareSupport';
import SurgeryDetails from './components/patientRegistration/SurgeryDetails';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Support from './screens/Support';
// import MyCare from './screens/MyCare';
// import Temp from './components/common/Card';

// const Stack = createNativeStackNavigator();


export type RootStackParamList = {
  SignIn: undefined;
  NumberVarification: undefined;
  Registration: undefined;
  CareSupport: undefined;
  Home: undefined;
  Profile: undefined;
  Support: undefined;
  SurgeryDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const backImage = require('../assets/photos/Back.png');

function CustomHeaderLeft() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.backImageContainer} onPress={() => navigation.goBack()}>
      <Image source={backImage} />
    </TouchableOpacity>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerLeft: () => <CustomHeaderLeft/>,
          headerShadowVisible: false,
        }}
      >
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
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <RegistrationNav heading='Registration' subHeading='patient' />,
          }}
        />
        <Stack.Screen
          name="CareSupport"
          component={CareSupport}
          options={{
            headerTitle: () => <RegistrationNav heading='Care Support' subHeading='Registration' />,
          }}
        />
        <Stack.Screen
          name="SurgeryDetails"
          component={SurgeryDetails}
          options={{
            headerTitle: () => <RegistrationNav heading='Surgery Details' subHeading='Care Information' />,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  backImageContainer: {
    backgroundColor: '#5C49C5',
    alignItems: 'center',
    justifyContent: 'center',
    width:32,
    height: 32,
    borderRadius: 10,
  },
});
