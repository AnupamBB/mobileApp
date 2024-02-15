import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';

//navigator
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
// import { useNavigation } from '@react-navigation/native';


// const navigation = useNavigation<Registration<any>>();
type RegistrationProps = NativeStackScreenProps<RootStackParamList>

const genderData = [
  { label: 'male', gender: 'male' },
  { label: 'female', gender: 'female' },
  { label: 'others', gender: 'others' },
];
const bloodData = [
  { label: 'A+', blood: 'A+' },
  { label: 'B+', blood: 'B+' },
  { label: 'AB+', blood: 'AB+' },
  { label: '0-', blood: '0-' },
  { label: '0+', blood: '0+' },
];


const Registration = ({ navigation }: RegistrationProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState('');
  const [blood, setBlood] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');


    // Function to handle input changes

    const handleInputChange = (field : any, value: any) => {
      switch (field) {
        case 'firstName':
          setFirstName(value);
          break;
        case 'lastName':
          setLastName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'city':
          setCity(value);
          break;
        // Add cases for other fields as needed
        default:
          break;
      }
    };

  const handleDateChange = (event : any, date : any) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const nextpage = () =>{
    navigation.navigate('CareSupport', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      dateOfBirth: selectedDate,
      gender: gender,
      bloodGroup: blood,
      city: city,
    } as never);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>First Name</Text>
      </View>
      <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={(value) => handleInputChange('firstName', value)}
        />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Last Name</Text>
      </View>
      <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={(value) => handleInputChange('lastName', value)}
        />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Email</Text>
      </View>
      <TextInput
          style={styles.input}
          value={email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
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
      <TextInput
          style={styles.input}
          value={city}
          onChangeText={(value) => handleInputChange('city', value)}
        />
      </ScrollView>
      <TouchableOpacity
      onPress={nextpage}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Save & Next</Text>
        <Image source={require('../../../assets/photos/arrow.png')} />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
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
