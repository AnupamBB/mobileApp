import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
// import { FontFamily, FontSize, Color } from '../../../GlobalStyles';

interface MainProps {
  paragraph: string;
  image: ImageSourcePropType;
  main_heading?: string;
  image_Pos?: { width: number; height: number };
  padding?: number;
}

// Main Component

const Main: React.FC<MainProps> = ({ paragraph, image, main_heading, image_Pos, padding = 0 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {main_heading && <Text style={styles.mainHeading}>{main_heading}</Text>}
        <Text style={[styles.paragraph, { paddingTop: padding }]}>{paragraph}</Text>
      </View>
      <View>
        <Image style={[styles.image, { width: image_Pos?.width, height: image_Pos?.height }]} source={image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textContainer: {
    flexWrap: 'wrap',
  },
  mainHeading: {
    // fontSize: FontSize.mobile26ExtraBold_size,
    width: 169,
    // color: Color.text,
    textAlign: 'left',
    // fontFamily: FontFamily.mobile18ExtraBold,
    fontWeight: '800',
    marginBottom: 20,
  },
  paragraph: {
    // fontSize: FontSize.mobile16Bold_size,
    width: 174,
    // fontFamily: FontFamily.mobile16Bold,
    fontWeight: '600',
  },
  image: {
    resizeMode: 'cover',
  },
});

export default Main;
