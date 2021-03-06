import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUserInfoById} from './UserInfo.selectors';
import {fetchUserFollowers} from './UserInfo.actions';
import UserInfo from '../../components/UserInfo/UserInfo';
import Preloader from '../../components/Preloader/Preloader';
import userShape from '../../shapes/user';

const FOLLOWERS_PER_PAGE = 25;

class UserInfoContainer extends Component {
	static propTypes = {
		isFetching: PropTypes.bool.isRequired,
		info: PropTypes.shape({
			followers: PropTypes.arrayOf(userShape)
		}),
		user: userShape,
		fetchUserFollowers: PropTypes.func.isRequired
	};

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

		return (
			<Fragment>
				{info && (
					<UserInfo
						user={user}
						info={info}
						fetchUserFollowers={this.fetchUserFollowers}
					/>
				)}
				{isFetching && <Preloader />}
			</Fragment>
		);
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