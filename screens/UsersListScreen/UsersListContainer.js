import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchUsers} from './UsersList.actions';
import UsersList from '../../components/UserList/UsersList';
import Preloader from '../../components/Preloader/Preloader';

const USERS_PER_PAGE = 25;

class UsersListContainer extends Component {
	static propTypes = {
		isFetching: PropTypes.bool.isRequired,
		users: PropTypes.array
	};

	state = {
		visibleUsers: 0
	};

	componentDidMount() {
		this.fetchUsers();
	}

	fetchUsers = () => {
		const newAmountOfVisibleUsers = this.state.visibleUsers + USERS_PER_PAGE;

		this.setState({
			visibleUsers: newAmountOfVisibleUsers
		});
		this.props.fetchUsers(newAmountOfVisibleUsers);
	};

	render() {
		const {isFetching, users} = this.props;

		return [
			!!users.length && (
				<UsersList
					key="user-list"
					users={users}
					fetchUsers={this.fetchUsers}
				/>
			),
			isFetching && <Preloader key="preloader" />
		];
	}
}

const mapStateToProps = ({usersList}) => ({
	users: usersList.users,
	isFetching: usersList.isFetching
});

const mapDispatchToProps = dispatch => ({
	fetchUsers: amount => dispatch(fetchUsers(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);