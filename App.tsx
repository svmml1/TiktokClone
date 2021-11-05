import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase/app'
import Constants from 'expo-constants';

if(firebase.apps.lenght == 0){
  firebase.initializeApp(Constants.manifest.web.config.firebase)
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>oi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
