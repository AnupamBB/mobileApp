import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text  style={styles.headerText}>
        <Text style={styles.headerFirstText}>medprep</Text>
        <Text>.</Text>
        <Text style={styles.headerSecondText}>ai</Text>
      </Text>
      <Image source={require('../assets/photos/logo.png')} style={styles.logo} />
      <Text style={styles.tagline}>Helping medical prep students with their goal to know 360 view of every answer</Text>
      <Text style={styles.signInText}>Sign In/Sign Up</Text>
      <View style={styles.inputHeadingContainer}>
      <Text style={styles.inputHeading}>Mobile/Email</Text>
      </View>
      <TextInput style={styles.input} placeholder="+91" keyboardType="phone-pad" />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F7F6ff',
  },
  logo:{
    width: '80%',
    height: '40%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  headerFirstText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#60B5A9ff',
    marginVertical: 10,
  },
  headerSecondText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#589BE8ff',
    marginVertical: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#3c6f54a8',
    textAlign: 'center',
    marginBottom: 50,
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
    height: 50,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#4AB7B0ff',
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
