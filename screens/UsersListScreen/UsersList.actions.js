export const USERS_FETCH_START = 'USERS_FETCH_START';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE';

export const fetchUsersStart = () => ({
	type: USERS_FETCH_START
});

export const fetchUsersSuccess = users => ({
	type: USERS_FETCH_SUCCESS,
	payload: users
});

export const fetchUsersFailure = () => ({
	type: USERS_FETCH_FAILURE
});

export const fetchUsers = amount => {
	return dispatch => {
		dispatch(fetchUsersStart());

		return fetch(`https://api.github.com/users?per_page=${amount}`)
			.then(response => response.json())
			.then(users => dispatch(fetchUsersSuccess(users)))
			.catch(() => dispatch(fetchUsersFailure()));
	}
};