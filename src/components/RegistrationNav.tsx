import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const RegistrationNav = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={styles.subHeading}>{props.subHeading}</Text>
    </View>
  );
};

export default RegistrationNav;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeading: {
    fontSize: 14,
    color: '#8B8993',

  },
});
