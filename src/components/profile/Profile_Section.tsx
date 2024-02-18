import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../../../GlobalStyles";

// Importing DummyData
import ProfileData from "../../../dummyData/ProfileData";

interface ProfileSectionProps {
  Heading: string;
  data?: string[];
}

// Profile Section Component
const ProfileSection: React.FC<ProfileSectionProps> = ({ Heading, data }) => {
  return (
    <View style={styles.profileContainer}>
      <Pressable style={styles.pressableContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>{Heading}</Text>
          {data && <Text style={styles.dataText}>{data.join(", ")}</Text>}
        </View>
        <Image
          style={styles.arrowImage}
          source={require("../../../assets/images/arrowright1.png")}
        />
      </Pressable>
    </View>
  );
};

const Profile_Section: React.FC = () => {
  return (
    <>
      {ProfileData.map((item, index) => (
        <ProfileSection key={index} Heading={item.Heading} data={item.data} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    height: 77,
    backgroundColor: Color.white,
    margin: 10,
    borderRadius: Border.br_xs,
    shadowColor: "#efedf9",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorLavender_100,
    borderWidth: 1,
    padding: 12,
  },
  pressableContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  headingText: {
    fontSize: FontSize.web18Medium_size,
    letterSpacing: 0.4,
    fontWeight: "700",
    color: Color.colorSlateblue_100,
  },
  dataText: {
    fontSize: FontSize.mobile16Bold_size,
    fontWeight: "600",
    color: Color.subText,
    textAlign: "left",
    fontFamily: FontFamily.mobile16Bold,
    marginTop: 5,
  },
  arrowImage: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
});

export default Profile_Section;
