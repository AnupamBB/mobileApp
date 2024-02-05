import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';

//navigator
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type RegistrationProps = NativeStackScreenProps<RootStackParamList, 'Registration'>

const genderData = [
  { label: 'male', gender: '1' },
  { label: 'female', gender: '2' },
  { label: 'others', gender: '3' },
];
const bloodData = [
  { label: 'A+', blood: '1' },
  { label: 'B+', blood: '2' },
  { label: 'AB+', blood: '3' },
  { label: '0-', blood: '4' },
  { label: '0+', blood: '5' },
];


const Registration = ({ navigation }: RegistrationProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState(null);
  const [blood, setBlood] = useState(null);


  const handleDateChange = (event : any, date : any) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>First Name</Text>
      </View>
      <TextInput style={styles.input} />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Last Name</Text>
      </View>
      <TextInput style={styles.input} />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Email</Text>
      </View>
      <TextInput style={styles.input} />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Date of Birth</Text>
      </View>
      <View style={styles.calendarContainer}>
        <Text style={styles.dateInput}>{selectedDate.toLocaleDateString()}</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.calendarImageContainer}>
          <Image  source={require('../../../assets/photos/calendar.png')}/>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Gender</Text>
      </View>
      <View style={styles.dropdowncontainer}>
        <Dropdown
          style={styles.dropdown}
          data={genderData}
          // search
          maxHeight={300}
          labelField="label"
          valueField="gender"
          placeholder="Select Gender"
          searchPlaceholder="Search..."
          value={gender}
          onChange={(item: { label: any; gender: any }) => {
            setGender(item.gender);
          }}
        />
      </View>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Blood Group</Text>
      </View>
      <View style={styles.dropdowncontainer}>
        <Dropdown
          style={styles.dropdown}
          data={bloodData}
          // search
          maxHeight={300}
          labelField="label"
          valueField="blood"
          placeholder="Select Blood Group"
          searchPlaceholder="Search..."
          value={blood}
          onChange={(item: { label: any; blood: any }) => {
            setBlood(item.blood);
          }}
        />
      </View>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>city</Text>
      </View>
      <TextInput style={styles.cityInput} />
      </ScrollView>
      <TouchableOpacity
      onPress={() => navigation.navigate('Registration') }
       style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Register</Text>
        <Image source={require('../../../assets/photos/arrow.png')}/>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F3F7F6ff',
    minHeight: 750,
    position: 'relative',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  tickCircle: {
    position: 'absolute',
    top: 16,
    left: 72,
  },
  varificationsMessageContainer: {
    fontFamily: 'Lato-Bold',
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 16,
    fontWeight: '500',
    color: '#62606F',
  },
  containerHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 16,
    paddingRight: 16,
  },
  calendarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    position: 'relative',
  },
  calendarImageContainer: {
    position: 'absolute',
    right: 16,
  },
  inputHeading: {
    fontFamily: 'Lato-Bold',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
    color: '#7d7c83',
  },
  inputHeadingResendCode: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#0273E6',
  },
  input: {
    width: '100%',
    height: 50,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    paddingLeft: 22,
  },
  cityInput: {
    width: '100%',
    height: 50,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginVertical: 10,
    marginBottom: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    paddingLeft: 22,
  },
  dateInput: {
    width: '100%',
    height: 50,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    paddingLeft: 22,
    display: 'flex',
    textAlignVertical:'center',
  },
  buttonContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    backgroundColor: '#5C49C5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
    position: 'absolute',
    bottom: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  dropdowncontainer: {

  },
  dropdown: {
      fontWeight: 'bold',
      height: 48,
      marginVertical: 10,
      borderColor: 'gray',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderRadius: 50,
      paddingHorizontal: 15,
      width: '100%',
      fontSize: 18,
      paddingLeft: 22,
    },
});

export default Registration;
