import { Platform, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  background: #fff;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  height: ${Platform.OS === 'ios' ? '88px' : '57px'};
  border: ${Platform.OS === 'ios' ? '1px solid transparent' : 'none'};
  border-bottom-color: #ddd;
`;
