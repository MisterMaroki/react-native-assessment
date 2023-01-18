/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import HomeScreen from '../src/screens/HomeScreen';
import { QueryClient, QueryClientProvider } from 'react-query';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

it('renders correctly', () => {
  renderer.create(wrapper(<App />)).toJSON();
});

it('renders the home screen', () => {
  renderer.create(<HomeScreen />).toJSON();
  expect(renderer).toMatchSnapshot();
});
