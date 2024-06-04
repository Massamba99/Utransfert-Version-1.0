import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      {/* Ajoutez ici votre formulaire de connexion */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
