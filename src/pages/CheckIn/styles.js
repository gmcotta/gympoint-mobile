import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Wrapper = styled.View`
  background-color: #f5f5f5;
  flex: 1;
`;

export const Container = styled.View`
  padding: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
