import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useRoute } from '@react-navigation/native';

//navigator
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type CareSupportProps = NativeStackScreenProps<RootStackParamList>
interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  bloodGroup: string;
  city: string;
}

class CareSupportData {
	doctor: string = '';
	doctorNumber: string = '';
	nurse: string = '';
	nurseNumber: string = '';
	doctorSpeciality: string = '';
	hospital: string = '';
	city: string = '';
}

const hospitalData = [
  { label: 'Apollo', hospital: 'Apollo'},
  { label: 'Nemcare',hospital: 'Nemcare'},
  { label: 'GMC', hospital: 'GMC'},
];
const cityData = [
  { label: 'Bengaluru', city: 'Bengaluru' },
  { label: 'Hyderabad', city: 'Hyderabad' },
  { label: 'Chennai', city: 'Chennai' },
  { label: 'Pune', city: 'Pune' },
  { label: 'Delhi', city: 'Delhi' },
];


const CareSupport = ({ navigation }: CareSupportProps) => {

  const route = useRoute();
  // Type assertion to ensure route.params has the correct type
  const registrationData = route.params as RegistrationData;
  const [careSupportData, setCareSupportData] = useState<CareSupportData>(new CareSupportData());

  const nextpage = () =>{
    console.log(careSupportData);
    navigation.navigate('SurgeryDetails', {
      registrationData,
      careSupportData,
    } as never);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Branch/City</Text>
      </View>
      <View style={styles.dropdowncontainer}>
        <Dropdown
          style={styles.dropdown}
          data={cityData}
          // search
          maxHeight={300}
          labelField="label"
          valueField="city"
          placeholder="Select City Group"
          searchPlaceholder="Search..."
          value={careSupportData.city}
          onChange={(item: { label: any; city: any }) => {
            setCareSupportData({
              ...careSupportData,
              city: item.city,
            });
          }}
        />
      </View>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Hospital</Text>
      </View>
      <View style={styles.dropdowncontainer}>
        <Dropdown
          style={styles.dropdown}
          data={hospitalData}
          // search
          maxHeight={300}
          labelField="label"
          valueField="hospital"
          placeholder="Select Hospital"
          searchPlaceholder="Search..."
          value={careSupportData.hospital}
          onChange={(item: { label: any; hospital: any }) => {
            setCareSupportData({
              ...careSupportData,
              hospital: item.hospital,
            });
          }}
        />
      </View>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Doctor</Text>
      </View>
      <TextInput
      style={styles.input}
      value={careSupportData.doctor}
      onChangeText={(value) => {
        setCareSupportData({
          ...careSupportData,
          doctor: value,
        });
      }}
      />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Doctor's Speciality</Text>
      </View>
      <TextInput
      style={styles.input}
      value={careSupportData.doctorSpeciality}
      onChangeText={(value) => {
        setCareSupportData({
          ...careSupportData,
          doctorSpeciality: value,
        });
      }}
       />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Doctor Phone</Text>
      </View>
      <TextInput style={styles.input}
      placeholder="+91"
      keyboardType="phone-pad"
      value={careSupportData.doctorNumber}
      onChangeText={(value) => {
        setCareSupportData({
          ...careSupportData,
          doctorNumber: value,
        });
      }}
       />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Nurse </Text>
      </View>
      <TextInput
      style={styles.input}
      value={careSupportData.nurse}
      onChangeText={(value) => {
        setCareSupportData({
          ...careSupportData,
          nurse: value,
        });
      }}
      />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Nurse Phone</Text>
      </View>
      <TextInput
      style={styles.nurseInput}
      placeholder="+91"
      keyboardType="phone-pad"
      value={careSupportData.nurseNumber}
      onChangeText={(value) => {
        setCareSupportData({
          ...careSupportData,
          nurseNumber: value,
        });
      }}
      />
      </ScrollView>
      <TouchableOpacity
        onPress={nextpage}
        style={styles.buttonContainer}
        >
        <Text style={styles.buttonText}>Next</Text>
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
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  containerHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    position: 'relative',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingRight: 16,
  },
  inputHeading: {
    width: '100%',
    fontFamily: 'Lato-Bold',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
    color: '#7d7c83',
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
  nurseInput: {
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
    marginBottom: 128,
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

export default CareSupport;
