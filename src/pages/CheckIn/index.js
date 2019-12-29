import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StatusBarLogo from '~/components/StatusBarLogo';
import CheckInItem from '~/components/CheckInItem';

import api from '~/services/api';

import { Container, SubmitButton, List, CheckInText } from './styles';

export default function CheckIn() {
  const { id } = useSelector(state => state.user.profile.student);

  const [page, setPage] = useState(1);
  const [more, setMore] = useState(true);
  const [count, setCount] = useState(0);
  const [checkin, setCheckin] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCheckin(currentPage) {
    const { data: response } = await api.get(`students/${id}/checkins`, {
      params: { page: currentPage },
    });
    console.tron.log(response);
    const newData = response.checkins.map(r => ({
      ...r,
      index: response.checkins.indexOf(r) + 1,
    }));
    setCheckin(newData);
    setCount(response.count);
  }

  useEffect(() => {
    console.tron.log('Start');
    console.tron.log(`Page: ${page}`);
    loadCheckin(page);
  }, []);

  async function refreshPage() {
    setRefreshing(true);
    console.tron.log('Trigger refresh');
    const firstPage = 1;
    console.tron.log(`Page: ${page}`);
    loadCheckin(firstPage);
    setPage(firstPage);
    setMore(true);
    setRefreshing(false);
  }

  async function loadMore() {
    console.tron.log('Trigger more');
    const newPage = page + 1;

    const { data: response } = await api.get(`students/${id}/checkins`, {
      params: { page: newPage },
    });
    if (more && response.checkins.length > 0) {
      const removeIndex = checkin.map(({ index, ...rest }) => rest);
      const newData = [...removeIndex, ...response.checkins];
      const newCheckin = newData.map(c => ({
        ...c,
        index: newData.indexOf(c) + 1,
      }));
      setCheckin(newCheckin);
      setPage(newPage);
      setCount(response.count);
      console.tron.log(`Page: ${page}`);
    } else {
      setMore(false);
      console.tron.log('Sem item');
    }
  }

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
    <>
      <StatusBarLogo />
      <Container>
        <CheckInText>
          <Text>{`You have made ${count} check-in(s)!`}</Text>
        </CheckInText>
        <SubmitButton onPress={handleCheckin}>New check-in</SubmitButton>
        <List
          data={checkin}
          refreshing={refreshing}
          onRefresh={refreshPage}
          onEndReachedThreshold={0.1}
          onEndReached={loadMore}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CheckInItem data={item} />}
        />
      </Container>
    </>
  );
}

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
