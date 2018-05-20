import React, {Component} from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

import userShape from '../../../shapes/user';
import {TableRow, TableCell} from '../../Table/Table';

class UserRow extends Component {
	static propTypes = {
		user: userShape
	};

	goToUserInfo = () => {
		this.props.navigation.navigate('UserInfo', {
			user: this.props.user
		});
	};

	render() {
		const {user} = this.props;

		return (
			<TouchableOpacity onPress={this.goToUserInfo}>
				<TableRow>
					<TableCell>
						<Text>{user.login}</Text>
					</TableCell>
					<TableCell>
						<Text>{user.html_url}</Text>
					</TableCell>
					<TableCell>
						<Image
							style={{width: 100, height: 100}}
							source={{uri: user.avatar_url}}
						/>
					</TableCell>
				</TableRow>
			</TouchableOpacity>
		);
	}
}

export default withNavigation(UserRow);