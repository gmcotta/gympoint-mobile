import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';

import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import StatusBarLogo from '~/components/StatusBarLogo';

import {
  Container,
  Card,
  HeadingArea,
  Heading,
  StudentArea,
  Title,
  PlanArea,
  Row,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  const formattedAge = `${profile.student.age} years`;
  const formattedWeight = `${profile.student.weight} kg`;
  const formattedHeight = `${profile.student.height} m`;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(profile.enrollment.price);

  const formattedStartDate = format(
    parseISO(profile.enrollment.start_date),
    'MM/dd/yyyy'
  );
  const formattedEndDate = format(
    parseISO(profile.enrollment.end_date),
    'MM/dd/yyyy'
  );

  function handleLogout() {
    console.tron.log('Logout');
    dispatch(signOut());
  }

  return (
    <>
      <StatusBarLogo />
      <Container>
        <Card>
          <HeadingArea>
            <Heading>Student</Heading>
          </HeadingArea>
          <StudentArea>
            <Row>
              <Title>Name</Title>
              <Text>{profile.student.name}</Text>
            </Row>
            <Row>
              <Title>E-mail</Title>
              <Text>{profile.student.email}</Text>
            </Row>
            <Row>
              <Title>Age</Title>
              <Text>{formattedAge}</Text>
            </Row>
            <Row>
              <Title>Weight</Title>
              <Text>{formattedWeight}</Text>
            </Row>
            <Row>
              <Title>Height</Title>
              <Text>{formattedHeight}</Text>
            </Row>
          </StudentArea>
          <HeadingArea>
            <Heading>Plan</Heading>
          </HeadingArea>
          <PlanArea>
            <Row>
              <Title>Title</Title>
              <Text>{profile.enrollment.Plan.title}</Text>
            </Row>
            <Row>
              <Title>Start date</Title>
              <Text>{formattedStartDate}</Text>
            </Row>
            <Row>
              <Title>End date</Title>
              <Text>{formattedEndDate}</Text>
            </Row>
            <Row>
              <Title>Total price</Title>
              <Text>{formattedPrice}</Text>
            </Row>
          </PlanArea>
        </Card>
        <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
      </Container>
    </>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
