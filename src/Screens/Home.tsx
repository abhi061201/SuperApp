import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../component/Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    navigation.navigate('Screen2');
  }, []);
  const handlePress2 = useCallback(() => {
    navigation.navigate('Child1', {
      color: 'green',
      isFromSuperApp: true,
      index: 1,
      message: 'Jai Jai Shree Radhe',
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Text>Home</Text>
      <Button onPress={handlePress} title="Press Me" />
      <Button onPress={handlePress2} title="Child App 1" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
