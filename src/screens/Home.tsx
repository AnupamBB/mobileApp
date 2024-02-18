import React, { memo } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
// import { Color } from '../../GlobalStyles';

// Importing Components
import Backgroundlogo from '../components/common/backgroundlogo';
import Header from '../components/common/Header';
import Main from '../components/home/Main';
import UpdateComponent from '../components/home/UpdatesComponent';
import MainSection from '../components/home/MainSection';
import NavigationBar from '../components/common/BottomBar';
import Card from '../components/common/Card';

// Importing DummyData
import CardData from '../../dummyData/CardData';


// Home Screen
const Home: React.FC = memo(() => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.mainContainer]}>
          <Backgroundlogo top={-425} left={-450} />

          <Header
            logo={require('../../assets/images/logo.png')}
            notificationBingIcon={require('../../assets/images/notificationbing.png')}
            aiCoach={require('../../assets/images/ai-coach-1.png')}
          />

          <Main
            main_heading="Living with stoma"
            image={require('../../assets/images/image-18.png')}
            paragraph="AI assisted patient care system to help your pre and post surgery care"
            image_Pos={{ width: 173, height: 171 }}
          />

          <View style={styles.cardContainer}>
            {CardData.map((item, index) => (
              <Card
                key={index}
                CardColor={'white'}
                Heading={item.Heading}
                Tagline={item.Tagline}
                arrowIcon={require('../../assets/images/arrowsmright.png')}
              />
            ))}
          </View>

          <MainSection />
          <UpdateComponent />
        </View>
      </ScrollView>

      <NavigationBar />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.backgroundMobile,
    // borderColor: Color.text,
  },
  mainContainer: {
    flex: 1,
    margin: 10,
    marginTop: 0,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default Home;
