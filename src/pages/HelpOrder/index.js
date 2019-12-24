import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, Alert, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HelpOrderItem from '~/components/HelpOrderItem';

import api from '~/services/api';

import { Container, SubmitButton, List } from './styles';

export default function HelpOrder({ navigation }) {
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

  function handleNewHelpOrder() {
    navigation.navigate('NewHelpOrder');
  }

  return (
    <Container>
      <SubmitButton onPress={handleNewHelpOrder}>New help order</SubmitButton>
      <List
        data={helpOrder}
        refreshing={refreshing}
        onRefresh={refreshPage}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <HelpOrderItem
            onPress={() => {
              navigation.navigate('ReadHelpOrder', { item });
            }}
            data={item}
          >
            Teste
          </HelpOrderItem>
        )}
      />
    </Container>
  );
}

HelpOrder.navigationOptions = {
  tabBarLabel: 'Help Orders',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
