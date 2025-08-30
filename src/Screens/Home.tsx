import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../component/Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    navigation.navigate('Screen2');
  }, []);
  const openMiniApp1 = useCallback(() => {
    navigation.navigate('CarApp', {
      color: 'green',
      isFromSuperApp: true,
      index: 1,
      message: 'Jai Jai Shree Radhe',
    });
  }, []);
  const openMiniApp2 = useCallback(() => {
    navigation.navigate('FoodApp', {
      color: 'red',
      isFromSuperApp: true,
      index: 2,
      message: 'Jai Jai Shree Ram',
    });
  }, []);
  const openMiniApp3 = useCallback(() => {
    navigation.navigate('MobileApp', {
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
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Home Screen</Text>
      <Button onPress={handlePress} title="Press" />
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <TouchableOpacity
          onPress={openMiniApp1}
          style={{
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 7,
          }}
        >
          <Text style={{ color: 'white', fontWeight: '600' }}>Car App</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openMiniApp2}
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 7,
          }}
        >
          <Text style={{ color: 'white', fontWeight: '600' }}>Mobile App</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openMiniApp3}
          style={{
            backgroundColor: 'teal',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 7,
          }}
        >
          <Text style={{ color: 'white', fontWeight: '600' }}>Food App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
