import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../../GlobalStyles';

// Importing Components
import Header from '../components/common/Header';
import Profile_Section from '../components/profile/Profile_Section';
import Backgroundlogo from '../components/common/backgroundlogo';
import NavigationBar from '../components/common/BottomBar';

// Profile Screen
const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Backgroundlogo top={-488} left={-360} />
          <View style={styles.contentContainer}>
            <Header
              notificationBingIcon={require('../../assets/images/notificationbing.png')}
              aiCoach={require('../../assets/images/ai-coach-1.png')}
              Heading={'Profile'}
            />
            <View style={styles.profileInfoContainer}>
              <Image
                style={styles.profileImage}
                source={require('../../assets/images/ellipse-19.png')}
              />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileNameText}>Tom Lee</Text>
                <Text style={styles.profileDetailsText}>Male, 42yrs</Text>
                <Text style={styles.profileDetailsText}>New York, USA</Text>
              </View>
            </View>
            <View style={styles.profileDetailsContainer}>
              <Profile_Section />
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.button}
                  onPress={() => console.log('Product tour pressed')}
                >
                  <Text style={styles.buttonText}>Product tour</Text>
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/images/arrowright1.png')}
                  />
                </Pressable>
              </View>
              <Pressable
                style={styles.logoutButton}
                onPress={() => console.log('Logout pressed')}
              >
                <Image
                  style={styles.logoutIcon}
                  source={require('../../assets/images/logout.png')}
                />
                <Text style={styles.logoutText}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFF',
  },
  mainContainer: {
    backgroundColor: Color.backgroundMobile,
    padding: 10,
    paddingTop: 0,
  },
  contentContainer: {
    flex: 1,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: Border.br_5xs,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileNameText: {
    fontSize: FontSize.mobile26ExtraBold_size,
    fontWeight: '800',
    fontFamily: FontFamily.mobile18ExtraBold,
    color: Color.text,
  },
  profileDetailsText: {
    color: Color.subText,
    fontWeight: '600',
    fontSize: FontSize.mobile16Bold_size,
    marginTop: 10,
  },
  profileDetailsContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    height: 50,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    shadowColor: '#efedf9',
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
    padding: 12,
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: FontSize.web18Medium_size,
    letterSpacing: 0.4,
    fontWeight: '700',
    color: Color.colorSlateblue_100,
  },
  buttonIcon: {
    position: 'relative',
    alignSelf: 'flex-end',
  },
  logoutButton: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.purpleLight,
    marginTop: 21,
    paddingVertical: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  logoutIcon: {
    width: 20,
    height: 20,
  },
  logoutText: {
    marginLeft: 8,
    fontFamily: FontFamily.mobile16Bold,
    fontWeight: '700',
    letterSpacing: 0.4,
    fontSize: FontSize.web18Medium_size,
    color: Color.text,
  },
});

export default Profile;
