import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  background-color: #f5f5f5;
  padding: 20px;
  flex: 1;
`;

export const Form = styled.View``;

export const FormInput = styled(Input)`
  margin-bottom: 20px;
  background: #fff;
  height: 300px;
  align-items: flex-start;
  padding-top: 15px;
`;

export const SendButton = styled(Button)``;
