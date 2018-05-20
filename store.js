import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import appNavigationMiddleware from './AppNavigation/appNavigation.middleware';
import rootReducer from './rootReducer';

export default createStore(
	rootReducer,
	applyMiddleware(appNavigationMiddleware, thunkMiddleware)
);