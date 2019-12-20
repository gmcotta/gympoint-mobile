import React from 'react';
import { Image } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { Background, Form, FormInput, SignInButton } from './styles';

import logo from '~/assets/logo/logo.png';

export default function SignIn({ navigation }) {
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
          />
          <SignInButton onPress={() => navigation.navigate('CheckIn')}>
            Sign In
          </SignInButton>
        </Form>
      </Background>
    </ScrollView>
  );
}
