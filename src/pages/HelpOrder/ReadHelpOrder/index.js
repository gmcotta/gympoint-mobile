import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';

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

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(createdAt), new Date(), {
      addSuffix: true,
    });
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
