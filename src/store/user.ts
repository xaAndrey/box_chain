import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpHelper } from '../helpers/httpHelper';
import { requests } from '../helpers/requests';
import { IAuthResponse } from '../dto/IAuthResponse';
import { INewUser } from '../dto/INewUser';

interface IUserState {
	user: IAuthResponse;
	status: string | number;
}

export const auth = createAsyncThunk<IUserState, number>('user/auth', async (userId: number, { rejectWithValue }) => {
	try {
		const res = await httpHelper(requests.checkUserInDB.url(userId), requests.checkUserInDB.method);
		return {
			user: res.data,
			status: res.status as unknown as string,
		};
	} catch (err: any) {
		return rejectWithValue({
			user: {} as IAuthResponse,
			status: err.response.status as unknown as string,
		});
	}
});

export const saveUser = createAsyncThunk<{ status: string }, INewUser>(
	'user/new',
	async (newUser: INewUser, { rejectWithValue }) => {
		try {
			const res = await httpHelper(requests.saveUser.url, requests.saveUser.method, newUser);
			return {
				status: res.status as unknown as string,
			};
		} catch (err: any) {
			return rejectWithValue({
				status: err.response.status as unknown as string,
			});
		}
	},
);

const initState: IUserState = {
	user: {} as IAuthResponse,
	status: 200,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initState,
	extraReducers: (builder) => {
		builder.addCase(auth.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(auth.fulfilled, (state, action) => {
			state.status = action.payload.status;
			state.user = action.payload.user;
		});
		builder.addCase(auth.rejected, (state, action) => {
			state.status = (<IUserState>action.payload).status;
			state.user = (<IUserState>action.payload).user;
		});
		builder.addCase(saveUser.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(saveUser.fulfilled, (state, action) => {
			state.status = action.payload.status;
		});
		builder.addCase(saveUser.rejected, (state, action) => {
			state.status = (<IUserState>action.payload).status;
		});
	},
	reducers: {},
});

export default userSlice.reducer;
