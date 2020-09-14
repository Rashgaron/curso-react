import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './firebase/config';


const store = createStore(
	reducer,
	{},
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase })),
		reactReduxFirebase(firebase),
		typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: (f) => f
	)
);

export default store;
