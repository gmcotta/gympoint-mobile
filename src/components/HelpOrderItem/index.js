import React, { useMemo } from 'react';
import { Platform } from 'react-native';
import { parseISO, formatRelative, subHours } from 'date-fns';

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
