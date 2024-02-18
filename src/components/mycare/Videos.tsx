import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, Border, FontFamily, FontSize } from "../../../GlobalStyles";

interface Video {
  title: string;
  imageSource: ImageSourcePropType;
}

interface VideosProps {
  content: Video[];
  heading: string;
}

// Video Item Styles
const videoItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: Color.textMobile,
    maxWidth: 135,
  },
});

// Videos Component
const Videos: React.FC<VideosProps> = ({ content, heading }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{heading}</Text>
      <View style={styles.cardContainer}>
        <ScrollView horizontal contentContainerStyle={styles.videoContainer}>
          {content.map((video, index) => (
            <View style={styles.videoItem} key={index}>
              <Image source={video.imageSource} />
              <Text style={videoItemStyles.title}>{video.title}</Text>
            </View>
          ))}
        </ScrollView>

        <Pressable style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/arrowsmright.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  titleText: {
    fontSize: FontSize.web18Medium_size,
    letterSpacing: 0.4,
    fontWeight: "800",
    fontFamily: FontFamily.mobile18ExtraBold,
    color: Color.text,
    textAlign: "left",
    marginBottom: 10,
  },
  cardContainer: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    color: Color.textMobile,
    fontFamily: FontFamily.mobile16Bold,
    fontWeight: "600",
    fontSize: FontSize.mobile16Bold_size,
    textAlign: "left",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorLavender_100,
    borderWidth: 1,
    padding: 20,
  },
  videoContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  videoItem: {
    flex: 1,
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 18,
    width: 18,
  },
});

export default Videos;
