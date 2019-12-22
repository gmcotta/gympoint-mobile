import React from 'react';
import { View, Image } from 'react-native';

import logo from '~/assets/AppLogo/appLogo.png';

import { Container } from './styles';

export default function StatusBarLogo() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
