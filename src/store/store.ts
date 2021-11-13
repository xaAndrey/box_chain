import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import vkEventsReducer from './vkEvents';
import routeReducer from './routes';
import userReducer from './user';

const store = configureStore({
	reducer: {
		vkEvents: vkEventsReducer,
		route: routeReducer,
		user: userReducer,
	},
});

export type AppDispatch = typeof store.dispatch;

export function useAppDispatch() {
	return useDispatch<AppDispatch>();
}

export type RootState = ReturnType<typeof store.getState>;
export default store;
