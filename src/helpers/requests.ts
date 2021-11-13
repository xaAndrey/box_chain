import { Method } from 'axios';

export interface IRequestParams {
	url: any;
	method: Method;
}

export const requests: Record<string, IRequestParams> = {
	checkUserInDB: {
		url: (userId: number): string => `user/checkUser/${userId}`,
		method: 'GET',
	},
	saveUser: {
		url: 'user/save',
		method: 'POST',
	},
	sendGarbage: {
		url: (userId: number): string => `user/sendGarbage/${userId}`,
		method: 'PUT',
	},
	getAllGarbage: {
		url: 'garbage/getAll',
		method: 'GET',
	},
};
