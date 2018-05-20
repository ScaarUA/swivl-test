import {combineReducers} from 'redux';

import appNavigationReducer from './AppNavigation/appNavigation.reducer';
import usersListReducer from './screens/UsersListScreen/UsersList.reducer';
import userInfoReducer from './screens/UserInfoScreen/UserInfo.reducer';

export default combineReducers({
	nav: appNavigationReducer,
	usersList: usersListReducer,
	userInfo: userInfoReducer
});