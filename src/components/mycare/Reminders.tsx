import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FontFamily, FontSize, Color, Border} from '../../../GlobalStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Importing DummyData
import remindersData from '../../../dummyData/reminders';

// Reminders Component
const Reminders = () => {
  const [reminders, setReminders] = useState<string[]>(remindersData);
  const [selectedReminder, setSelectedReminder] = useState<string[]>([]);

  const handleCheckboxChange = (reminder: string) => {
    if (selectedReminder.includes(reminder)) {
      setSelectedReminder(
        selectedReminder.filter(selected => selected !== reminder),
      );
    } else {
      setSelectedReminder([...selectedReminder, reminder]);
    }
  };

  return (
    <>
      <Text style={styles.titleText}>Today’s Reminders</Text>

      <View style={styles.remindersContainer}>
        <ScrollView>
          <View>
            {reminders.map((reminder, index) => (
              <View key={index} style={styles.reminderItem}>
                <BouncyCheckbox
                  size={25}
                  fillColor={Color.mobilePrimary}
                  unfillColor="#FFFFFF"
                  textStyle={styles.reminderText}
                  text={reminder}
                  innerIconStyle={{borderWidth: 2}}
                  onPress={(isChecked: boolean) => {}}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: FontSize.web18Medium_size,
    letterSpacing: 0.4,
    fontWeight: '800',
    fontFamily: FontFamily.mobile18ExtraBold,
    color: Color.text,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
  },
  remindersContainer: {
    borderRadius: Border.br_xs,
    width: '100%',
    backgroundColor: '#f0f8ff',
    maxHeight: 200,
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderWidth: 1.5,
    marginBottom: 10,
  },
  reminderItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 12,
    paddingLeft: 10,
    alignItems: 'center',
  },
  reminderText: {
    color: Color.textMobile,
    fontFamily: FontFamily.mobile16Bold,
    fontWeight: '600',
    fontSize: FontSize.mobile16Bold_size,
  },
});

export default Reminders;
