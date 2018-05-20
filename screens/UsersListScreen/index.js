import React, {Component} from 'react';
import PropTypes from 'prop-types';

import UsersListContainer from './UsersListContainer';

export default class UserListScreen extends Component {
	static navigationOptions = {
		title: 'All users'
	};

	render() {
		return (
			<UsersListContainer />
		);
	}
}