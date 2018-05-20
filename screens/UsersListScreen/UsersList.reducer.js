import {USERS_FETCH_FAILURE, USERS_FETCH_SUCCESS, USERS_FETCH_START} from './UsersList.actions'

const defaultState = {
	isFetching: false,
	users: []
};

export default function(state = defaultState, action) {
	switch (action.type) {
		case USERS_FETCH_START:
			return {
				...state,
				isFetching: true
			};
		case USERS_FETCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				users: action.payload
			};
		case USERS_FETCH_FAILURE:
			return {
				...state,
				isFetching: false
			};
		default:
			return state;
	}
};