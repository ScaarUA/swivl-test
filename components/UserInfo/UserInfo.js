import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image} from 'react-native';

import UserList from '../UserList/UsersList';
import userInfoStyles from './userInfo.styles';
import userShape from '../../shapes/user';

export default class UserInfo extends Component {
	static propTypes = {
		user: userShape,
		info: PropTypes.shape({
			followers: PropTypes.arrayOf(userShape)
		}),
		fetchUserFollowers: PropTypes.func.isRequired
	};

	render() {
		const {user, info, fetchUserFollowers} = this.props;

		return (
			<View style={userInfoStyles.container}>
				<Text style={userInfoStyles.title}>{user.login}</Text>
				<Image
					style={{width: 100, height: 100}}
					source={{uri: user.avatar_url}}
				/>
				<Text style={userInfoStyles.subtitle}>Followers:</Text>
				<UserList
					users={info.followers}
					fetchUsers={fetchUserFollowers}
				/>
			</View>
		);
	}
}