// import { TextInput } from "react-native";

import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {}

export const TextInput = (props: Props) => {
  return <RNTextInput {...props} />;
};
