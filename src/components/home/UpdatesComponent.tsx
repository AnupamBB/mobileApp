import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { FontFamily, FontSize, Color, Border } from '../../../GlobalStyles';

// Updates Component

const UpdateComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.updatesText}>Updates</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          AI assisted patient care system to help you pre and post surgery care
        </Text>
        <Text style={styles.advertisementText}>Advertisement</Text>
        <Image
          style={styles.updatesImage}
          source={require('../../../assets/images/advertisement.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  contentContainer: {
    marginTop: 10,
  },
  contentText: {
    width: 319,
    // fontFamily: FontFamily.mobile16Bold,
    fontWeight: '600',
    // fontSize: FontSize.mobile16Bold_size,
    // color: Color.textMobile,
  },
  advertisementText: {
    alignSelf: 'flex-end',
    color: '#8B8993',
  },
  updatesImage: {
    marginTop: 20,
    width: 370,
    // borderRadius: Border.br_xs,
    height: 127,
    alignSelf: 'center',
    top: 0,
  },
  updatesText: {
    letterSpacing: 0.4,
    // fontSize: FontSize.web18Medium_size,
    textAlign: 'left',
    // color: Color.text,
    // fontFamily: FontFamily.mobile18ExtraBold,
    fontWeight: '800',
  },
});

export default UpdateComponent;
