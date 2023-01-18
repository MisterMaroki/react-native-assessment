/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HomeScreen from '../src/screens/HomeScreen';

it('renders correctly', () => {
  renderer.create(<App />).toJSON();
});

it('renders the home screen', () => {
  renderer.create(<HomeScreen />).toJSON();
  expect(renderer).toMatchSnapshot();
});
