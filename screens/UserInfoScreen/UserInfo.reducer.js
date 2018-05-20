import {USER_FOLLOWERS_FETCH_FAILURE, USER_FOLLOWERS_FETCH_SUCCESS, USER_FOLLOWERS_FETCH_START} from './UserInfo.actions';

const defaultState = {
	isFetching: false
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case USER_FOLLOWERS_FETCH_START:
			return {
				...state,
				isFetching: true
			};
		case USER_FOLLOWERS_FETCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				[action.payload.id]: {
					...state[action.payload.id],
					followers: action.payload.followers
				}
			};
		case USER_FOLLOWERS_FETCH_FAILURE:
			return {
				...state,
				isFetching: false
			};
		default:
			return state;
	}
}