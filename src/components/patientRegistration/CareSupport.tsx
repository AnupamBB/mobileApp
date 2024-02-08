import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

//navigator
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type CareSupportProps = NativeStackScreenProps<RootStackParamList, 'CareSupport'>

const hospitalData = [
  { label: 'Apollo', hospital: '1' },
  { label: 'Name Care', hospital: '2' },
  { label: 'GMC', hospital: '3' },
];
const cityData = [
  { label: 'Bangaluru', city: '1' },
  { label: 'Hyderabad', city: '2' },
  { label: 'Chennai', city: '3' },
  { label: 'Pune', city: '4' },
  { label: 'Delhi', city: '5' },
];


const CareSupport = ({ navigation }: CareSupportProps) => {
  const [hospital, setHospital] = useState(null);
  const [city, setCity] = useState(null);


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
          value={city}
          onChange={(item: { label: any; city: any }) => {
            setCity(item.city);
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
          value={hospital}
          onChange={(item: { label: any; hospital: any }) => {
            setHospital(item.hospital);
          }}
        />
      </View>
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Doctor</Text>
      </View>
      <TextInput style={styles.input} />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Doctor's Speciality</Text>
      </View>
      <TextInput style={styles.input} />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Doctor Phone</Text>
      </View>
      <TextInput style={styles.input} placeholder="+91" keyboardType="phone-pad" />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Nurse </Text>
      </View>
      <TextInput style={styles.input} />
      <View style={styles.containerHeading}>
        <Text style={styles.inputHeading}>Nurse Phone</Text>
      </View>
      <TextInput style={styles.nurseInput} placeholder="+91" keyboardType="phone-pad" />
      </ScrollView>
      <TouchableOpacity
      onPress={() => navigation.navigate('SurgeryDetails') }
       style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Next</Text>
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
