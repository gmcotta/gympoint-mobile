import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f5f5f5;
  padding: 20px;
  flex: 1;
`;

export const Card = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  font-size: 14px;
`;

export const QuestionArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Heading = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
`;

export const QuestionDate = styled.Text``;

export const QuestionText = styled.Text`
  margin-top: 15px;
`;

export const AnswerArea = styled.View`
  margin-top: 20px;
`;
