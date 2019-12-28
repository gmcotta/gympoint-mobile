import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  font-size: 14px;
`;

export const FirstRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AnswerStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AnswerInfo = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: ${props => (props.answer ? '#42cb59' : '#999')};
`;

export const ItemDate = styled.Text`
  color: #666;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  margin-top: 15px;
  color: #666;
`;
