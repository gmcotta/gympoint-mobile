import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { signInRequest } from '~/store/modules/auth/actions';

import { Background, Form, FormInput, SignInButton } from './styles';

import logo from '~/assets/logo/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [id, setId] = useState(null);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Background>
        <Image source={logo} />
        <Form>
          <FormInput
            keyboardType="numeric"
            placeholder="Your registration ID"
            value={id}
            onChangeText={setId}
          />
          <SignInButton loading={loading} onPress={handleSubmit}>
            Sign In
          </SignInButton>
        </Form>
      </Background>
    </ScrollView>
  );
}
