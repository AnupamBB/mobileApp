import React from "react";
import { StyleSheet, Text, View, Image, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";

interface CardProps {
  Heading: string;
  Tagline: string;
  CardColor: string;
  arrowIcon: ImageSourcePropType;
  Heading_Pos?: any; 
  image?: ImageSourcePropType;
}

// Card Component

const Card: React.FC<CardProps> = ({
  Heading,
  Tagline,
  CardColor,
  arrowIcon,
  Heading_Pos,
  image,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.cardBackground, { backgroundColor: CardColor }]}>
        <View style={styles.card} />
      </View>
      <View style={{ flex: 1 }}>
      <Text style={[styles.heading, { textAlign: Heading_Pos }]}>
          {Heading}
        </Text>
        {image ? <Image source={image} style={{ marginLeft: 10 }} /> : null}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              flex: 1,
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.tagline}>{Tagline}</Text>
            </View>

            <View style={styles.arrowIconContainer}>
              <Image style={styles.arrowIcon} source={arrowIcon} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: 102,
    borderRadius: 15,

    marginBottom: 10,
    marginTop: 10,
  },
  arrowIcon: {
    width: 30,
    height: 30,
    alignSelf: "center",
    borderRadius: 50,
  },
  arrowIconContainer: {
    width: 40,
    height: 30,
    borderRadius: 100,

    margin: 5,
    marginLeft: 0,
    alignSelf: "flex-end",
  },
  tagline: {
    letterSpacing: -0.3,
    fontWeight: "500",
    color: Color.textMobile,
    width: 110,
    flexWrap: "wrap",
  },
  cardBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Border.br_xs,
    borderWidth: 1.5,
    borderColor: Color.white,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 1,

    elevation: 5,
  },
  card: {
    flex: 1,
    borderRadius: Border.br_xs,
  },
  heading: {
    marginTop: 5,
    margin: 10,
    fontSize: FontSize.mobile16Bold_size,
    fontWeight: "700",
    fontFamily: FontFamily.mobile16Bold,
    color: Color.colorSlateblue_100,
  },
});
