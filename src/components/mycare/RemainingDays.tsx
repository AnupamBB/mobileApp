import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontFamily, Color, FontSize, Border } from '../../../GlobalStyles';

// RemainingDays Component
const RemainingDays: React.FC = () => {
  return (
    <>
      <View style={styles.daysContainer}>
        <Text style={styles.daysText}>7 days</Text>
        <Text style={styles.toSurgeryText}>to Surgery</Text>
      </View>
      <View style={styles.surgeryTypeContainer}>
        <View style={[styles.button, styles.preSurgeryButton]}>
          <Text style={styles.preText}>Pre Surgery</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.postText}>Post Surgery</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  daysText: {
    fontSize: 30,
    fontWeight: '800',
    fontFamily: FontFamily.mobile18ExtraBold,
    color: Color.mobilePrimary,
  },
  toSurgeryText: {
    color: Color.text,
    fontFamily: FontFamily.mobile16Bold,
    fontWeight: '700',
    letterSpacing: 0.4,
    fontSize: FontSize.web18Medium_size,
    marginTop: 12,
    marginLeft: 10,
  },
  surgeryTypeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  preSurgeryButton: {
    backgroundColor: '#5C49C5',
  },
  button: {
    flex: 1,
    borderColor: Color.colorLavender_100,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: '#efedf9',
    borderRadius: Border.br_xs,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 5,
  },
  postText: {
    color: 'black',
    textAlign: 'left',
    fontFamily: FontFamily.mobile16Bold,
    letterSpacing: 0.4,
    fontSize: FontSize.web18Medium_size,
  },
  preText: {
    color: 'white',
    textAlign: 'left',
    fontFamily: FontFamily.mobile16Bold,
    letterSpacing: 0.4,
    fontSize: FontSize.web18Medium_size,
  },
});

export default RemainingDays;
