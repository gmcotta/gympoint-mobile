import React, { useMemo } from 'react';
import { Platform } from 'react-native';
import {
  parseISO,
  formatRelative,
  isWithinInterval,
  subDays,
  subHours,
} from 'date-fns';

import { Container, ItemID, ItemDate } from './styles';

export default function CheckInItem({ data }) {
  const today = new Date();
  const dateParsed = useMemo(() => {
    if (Platform.OS === 'ios') {
      return formatRelative(parseISO(data.createdAt), today, {
        addSuffix: true,
      });
    } else {
      return formatRelative(subHours(parseISO(data.createdAt), 3), today, {
        addSuffix: true,
      });
    }
  }, [data.createdAt]);

  const insideInterval = isWithinInterval(parseISO(data.createdAt), {
    start: subDays(today, 7),
    end: today,
  });

  return (
    <Container insideInterval={insideInterval}>
      <ItemID
        insideInterval={insideInterval}
      >{`Check-in #${data.index}`}</ItemID>
      <ItemDate insideInterval={insideInterval}>{dateParsed}</ItemDate>
    </Container>
  );
}
