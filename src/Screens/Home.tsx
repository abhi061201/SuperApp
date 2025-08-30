import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../component/Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    navigation.navigate('Screen2');
  }, []);
  const openMiniApp1 = useCallback(() => {
    navigation.navigate('MiniApp1', {
      color: 'green',
      isFromSuperApp: true,
      index: 1,
      message: 'Jai Jai Shree Radhe',
    });
  }, []);
  const openMiniApp2 = useCallback(() => {
    navigation.navigate('MiniApp2', {
      color: 'red',
      isFromSuperApp: true,
      index: 2,
      message: 'Jai Jai Shree Ram',
    });
  }, []);
  const openMiniApp3 = useCallback(() => {
    navigation.navigate('MiniApp3', {
      color: 'teal',
      isFromSuperApp: true,
      index: 3,
      message: 'Jai Shree Krishna',
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
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Home</Text>
      <Button onPress={handlePress} title="Press Me" />
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <Button onPress={openMiniApp1} title="Mini App 1" color={'green'} />
        <Button onPress={openMiniApp2} title="Mini App 2" color={'red'} />
        <Button onPress={openMiniApp3} title="Mini App 3" color={'teal'} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
