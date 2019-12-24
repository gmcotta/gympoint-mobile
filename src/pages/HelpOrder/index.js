import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, Alert, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StatusBarLogo from '~/components/StatusBarLogo';

import api from '~/services/api';

import { Wrapper, Container, SubmitButton, List } from './styles';

export default function HelpOrder() {
  const { id } = useSelector(state => state.user.profile);
  const [helpOrder, setHelpOrder] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function refreshPage() {
    setRefreshing(true);
    const { data: response } = await api.get(`students/${id}/help-orders`);
    const newData = response.map(r => ({
      ...r,
      index: response.indexOf(r) + 1,
    }));
    setHelpOrder(newData);
    setRefreshing(false);
  }

  useEffect(() => {
    refreshPage();
  }, []);

  async function handleHelpOrder() {
    console.tron.log('Hi');
  }

  return (
    <Wrapper>
      <StatusBarLogo />
      <Container>
        <SubmitButton onPress={handleHelpOrder}>New help order</SubmitButton>
        <List
          data={helpOrder}
          refreshing={refreshing}
          onRefresh={refreshPage}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Text>{item.question}</Text>}
        />
      </Container>
    </Wrapper>
  );
}

HelpOrder.navigationOptions = {
  tabBarLabel: 'Help Orders',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
