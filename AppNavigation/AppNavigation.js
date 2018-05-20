import {connect} from 'react-redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import React, {Component} from 'react';

import {routes, navigationConfig} from '../routeConfig';

export const Navigator = StackNavigator(routes, navigationConfig);

const addListener = createReduxBoundAddListener("root");

const AppNavigation = ({dispatch, nav}) => (
	<Navigator navigation={addNavigationHelpers({
		dispatch: dispatch,
		state: nav,
		addListener,
	})} />
);

const mapStateToProps = ({nav}) => ({
	nav
});

export default connect(mapStateToProps)(AppNavigation);