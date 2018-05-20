import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUserInfoById} from './UserInfo.selectors';
import {fetchUserFollowers} from './UserInfo.actions';
import UserInfo from '../../components/UserInfo/UserInfo';
import Preloader from '../../components/Preloader/Preloader';

const FOLLOWERS_PER_PAGE = 25;

class UserInfoContainer extends Component {
	state = {
		visibleFollowers: 0
	};

	componentDidMount() {
		if (this.props.user) {
			this.fetchUserFollowers(this.props.user);
		}
	}

	fetchUserFollowers = () => {
		const newAmountOfVisibleFollowers = this.state.visibleFollowers + FOLLOWERS_PER_PAGE;

		this.setState({
			visibleFollowers: newAmountOfVisibleFollowers
		});
		this.props.fetchUserFollowers(this.props.user, newAmountOfVisibleFollowers);
	};

	render() {
		const {isFetching, user, info} = this.props;

		return [
			info && (
				<UserInfo
					key="user-info"
					user={user}
					info={info}
					fetchUserFollowers={this.fetchUserFollowers}
				/>
			),
			isFetching && <Preloader key="preloader" />
		];
	}
}

const mapStateToProps = (state, props) => ({
	info: getUserInfoById(state, props),
	isFetching: state.userInfo.isFetching
});

const mapDispatchToProps = dispatch => ({
	fetchUserFollowers: (user, threshold) => dispatch(fetchUserFollowers(user, threshold))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer);