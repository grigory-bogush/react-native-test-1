import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Open up App.tsx to start working on your app!</Text>
      <TextInput style={styles.text} placeholder='Type something'/>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 1,
    width: '50%'
  }
});
