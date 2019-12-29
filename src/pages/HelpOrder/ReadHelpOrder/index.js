import React, { useMemo } from 'react';
import { parseISO, formatRelative, subHours } from 'date-fns';

import {
  Container,
  Card,
  QuestionArea,
  Heading,
  QuestionDate,
  QuestionText,
  AnswerArea,
} from './styles';

export default function ReadHelpOrder({ navigation }) {
  const { question, createdAt, answer } = navigation.getParam('item');

  const today = new Date();
  const dateParsed = useMemo(() => {
    if (Platform.OS === 'ios') {
      return formatRelative(parseISO(createdAt), today, {
        addSuffix: true,
      });
    } else {
      return formatRelative(subHours(parseISO(createdAt), 3), today, {
        addSuffix: true,
      });
    }
  }, [createdAt]);

  return (
    <Container>
      <Card>
        <QuestionArea>
          <Heading>Question</Heading>
          <QuestionDate>{dateParsed}</QuestionDate>
        </QuestionArea>
        <QuestionText>{question}</QuestionText>
        {answer && (
          <AnswerArea>
            <Heading>Answer</Heading>
            <QuestionText>{answer}</QuestionText>
          </AnswerArea>
        )}
      </Card>
    </Container>
  );
}
