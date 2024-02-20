import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';

//navigator
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


// const navigation = useNavigation<Registration<any>>();
type RegistrationProps = NativeStackScreenProps<RootStackParamList>

const genderData = [
  { label: 'Male', gender: 'male' },
  { label: 'Female', gender: 'female' },
  { label: 'Others', gender: 'others' },
];
const bloodData = [
  { label: 'A+', blood: 'A+' },
  { label: 'A-', blood: 'A-' },
  { label: 'B+', blood: 'B+' },
  { label: 'B-', blood: 'B-' },
  { label: 'AB+', blood: 'AB+' },
  { label: 'AB-', blood: 'AB-' },
  { label: 'O+', blood: 'O+' },
  { label: 'O-', blood: 'O-' },
];

class RegistrationData {
	firstName: string = '';
	lastName: string = '';
	email: string = '';
	city: string = '';
	date: Date = new Date();
	gender: string = '';
	blood: string = '';
}


const Registration = ({ navigation }: RegistrationProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegistrationData>(new RegistrationData());



  const nextpage = () =>{
    console.log(registrationData);
    navigation.navigate('CareSupport', {
      registrationData,
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
          value={registrationData.firstName}
          onChangeText={(value) => {
            setRegistrationData({
              ...registrationData,
              firstName: value,
            });
          }}
        />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Last Name</Text>
      </View>
      <TextInput
          style={styles.input}
          value={registrationData.lastName}
          onChangeText={(value) => {
            setRegistrationData({
              ...registrationData,
              lastName: value,
            });
          }}
        />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Email</Text>
      </View>
      <TextInput
          style={styles.input}
          value={registrationData.email}
          onChangeText={(value) => {
            setRegistrationData({
              ...registrationData,
              email: value,
            });
          }}
        />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Date of Birth</Text>
      </View>
      <View style={styles.calendarContainer}>
        <Text style={styles.dateInput}>{registrationData.date.toLocaleDateString()}</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.calendarImageContainer}>
          <Image  source={require('../../../assets/photos/calendar.png')}/>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
          <DateTimePicker
            value={registrationData.date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setRegistrationData({
                  ...registrationData,
                  date: selectedDate,
                });
              }
            }}
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
          value={registrationData.gender}
          onChange={(item: { label: any; gender: any }) => {
            setRegistrationData({
              ...registrationData,
              gender: item.gender,
            });
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
          value={registrationData.blood}
          onChange={(item: { label: any; blood: any }) => {
            setRegistrationData({
              ...registrationData,
              blood: item.blood,
            });
          }}
        />
      </View>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>city</Text>
      </View>
      <TextInput
          style={styles.input}
          value={registrationData.city}
          onChangeText={(value) => {
            setRegistrationData({
              ...registrationData,
              city: value,
            });
          }}
        />
        <TouchableOpacity
      onPress={nextpage}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Save & Next</Text>
        <Image source={require('../../../assets/photos/arrow.png')} />
      </TouchableOpacity>
      </ScrollView>
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
    color: '#8B8993',
  },
  inputHeadingResendCode: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#151B17',
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
    color: '#151B17',
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
    color: '#151B17',
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
    color: '#151B17',
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
    marginBottom: 288,
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
