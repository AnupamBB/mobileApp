import React, { memo } from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../../../GlobalStyles";

interface FloatingChatProps {
  onClose: () => void;
}

// Floating Chat Component

const FloatingChat: React.FC<FloatingChatProps> = memo(({ onClose }) => {
  return (
    <View style={styles.floatingChat}>
      <View style={[styles.floatingChatChild, styles.rectangleParentBg]} />
      <View style={[styles.rectangleParent, styles.rectangleParentBg]}>
        <View style={styles.frameChild} />
        <Image
          style={[styles.vuesaxboldsendIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../../assets/images/vuesaxboldsend.png")}
        />
        <Text style={[styles.yourQuestion, styles.yourQuestionFlexBox]}>
          your question...
        </Text>
        <Image
          style={[styles.vuesaxoutlineattachCircleIcon, styles.smileIconLayout]}
          resizeMode="cover"
          source={require("../../../assets/images/vuesaxoutlineattachcircle.png")}
        />
        <Image
          style={[styles.smileSmileIcon, styles.smileIconLayout]}
          resizeMode="cover"
          source={require("../../../assets/images/smile-smile.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.aiCoach1Wrapper, styles.groupContainerPosition]}>
          <Image
            style={[styles.aiCoach1Wrapper, styles.groupContainerPosition]}
            resizeMode="cover"
            source={require("../../../assets/images/ai-coach-11.png")}
          />
        </View>
        <View style={[styles.unionParent, styles.unionPosition]}>
          <Image
            style={styles.unionIcon}
            resizeMode="cover"
            source={require("../../../assets/images/union.png")}
          />
          <Text style={[styles.hiJohnHow, styles.sureLCanClr]}>
            Hi John How can I help you
          </Text>
          <Text style={[styles.am, styles.amClr]}>12:10 am</Text>
        </View>
      </View>
      <View style={styles.unionGroup}>
        <View style={styles.union}>
          <View style={styles.unionChild} />
        </View>
        <Text style={[styles.hiCouldYou, styles.am1Typo]}>
          Hi, Could you please help understand how Stoma works for diabetics
          patients like me
        </Text>
        <Text style={[styles.am1, styles.am1Typo]}>12:10 am</Text>
        <View style={[styles.groupContainer, styles.groupContainerPosition]}>
          <Image
            style={[styles.aiCoach1Wrapper, styles.groupContainerPosition]}
            resizeMode="cover"
            source={require("../../../assets/images/group-54.png")}
          />
          <Text style={[styles.you, styles.amTypo]}>You</Text>
        </View>
      </View>
      <View style={styles.groupView}>
        <View style={[styles.unionContainer, styles.unionPosition]}>
          <Image
            style={styles.unionIcon1}
            resizeMode="cover"
            source={require("../../../assets/images/union1.png")}
          />
          <Text style={[styles.sureLCan, styles.sureLCanClr]}>
            Sure, l can provide you basic information. But you can post this
            question to your doctor. What do you want?
          </Text>
          <Text style={[styles.am2, styles.amClr]}>12:10 am</Text>
        </View>
        <View style={[styles.aiCoach1Wrapper, styles.groupContainerPosition]}>
          <Image
            style={[styles.aiCoach1Wrapper, styles.groupContainerPosition]}
            resizeMode="cover"
            source={require("../../../assets/images/ai-coach-11.png")}
          />
        </View>
      </View>
      <Pressable onPress={onClose}>
        <Image
          style={[styles.closeCancelIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../../assets/images/close-cancel.png")}
        />
      </Pressable>
      <Text style={[styles.titleWithIcon, styles.yourQuestionFlexBox]}>
        Chat with Coach
      </Text>
      <View style={[styles.explainHereWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.explainHere}>Explain here</Text>
      </View>
      <Pressable
        style={[styles.connectMeToDoctorWrapper, styles.wrapperFlexBox]}
        onPress={() => {
          console.log("Connect With Doctor");
          // navigation.navigate("Chat With Doctor");
          // onClose();
        }}
      >
        <Text style={styles.explainHere}>Connect me to Doctor</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  rectangleParentBg: {
    backgroundColor: Color.colorWhitesmoke_100,
    position: "absolute",
    width: 328,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  yourQuestionFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  smileIconLayout: {
    height: 18,
    width: 18,
    top: 22,
    position: "absolute",
  },
  groupContainerPosition: {
    width: 32,
    top: 0,
    position: "absolute",
  },
  unionPosition: {
    left: 33,
    top: 4,
    position: "absolute",
  },
  sureLCanClr: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.mobile16Bold_size,
  },
  amClr: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.mobile12SemiBold_size,
    letterSpacing: -0.1,
  },
  am1Typo: {
    left: 11,
    fontFamily: FontFamily.mobile16Bold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  amTypo: {
    fontFamily: FontFamily.mobile16Bold,
    textAlign: "left",
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.mobilePrimary,
    borderRadius: Border.br_5xs,
    left: 59,
    position: "absolute",
  },
  floatingChatChild: {
    height: 48,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  frameChild: {
    top: 15,
    borderRadius: Border.br_6xl,
    borderColor: Color.gray3,
    borderWidth: 1,
    width: 298,
    height: 32,
    left: 15,
    position: "absolute",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  vuesaxboldsendIcon: {
    top: 19,
    left: 279,
  },
  yourQuestion: {
    left: 28,
    fontSize: FontSize.web14Regular_size,
    fontFamily: FontFamily.web14Regular,
    color: Color.gray3,
    letterSpacing: -0.1,
    top: 22,
    textAlign: "left",
  },
  vuesaxoutlineattachCircleIcon: {
    left: 245,
  },
  smileSmileIcon: {
    left: 211,
    overflow: "hidden",
  },
  rectangleParent: {
    marginLeft: -164,
    bottom: 0,
    left: "50%",
    height: 61,
  },
  aiCoach1Wrapper: {
    height: 32,
    left: 0,
  },
  unionIcon: {
    height: 59,
    width: 182,
  },
  hiJohnHow: {
    width: 151,
    fontFamily: FontFamily.mobile16Bold,
    textAlign: "left",
    position: "absolute",
    fontWeight: "600",
    left: 21,
    top: 8,
    color: Color.colorDarkslategray,
  },
  am: {
    top: 62,
    left: 129,
    fontFamily: FontFamily.mobile16Bold,
    textAlign: "left",
    position: "absolute",
    fontWeight: "600",
  },
  unionParent: {
    height: 76,
    width: 182,
  },
  groupParent: {
    top: 63,
    left: 20,
    width: 215,
    height: 80,
    position: "absolute",
  },
  unionChild: {
    top: 168,
    borderRadius: Border.br_3xs,
    width: 247,
    height: 100,
    left: 15,
    position: "absolute",
  },
  unionItem: {
    top: 5,
    left: 239,
    borderRadius: Border.br_11xs,
    width: 17,
    height: 13,
    position: "absolute",
  },
  union: {
    backgroundColor: Color.purpleLight,
    width: 253,
    height: 100,
  },
  hiCouldYou: {
    top: 16,
    width: 227,
    color: Color.colorDarkslategray,
    fontSize: FontSize.mobile16Bold_size,
  },
  am1: {
    top: 110,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.mobile12SemiBold_size,
    letterSpacing: -0.1,
  },
  you: {
    top: 36,
    left: 8,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    color: Color.colorDarkslateblue,
  },
  groupContainer: {
    left: 258,
    height: 48,
  },
  unionGroup: {
    top: 166,
    width: 290,
    height: 124,
    left: 15,
    position: "absolute",
  },
  unionIcon1: {
    height: 92,
    width: 246,
  },
  sureLCan: {
    width: 210,
    fontFamily: FontFamily.mobile16Bold,
    textAlign: "left",
    position: "absolute",
    fontWeight: "600",
    left: 21,
    top: 8,
    color: Color.colorDarkslategray,
  },
  am2: {
    top: 96,
    left: 192,
    fontFamily: FontFamily.mobile16Bold,
    textAlign: "left",
    position: "absolute",
    fontWeight: "600",
  },
  unionContainer: {
    height: 110,
    width: 246,
  },
  groupView: {
    top: 330,
    left: 16,
    width: 279,
    height: 114,
    position: "absolute",
  },
  closeCancelIcon: {
    top: 12,
    left: 288,
    overflow: "hidden",
  },
  titleWithIcon: {
    top: 11,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.lexendSemiBold,
    color: Color.text,
    fontWeight: "600",
    left: 15,
  },
  explainHere: {
    fontFamily: FontFamily.mobile14Regular,
    color: Color.white,
    fontSize: FontSize.mobile16Bold_size,
    textAlign: "left",
  },
  explainHereWrapper: {
    top: 447,
  },
  connectMeToDoctorWrapper: {
    top: 487,
  },
  floatingChat: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(5, 5, 5, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderColor: "#968e8e",
    borderWidth: 2,
    height: 718,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 328,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
});

export default FloatingChat;
