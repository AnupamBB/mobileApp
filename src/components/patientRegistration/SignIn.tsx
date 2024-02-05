import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';

//navigator
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>


const SignIn = ({navigation}: SignInProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/photos/backgroundLogin.png')} style={styles.headerContainer}>
      <Image source={require('../../../assets/photos/mainLogo.png')} style={styles.headerText} />
        <Image source={require('../../../assets/photos/logo.png')} style={styles.logo} />
      </ImageBackground>
      <Text style={styles.signInText}>Sign In/Sign Up</Text>
      <View style={styles.inputHeadingContainer}>
        <Text style={styles.inputHeading}>Mobile/Email</Text>
      </View>
      <TextInput style={styles.input} placeholder="+91" keyboardType="phone-pad" />
      <TouchableOpacity
      onPress={() => navigation.navigate('NumberVarification') }
       style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Get code</Text>
        <Image source={require('../../../assets/photos/arrow.png')}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F3F7F6ff',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '140%',
    top: -100,
    right: 60,
  },
  logo: {
    width: '60%',
    height: '60%',
    position: 'relative',
    top: 40,
    left: 80,
  },
  headerText: {
    position: 'relative',
    top: 32,
    left: -48,
  },
  signInText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 32,
  },
  inputHeadingContainer: {
    alignSelf: 'stretch',
  },
  inputHeading: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7d7c83',
  },
  input: {
    width: '100%',
    height: 48,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    paddingLeft: 22,
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#5C49C5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SignIn;
