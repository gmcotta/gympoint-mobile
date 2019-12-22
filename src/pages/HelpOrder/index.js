import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StatusBarLogo from '~/components/StatusBarLogo';
import { Container } from './styles';

export default function HelpOrder() {
  return (
    <Container>
      <StatusBarLogo />
      <Text>Help orders</Text>
    </Container>
  );
}

HelpOrder.navigationOptions = {
  tabBarLabel: 'Help Orders',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
