export const USER_FOLLOWERS_FETCH_START = 'USER_FOLLOWERS_FETCH_START';
export const USER_FOLLOWERS_FETCH_SUCCESS = 'USER_FOLLOWERS_FETCH_SUCCESS';
export const USER_FOLLOWERS_FETCH_FAILURE = 'USER_FOLLOWERS_FETCH_FAILURE';

export const fetchUserFollowersStart = () => ({
	type: USER_FOLLOWERS_FETCH_START
});

export const fetchUserFollowersSuccess = (id, followers) => ({
	type: USER_FOLLOWERS_FETCH_SUCCESS,
	payload: {
		id,
		followers
	}
});

export const fetchUserFollowersFailure = () => ({
	type: USER_FOLLOWERS_FETCH_FAILURE
});

export const fetchUserFollowers = (user, threshold) => {
	return dispatch => {
		dispatch(fetchUserFollowersStart());

		fetch(`${user.followers_url}?per_page=${threshold}`)
			.then(response => response.json())
			.then(followers => dispatch(fetchUserFollowersSuccess(user.id, followers)))
			.catch(() => dispatch(fetchUserFollowersFailure()));
	}
};