import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';

import { Container, ItemID, ItemDate } from './styles';

export default function CheckInItem({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container>
      <ItemID>{`Check-in #${data.index}`}</ItemID>
      <ItemDate>{dateParsed}</ItemDate>
    </Container>
  );
}
