import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StatusBarLogo from '~/components/StatusBarLogo';
import CheckInItem from '~/components/CheckInItem';

import api from '~/services/api';

import { Wrapper, Container, SubmitButton, List } from './styles';

export default function CheckIn() {
  const { id } = useSelector(state => state.user.profile);
  const [checkin, setCheckin] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function refreshPage() {
    setRefreshing(true);
    const { data: response } = await api.get(`students/${id}/checkins`);
    const newData = response.map(r => ({
      ...r,
      index: response.indexOf(r) + 1,
    }));
    setCheckin(newData);
    setRefreshing(false);
  }

  useEffect(() => {
    refreshPage();
  }, []);

  async function handleCheckin() {
    try {
      await api.post(`students/${id}/checkins`);
      refreshPage();
    } catch (error) {
      console.tron.warn(error);
      Alert.alert(
        'Error while check-in',
        'You may have reached your daily/weekly amount.'
      );
    }
  }

  return (
    <Wrapper>
      <StatusBarLogo />
      <Container>
        <SubmitButton onPress={handleCheckin}>New check-in</SubmitButton>
        <List
          data={checkin}
          refreshing={refreshing}
          onRefresh={refreshPage}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CheckInItem data={item} />}
        />
      </Container>
    </Wrapper>
  );
}

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
