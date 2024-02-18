import React from "react";
import { Image, StyleSheet, ImageStyle } from "react-native";

interface BackgroundLogoProps {
  top: number;
  left: number;
}

// Background Logo Component
const BackgroundLogo: React.FC<BackgroundLogoProps> = ({ top, left }) => {
  const position: ImageStyle = {
    top,
    left,
  };

  return (
    <Image
      style={[styles.style, position]}
      resizeMode="cover"
      source={require("../../../assets/images/group-237619.png")}
    />
  );
};

export default BackgroundLogo;

const styles = StyleSheet.create({
  style: {
    position: "absolute",
    width: 835,
    height: 821,
  },
});
