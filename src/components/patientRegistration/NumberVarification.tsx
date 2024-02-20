import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

//navigator
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NumberVarificationProps = NativeStackScreenProps<RootStackParamList, 'NumberVarification'>

const NumberVarification = ({navigation}: NumberVarificationProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/photos/tick-circle.png')} style={styles.tickCircle} />
      <View style={styles.varificationsMessageContainer}>
        <Text style={styles.varificationsMessage}>6 digit verification code sent to</Text>
        <Text style={styles.varificationsMessage}>your mobile</Text>
      </View>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Mobile Number</Text>
        <Text style={styles.inputHeadingResendCode}>Resend Code</Text>
      </View>
      <TextInput style={styles.input} placeholder="+91" keyboardType="phone-pad" />
      <View style={styles.containerHeading}>
        <Text style={styles.codeHeading}>Code</Text>
      </View>
      <TextInput style={styles.input} keyboardType="phone-pad" />
      <TouchableOpacity
      onPress={() => navigation.navigate('Registration') }
       style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Register</Text>
        <Image source={require('../../../assets/photos/arrow.png')}/>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    minHeight: 750,
    position: 'relative',
  },
  tickCircle: {
    position: 'absolute',
    top: 16,
    left: 72,
  },
  varificationsMessageContainer: {
    fontFamily: 'Lato-Bold',
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 16,
    fontWeight: '500',
    color: '#62606F',
  },
  varificationsMessage: {
    fontFamily: 'Lato-Bold',
    color: '#62606F',
  },
  containerHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 16,
    paddingRight: 16,
  },
  inputHeading: {
    fontFamily: 'Lato-Bold',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
    color: '#7d7c83',
  },
  inputHeadingResendCode: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#0273E6',
  },
  codeHeading: {
    fontFamily: 'Lato-Bold',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
    color: '#8B8993',
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
    fontSize: 18,
    paddingLeft: 22,
    color: '#151B17',
  },
  buttonContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    backgroundColor: '#5C49C5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
    position: 'absolute',
    bottom: 64,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default NumberVarification;
