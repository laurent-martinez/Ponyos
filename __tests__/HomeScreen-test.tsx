/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../HomeScreen';
import {render} from '@testing-library/react-native';

describe('App', () => {
  test('Should renders correctly', () => {
    const wrapper = render(<App />);
    wrapper.getByTestId('app');
  });
});
