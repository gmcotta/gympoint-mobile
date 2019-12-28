import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, Alert, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HelpOrderItem from '~/components/HelpOrderItem';

import api from '~/services/api';

import { Container, SubmitButton, List } from './styles';

export default function HelpOrder({ navigation }) {
  const { id } = useSelector(state => state.user.profile.student);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(true);
  const [helpOrder, setHelpOrder] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function loadHelpOrder() {
      const { data: response } = await api.get(`students/${id}/help-orders`, {
        params: { page },
      });
      setHelpOrder(response);
    }
    loadHelpOrder();
  }, []);

  async function refreshPage() {
    setRefreshing(true);

    const firstPage = 1;
    const { data: response } = await api.get(`students/${id}/help-orders`, {
      params: { page: firstPage },
    });
    setHelpOrder(response);
    setPage(firstPage);
    setMore(true);
    setRefreshing(false);
  }

  async function loadMore() {
    const newPage = page + 1;
    const { data: response } = await api.get(`students/${id}/help-orders`, {
      params: { page: newPage },
    });
    if (more && response.length > 0) {
      const newData = [...helpOrder, ...response];
      setHelpOrder(newData);
      setPage(newPage);
    } else {
      setMore(false);
    }
  }

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
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
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
