import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontFamily, FontSize, Color } from '../../../GlobalStyles';

// Importing Component
import Card from '../common/Card';

//Importing DummyData
import QuickActionsData from '../../../dummyData/QuickActionsData';

interface MainSectionProps {
  Heading: string;
  Tagline: string;
}

// MainSection Component
const MainSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Quick Actions</Text>
      <View style={styles.cardContainer}>
        {QuickActionsData.map((item: MainSectionProps, index: number) => (
          <View style={styles.cardItem} key={index}>
            <Card
              Heading={item.Heading}
              Tagline={item.Tagline}
              CardColor={'#E2F4F8'}
              arrowIcon={require('../../../assets/images/arrow-button.png')}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 20,
  },
  content: {
    letterSpacing: 0.4,
    fontSize: FontSize.web18Medium_size,
    textAlign: 'left',
    color: Color.text,
    fontFamily: FontFamily.mobile18ExtraBold,
    fontWeight: '800',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  cardItem: {
    marginBottom: 20,
  },
});

export default MainSection;
