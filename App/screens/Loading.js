import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import Color from '../Color';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Color.lblue} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Color.primary
    
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoadingScreen;