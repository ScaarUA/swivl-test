import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchUsers} from './UsersList.actions';
import UsersList from '../../components/UserList/UsersList';
import Preloader from '../../components/Preloader/Preloader';
import userShape from '../../shapes/user';

const USERS_PER_PAGE = 25;

export class UsersListContainer extends Component {
	static propTypes = {
		isFetching: PropTypes.bool.isRequired,
		users: PropTypes.arrayOf(userShape),
		fetchUsers: PropTypes.func.isRequired
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

		return (
			<Fragment>
				{!!users.length && (
					<UsersList
						users={users}
						fetchUsers={this.fetchUsers}
					/>
				)}
				{isFetching && <Preloader />}
			</Fragment>
		);
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