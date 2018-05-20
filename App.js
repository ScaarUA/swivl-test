import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';

import store from './store';
import AppNavigation from './AppNavigation/AppNavigation';

YellowBox.ignoreWarnings([
	'Warning: componentWillMount is deprecated',
	'Warning: componentWillReceiveProps is deprecated',
	'Warning: componentWillUpdate is deprecated'
]);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}