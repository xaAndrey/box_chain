import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Route = 'loadingView' | 'quickGuideView' | 'editMascotView' | 'homeView';
const initRoute: Route = 'loadingView';

export const routeSlice = createSlice({
	name: 'route',
	initialState: initRoute as Route,
	reducers: {
		setRoute: (state, action: PayloadAction<Route>) => action.payload,
	},
});

export const { setRoute } = routeSlice.actions;
export default routeSlice.reducer;
