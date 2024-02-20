import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { FontSize, FontFamily, Color, Border } from '../../../GlobalStyles';

// Importing DummyData
import questions from '../../../dummyData/CommonQuestion';

// BulletPoint Component
const BulletPoint: React.FC = () => (
  <Text
    style={{
      color: Color.textMobile,
      fontFamily: FontFamily.mobile16Bold,
      fontWeight: '600',
      fontSize: FontSize.mobile16Bold_size,
      marginBottom: 11,
      marginRight: 10,
    }}
  >
    {`\u2022`}
  </Text>
);

// CommonQuestions Component
const CommonQuestions: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.titleText]}>Common Questions</Text>
      <View style={styles.cardContainer}>
        <ScrollView>
          {questions.map((question, index) => (
            <View style={styles.bulletPointContainer} key={index}>
              <BulletPoint />
              <Text style={styles.questionText}>{question}</Text>
            </View>
          ))}
        </ScrollView>
        <Pressable style={styles.iconContainer}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../../../assets/images/arrowsmright.png') as ImageSourcePropType}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: FontSize.web18Medium_size,
    letterSpacing: 0.4,
    fontWeight: '800',
    fontFamily: FontFamily.mobile18ExtraBold,
    color: Color.text,
  },
  cardContainer: {
    height: 188,
    marginTop: 10,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: Color.colorLavender_100,
    borderWidth: 1,
    padding: 20,
  },
  bulletPointContainer: {
    flexDirection: 'row',
  },
  questionText: {
    color: Color.textMobile,
    fontFamily: FontFamily.mobile16Bold,
    fontWeight: '600',
    fontSize: FontSize.mobile16Bold_size,
    marginBottom: 11,
    marginRight:8
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 18,
    width: 18,
  },
  iconLayout: {
    marginLeft: 10,
  },
});

export default CommonQuestions;
