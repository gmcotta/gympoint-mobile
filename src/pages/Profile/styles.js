import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background-color: #f5f5f5;
  padding: 20px;
  flex: 1;
`;

export const Card = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const HeadingArea = styled.View`
  border: 1px solid transparent;
  border-bottom-color: #ee4e62;
  padding: 10px;
`;

export const Heading = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const InfoText = styled.Text`
  color: #666;
`;

export const StudentArea = styled.View`
  margin: 15px 0 10px;
`;

export const PlanArea = styled.View`
  margin-top: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
`;
