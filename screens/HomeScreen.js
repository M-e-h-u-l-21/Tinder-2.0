import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>I am at the home screen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
};

export default HomeScreen;
