import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Alert } from 'react-native';

import api from '~/services/api';

import { Container, Form, FormInput, SendButton } from './styles';

export default function NewHelpOrder({ navigation }) {
  const { id } = useSelector(state => state.user.profile.student);
  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`students/${id}/help-orders`, { question });
      navigation.navigate('HelpOrder');
    } catch (error) {
      console.tron.warn(error);
      Alert.alert(
        'Error while creating help order',
        'Please, try again later.'
      );
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <Form>
          <FormInput
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your help order"
            multiline
            value={question}
            onChangeText={setQuestion}
          />
          <SendButton onPress={handleSubmit}>Send help order</SendButton>
        </Form>
      </Container>
    </ScrollView>
  );
}
