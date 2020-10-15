import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const index = () => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
};
 
export default index;