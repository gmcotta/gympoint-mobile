import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background-color: #f5f5f5;
  padding: 20px;
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
