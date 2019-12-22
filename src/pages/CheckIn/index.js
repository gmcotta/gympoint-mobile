import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StatusBarLogo from '~/components/StatusBarLogo';

import CheckInItem from '~/components/CheckInItem';
import { Wrapper, Container, SubmitButton, List } from './styles';

export default function CheckIn() {
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Wrapper>
      <StatusBarLogo />
      <Container>
        <SubmitButton onPress={() => {}}>New check-in</SubmitButton>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <CheckInItem data={item} />}
        />
      </Container>
    </Wrapper>
  );
}

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-in',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
