import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function ReadHelpOrder({ navigation }) {
  const { id } = navigation.getParam('item');
  return (
    <View>
      <Text>Read Help Oreder</Text>
      <Text>{id}</Text>
    </View>
  );
}
