import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import FloatingChat from "./FloatingChat";
import { FontFamily, FontSize } from "../../../GlobalStyles";

interface HeaderProps {
  Heading?: string;
  logo?: ImageSourcePropType;
  notificationBingIcon: ImageSourcePropType;
  aiCoach: ImageSourcePropType;
}

// Header Component
const Header: React.FC<HeaderProps> = ({
  Heading,
  logo,
  notificationBingIcon,
  aiCoach,
}) => {
  const [aiCoachVisible, setAiCoachVisible] = useState(false);

  const openAiCoach = () => {
    setAiCoachVisible(true);
  };

  const closeAiCoach = () => {
    setAiCoachVisible(false);
  };

  return (
    <View style={styles.header}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {logo ? (
          <Image style={[styles.logo]} source={logo} />
        ) : (
          <Text
            style={{
              fontSize: FontSize.mobile26ExtraBold_size,
              fontFamily: FontFamily.mobile18ExtraBold,
              color:'black'
            }}
          >
            {Heading}
          </Text>
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
        <View style={styles.notificationBingIcon}>
          <Image source={notificationBingIcon} />
        </View>

        <View style={styles.aiCoach}>
          <TouchableOpacity onPress={openAiCoach}>
            <Image source={aiCoach} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" transparent visible={aiCoachVisible}>
        <View style={styles.aiCoach1Overlay}>
          <Pressable style={styles.aiCoach1Bg} onPress={closeAiCoach} />
          <FloatingChat onClose={closeAiCoach} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  logo: {
    width: 124,
    height: 28,
  },
  aiCoach: {
    alignSelf: "center",
    margin: 5,
  },
  aiCoach1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  aiCoach1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  notificationBingIcon: {
    alignSelf: "center",
    margin: 10,
  },
});

export default Header;
