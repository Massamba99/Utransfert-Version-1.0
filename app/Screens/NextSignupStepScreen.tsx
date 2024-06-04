import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Définissez vos types de paramètres de navigation
type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
  NextSignupStep: undefined;
  FinalSignupStep: undefined;
};

const NextSignupStepScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [occupation, setOccupation] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.support}>Support</Text>
        <Text style={styles.language}>EN</Text>
      </View>
      <Text style={styles.title}>Utransfert</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>X</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: '100%' }]}></View>
        </View>
        <Text style={styles.formTitle}>Nice to meet you</Text>
        <Text style={styles.subtitle}>Your personal informations are confidential</Text>
        
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} placeholder="DD / MM / YY" />
        
        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} placeholder="Enter your email address" />
        
        <Text style={styles.label}>Occupation</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={occupation}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setOccupation(itemValue)}
          >
            <Picker.Item label="Please select" value="" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Teacher" value="teacher" />
            <Picker.Item label="Engineer" value="engineer" />
            {/* Ajoutez d'autres options ici */}
          </Picker>
        </View>
        
        <Text style={styles.label}>Postal code</Text>
        <TextInput
          style={styles.input}
          placeholder="Postal code"
          value={postalCode}
          onChangeText={setPostalCode}
        />
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FinalSignupStep')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
          Log in
        </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#30DD5E',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  support: {
    fontSize: 16,
    color: 'white',
  },
  language: {
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#30DD5E',
  },
  progressContainer: {
    width: '100%',
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#30DD5E',
    borderRadius: 5,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    width: '100%',
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  pickerContainer: {
    width: '100%',
    height: 40,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: 40,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#30DD5E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    marginTop: 20,
  },
  loginText: {
    color: 'blue',
  },
});

export default NextSignupStepScreen;
