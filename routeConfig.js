import UserList from './screens/UsersListScreen/index';
import UserInfo from './screens/UserInfoScreen/index';

export const routes = {
	'UserList': {
		screen: UserList
	},
	'UserInfo': {
		screen: UserInfo
	}
};

export const navigationConfig = {
	initialRouteName: 'UserList'
};