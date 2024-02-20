import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { Color, FontFamily, FontSize } from '../../../GlobalStyles';

// Inquiry Component
const Inquiry: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Ask Question to Doctor or Nurse</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('../../../assets/images/ellipse-8.png')}
        />
        <View style={styles.textInputContainer}>
          <ScrollView 
          contentContainerStyle={{flex:1}}
          >
            <TextInput
              placeholder="your question..."
              style={styles.inputText}
              multiline={true}
            />
          </ScrollView>
          <View style={styles.iconContainer}>
            <Image
              style={styles.smileIcon}
              source={require('../../../assets/images/smile-smile.png')}
            />
            <Image
              style={styles.attachIcon}
              source={require('../../../assets/images/vuesaxoutlineattachcircle.png')}
            />
            <Image
              style={styles.smileIcon}
              source={require('../../../assets/images/vuesaxboldsend.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 102,
    marginTop: 20,
  },
  titleText: {
    color: Color.text,
    textAlign: 'left',
    fontFamily: FontFamily.mobile16Bold,
    fontWeight: '700',
    letterSpacing: 0.4,
    fontSize: FontSize.web18Medium_size,
  },
  inputContainer: {
    height: 73,
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
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
  },
  icon: {
    width: 32,
    height: 32,
  },
  attachIcon: {
    marginRight: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#C5C5C5',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    margin: 5,
  },
  inputText: {
    fontSize: FontSize.web14Regular_size,
    letterSpacing: -0.1,
    fontFamily: FontFamily.web14Regular,
    color: Color.gray3,
    flex: 1,
    
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  smileIcon: {
    height: 18,
    width: 18,
    marginRight: 10,
  },
});

export default Inquiry;
