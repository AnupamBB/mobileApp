import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { useRoute } from '@react-navigation/native';

//navigator
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type SurgeryDetailsProps = NativeStackScreenProps<RootStackParamList, 'SurgeryDetails'>

interface CareSupportData {
  doctor: string;
  doctorNumber: string;
  nurse: string;
  nurseNumber: string;
  doctorSpeciality: string;
  hospital :string;
  city: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  bloodGroup: string;
}

const surgeryData = [
  { label: 'Surgery1', surgery: 'Surgery1' },
  { label: 'Surgery2', surgery: 'Surgery2' },
  { label: 'Surgery3', surgery: 'Surgery3' },
];


const SurgeryDetails = ({ navigation }: SurgeryDetailsProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [surgery, setSurgery] = useState(null);
  const route = useRoute();
  // Type assertion to ensure route.params has the correct type
  const userData = route.params as CareSupportData;

  const handleDateChange = (event : any, date : any) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const finish = () =>{
    handleProposalSubmission();
    navigation.navigate('Home');
  };


  const handleProposalSubmission = async () => {
    const registrationInfo = {
      userData,
      selectedDate : selectedDate,
      surgery : surgery,
    };

    await fetch('https://digiomed-default-rtdb.firebaseio.com/RegistrationFormData.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationInfo),
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Surgery</Text>
      </View>
      <View style={styles.dropdowncontainer}>
        <Dropdown
          style={styles.dropdown}
          data={surgeryData}
          // search
          maxHeight={300}
          labelField="label"
          valueField="surgery"
          placeholder="Select Surgery"
          searchPlaceholder="Search..."
          value={surgery}
          onChange={(item: { label: any; surgery: any }) => {
            setSurgery(item.surgery);
          }}
        />
      </View>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Current Stage</Text>
      </View>
      <TextInput style={styles.input} />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Surgery Date</Text>
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
      </ScrollView>
      <TouchableOpacity
      onPress={finish}
       style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Finish</Text>
        <Image source={require('../../../assets/photos/arrow.png')}/>
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

export default SurgeryDetails;