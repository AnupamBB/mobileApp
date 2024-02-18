import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
// import { Color } from '../../GlobalStyles';

// Importing Components
import Header from '../components/common/Header';
import Backgroundlogo from '../components/common/backgroundlogo';
import NavigationBar from '../components/common/BottomBar';
import RemainingDays from '../components/mycare/RemainingDays';
import Inquiry from '../components/mycare/Inquiry';
import Reminders from '../components/mycare/Reminders';
import CommonQuestions from '../components/mycare/CommonQuestions';
import Videos from '../components/mycare/Videos';

// Importing DummyData
import VideoData from '../../dummyData/VideoData';
import Documents from '../../dummyData/Documents';

// My Care Screen
const MyCare: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <Backgroundlogo top={-553} left={-144} />
            <View>
              <Header
                notificationBingIcon={require('../../assets/images/notificationbing.png')}
                aiCoach={require('../../assets/images/ai-coach-1.png')}
                Heading={'My Care'}
              />
              <RemainingDays />
              <Inquiry />
              <View>
                <Reminders />
                <CommonQuestions />
                <Videos content={VideoData} heading={'Check Videos'} />
              </View>
              <Videos content={Documents} heading={'Informative Documents'} />
            </View>
          </View>
        </ScrollView>

        <NavigationBar />
      </View>
    </>
  );
};

export default MyCare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFF',
  },
  scrollContainer: {
    // backgroundColor: Color.backgroundMobile,
    // borderColor: Color.text,
    padding: 10,
    paddingTop: 0,
  },
});
