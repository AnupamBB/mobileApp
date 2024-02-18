import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image, ImageStyle, TextStyle, ViewStyle } from "react-native";
// import { Padding, Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

interface NavigationBarProps {
  route?: RouteProp<Record<string, object | undefined>, string>;
}

// NavigationBar Component

const NavigationBar: React.FC<NavigationBarProps> = ({ route: initialRoute }) => {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState<string>("");
  const route = useRoute() || initialRoute;

  useEffect(() => {
    setCurrentScreen(route.name);
  }, [route.name]);

  interface IconMapping {
    [key: string]: {
      normal: any;
      active: any;
    };
  }

  const iconMapping: IconMapping = {
    Home: {
      normal: require("../../../assets/images/home.png"),
      active: require("../../../assets/images/homefill.png"),
    },
    "My Care": {
      normal: require("../../../assets/images/bag-medicine-line.png"),
      active: require("../../../assets/images/bag-medicine-fill.png"),
    },
    Support: {
      normal: require("../../../assets/images/support.png"),
      active: require("../../../assets/images/supportfill.png"),
    },
    Profile: {
      normal: require("../../../assets/images/profilecircle.png"),
      active: require("../../../assets/images/profilecirclefill.png"),
    },
  };

  const getIconSource = (screenName: string) => {
    const { active, normal } = iconMapping[screenName];
    return currentScreen === screenName ? active : normal;
  };

  return (
    <View>
      <View style={styles.navigationBar}>
        {["Home", "My Care", "Support", "Profile"].map((screenName:string,index) => (
          <Pressable
            key={index}
            style={[
              styles.bottomBarItem,
              styles.parentSpaceBlock,
              route?.name === screenName && { backgroundColor: "#f0f0f0" },
            ]}
            onPress={() => navigation.navigate(screenName as never)}
          >
            <Image
              style={[
                styles.bottomBarItemIcon,
                route?.name === screenName && { tintColor: "#5d49c5" },
              ]}
              source={getIconSource(screenName)}
            />
            <Text
              style={[
                styles.bottomBarItemText,
                route?.name === screenName && { color: "#5d49c5" },
              ]}
            >
              {screenName}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    paddingVertical: 0,
    // paddingHorizontal: Padding.p_7xs,
    // backgroundColor: Color.white,
  } as ViewStyle,
  bottomBarItemIcon: {
    width: 24,
    height: 24,
  } as ImageStyle,
  bottomBarItemText: {
    // fontSize: FontSize.mobile10SemiBold_size,
    fontWeight: "600",
    // fontFamily: FontFamily.mobile16Bold,
    // color: Color.label,
    textAlign: "left",
    marginTop: 4,
  } as TextStyle,
  bottomBarItem: {
    justifyContent: "center",
    width: 56,
    paddingVertical: 0,
    // paddingHorizontal: Padding.p_7xs,
    alignItems: "center",
    height: 56,
  } as ViewStyle,
  navigationBar: {
    margin: 10,
    borderRadius: 18,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    elevation: 2,
    shadowOpacity: 1,
    height: 56,
    // backgroundColor: Color.white,
    justifyContent: "space-around",
    flexDirection: "row",
  } as ViewStyle,
});

export default NavigationBar;
