export interface IUserInfo {
	type: 'VKWebAppGetUserInfoResult';
	data: {
		id: number;
		first_name: string;
		last_name: string;
		sex: number;
		city: {
			id: number;
			title: string;
		};
		country: {
			id: number;
			title: string;
		};
		bdate: string;
		photo_100: string;
		photo_200: string;
		photo_max_orig: string;
		timezone: number;
	};
}
