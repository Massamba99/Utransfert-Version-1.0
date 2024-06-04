import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utransfer</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>X</Text>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextLogin}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSignup} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonTextSignup}>Creat account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30DD5E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginBottom: 130,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#30DD5E',
  },
  buttonLogin: {
    backgroundColor: '#FF7A00',
    padding: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonSignup: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonTextLogin: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  buttonTextSignup: {
    fontSize: 18,
    color: '#34A853'
  },
});

export default HomeScreen;
