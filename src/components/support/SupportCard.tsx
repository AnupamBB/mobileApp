import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../../../GlobalStyles';

interface SupportCardItem {
  image: ImageSourcePropType;
  name: string;
  qualification?: string;
  location: string;
  gender?: string;
  age?: number;
}

interface SupportCardProps {
  data: SupportCardItem[];
  heading?: string;
}

// SUpportCard Component
const SupportCard: React.FC<SupportCardProps> = ({ data, heading }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.headingText}>{heading}</Text>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image style={styles.itemImage} source={item.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {item.qualification
                ? `${item.qualification}\n${item.location}`
                : `${item.gender}, ${item.age}\n${item.location}`}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Pressable style={styles.arrowContainer}>
        <Image
          style={styles.arrowIcon}
          source={require('../../../assets/images/arrowsmright.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
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
    padding: 10,
  },
  headingText: {
    fontSize: FontSize.web14Regular_size,
    letterSpacing: -0.3,
    fontWeight: '500',
    color: '#8B8993',
  },
  scrollViewContent: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  itemContainer: {
    alignItems: 'center',
  },
  itemImage: {
    alignSelf: 'center',
  },
  itemName: {
    fontSize: FontSize.web14Regular_size,
    fontWeight: '500',
    fontFamily: FontFamily.web18Medium,
    color: Color.text,
    textAlign: 'center',
  },
  itemDetails: {
    textAlign: 'center',
    fontSize: FontSize.mobile12SemiBold_size,
    fontWeight: '600',
    fontFamily: FontFamily.mobile16Bold,
    color: Color.disabled,
    width: 80,
    flexWrap: 'wrap',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    resizeMode: 'cover',
  },
});

export default SupportCard;
