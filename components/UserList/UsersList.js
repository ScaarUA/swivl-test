import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';

import {Table, TableRow, TableHeading} from '../Table/Table';
import UserRow from './UserRow/UserRow';

export default class UsersList extends PureComponent {
	static propTypes = {
		users: PropTypes.array.isRequired,
		fetchUsers: PropTypes.func
	};

	static defaultProps = {
		fetchUsers: () => {}
	};

	_keyExtractor = item => item.id;

	_renderItem = ({item}) => {
		return (
			<UserRow
				user={item}
			/>
		);
	};

	render() {
		const {users, fetchUsers} = this.props;

		return (
			<Table>
				<TableRow>
					<TableHeading text="login" />
					<TableHeading text="url" />
					<TableHeading text="avatar" />
				</TableRow>
				<FlatList
					data={users}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					onEndReached={fetchUsers}
				/>
			</Table>
		);
	}
}