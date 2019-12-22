import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StatusBarLogo from '~/components/StatusBarLogo';
import { Container } from './styles';

export default function CheckIn() {
  return (
    <Container>
      <StatusBarLogo />
      <Text>Check In</Text>
    </Container>
  );
}

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-in',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
