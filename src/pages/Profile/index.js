import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import { Platform } from 'react-native';
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
  InfoText,
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
  const formattedPrice =
    Platform.OS === 'ios'
      ? new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(profile.enrollment.price)
      : `$${profile.enrollment.price}.00`;

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
              <InfoText>{profile.student.name}</InfoText>
            </Row>
            <Row>
              <Title>E-mail</Title>
              <InfoText>{profile.student.email}</InfoText>
            </Row>
            <Row>
              <Title>Age</Title>
              <InfoText>{formattedAge}</InfoText>
            </Row>
            <Row>
              <Title>Weight</Title>
              <InfoText>{formattedWeight}</InfoText>
            </Row>
            <Row>
              <Title>Height</Title>
              <InfoText>{formattedHeight}</InfoText>
            </Row>
          </StudentArea>
          <HeadingArea>
            <Heading>Plan</Heading>
          </HeadingArea>
          <PlanArea>
            <Row>
              <Title>Title</Title>
              <InfoText>{profile.enrollment.Plan.title}</InfoText>
            </Row>
            <Row>
              <Title>Start date</Title>
              <InfoText>{formattedStartDate}</InfoText>
            </Row>
            <Row>
              <Title>End date</Title>
              <InfoText>{formattedEndDate}</InfoText>
            </Row>
            <Row>
              <Title>Total price</Title>
              <InfoText>{formattedPrice}</InfoText>
            </Row>
          </PlanArea>
          <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
        </Card>
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
