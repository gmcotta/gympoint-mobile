import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  FirstRow,
  AnswerStatus,
  ItemDate,
  AnswerInfo,
  Question,
} from './styles';

export default function HelpOrderItem({ data, ...rest }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container {...rest}>
      <FirstRow>
        <AnswerStatus>
          <Icon
            name="check-circle"
            size={20}
            color={data.answer ? '#42cb59' : '#999'}
          />
          <AnswerInfo answer={data.answer}>
            {data.answer ? 'Answered' : 'Not Answered'}
          </AnswerInfo>
        </AnswerStatus>
        <ItemDate>{dateParsed}</ItemDate>
      </FirstRow>
      <Question>{data.question}</Question>
    </Container>
  );
}
