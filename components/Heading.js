import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Basic Demo UI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff7550',
    borderRadius: 10,
    height: 50,
    //marginTop: StatusBar.currentHeight,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 15,
    elevation: 6,
  },
});

export default Heading;
