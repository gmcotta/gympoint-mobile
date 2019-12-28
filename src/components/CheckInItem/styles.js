import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.insideInterval ? '#42cb59' : '#fff')};
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  font-size: 14px;
`;

export const ItemID = styled.Text`
  font-weight: bold;
  color: ${props => (props.insideInterval ? '#fff' : '#000')};
`;

export const ItemDate = styled.Text`
  color: ${props => (props.insideInterval ? '#fff' : '#666')};
`;
