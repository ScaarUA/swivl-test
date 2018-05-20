import React, {Component} from 'react';

import UserInfoContainer from './UserInfoContainer';

class UserInfo extends Component {
	static navigationOptions = {
		title: 'User Info'
	};

	render() {
		const {params} = this.props.navigation.state;

		return (
			<UserInfoContainer
				user={params.user}
			/>
		)
	}
}

export default UserInfo;