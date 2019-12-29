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

export const CheckInText = styled.View`
  align-items: center;
  justify-content: center;
  height: 45px;
  border: 1px solid #ee4e62;
  padding: 8px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  font-weight: bold;
`;
