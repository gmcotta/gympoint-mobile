import React from 'react';
import { View } from 'react-native';

import { Container, ItemID, ItemDate } from './styles';

export default function CheckInItem() {
  return (
    <Container>
      <ItemID>Check-in #1</ItemID>
      <ItemDate>Today at 2PM</ItemDate>
    </Container>
  );
}
