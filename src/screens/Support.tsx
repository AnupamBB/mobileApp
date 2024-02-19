import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';

// Importing Components
import Header from '../components/common/Header';
import Main from '../components/home/Main';
import Backgroundlogo from '../components/common/backgroundlogo';
import SupportCard from '../components/support/SupportCard';
import Card from '../components/common/Card';
import NavigationBar from '../components/common/BottomBar';

// Importing DummyData
import CommunityDetails from '../../dummyData/CommunityDetails';
import YourEssentials from '../../dummyData/YourEssentials';
import DoctorsDetails from '../../dummyData/DoctorsDetails';


// Support Screen
const Support: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Backgroundlogo top={-488} left={-360} />
        <View style={styles.contentContainer}>
          <Header
            notificationBingIcon={require('../../assets/images/notificationbing.png')}
            aiCoach={require('../../assets/images/ai-coach-1.png')}
            Heading={'Help & Support'}
          />
          <Main
            paragraph="Get help with your day to day supplies, connect with community and get expert advice"
            image={require('../../assets/images/image-17.png')}
            image_Pos={{ width: 153, height: 151 }}
            padding={30}
          />
          <Text style={[styles.sectionTitle, { marginTop: 0 }]}>
            Your Essentials
          </Text>
          <View style={styles.cardContainer}>
            {YourEssentials.map((item, index) => (
              <View style={{ marginTop: 10 }} key={index}>
                <Card
                  key={index}
                  image={item.image}
                  Heading={item.Heading}
                  Heading_Pos={'right'}
                  Tagline={item.Tagline}
                  CardColor={'#E2F4F8'}
                  arrowIcon={require('../../assets/images/arrow-button.png')}
                />
              </View>
            ))}
          </View>
          <Text style={styles.sectionTitle}>Discuss with Community</Text>
          <SupportCard
            data={CommunityDetails}
            heading="Connect with patients with similar surgery and learn from them. Share your experiences"
          />
          <Text style={styles.sectionTitle}>
            Get Expert Advice from Doctors
          </Text>
          <SupportCard data={DoctorsDetails} />
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
  scrollViewContent: {
    backgroundColor: Color.backgroundMobile,
    borderColor: Color.text,
    padding: 10,
    paddingTop: 0,
  },
  contentContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontFamily: FontFamily.mobile18ExtraBold,
    fontWeight: '800',
    letterSpacing: 0.4,
    fontSize: FontSize.web18Medium_size,
    textAlign: 'left',
    color: Color.text,
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
});

export default Support;
