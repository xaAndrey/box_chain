import { createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '../dto/IUserInfo';
import { vkEventTypes } from '../helpers/vkEventTypes';

export interface IVKEventObjects {
	userInfo: IUserInfo;
	isError: boolean;
	// etc
}

const initState: IVKEventObjects = {
	userInfo: {} as IUserInfo,
	isError: false,
};

export const vkEventsSlice = createSlice({
	name: 'vkEvents',
	initialState: initState,
	extraReducers: {},
	reducers: {
		setVkEventData: (state, action) => {
			if (action.payload) {
				switch (action.payload.type) {
					case vkEventTypes.VKWebAppGetUserInfoResult:
						state.userInfo = action.payload;
						break;
					default:
						state.isError = true;
				}
			}
		},
	},
});

export const { setVkEventData } = vkEventsSlice.actions;
export default vkEventsSlice.reducer;
