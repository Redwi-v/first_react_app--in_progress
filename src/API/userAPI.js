import axios from 'axios';

const axsiosUsersIstans = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/users/',
	headers: {
		'API-KEY': ' ee72656b-e4b6-457f-983f-35457a0d8aec',
	},
});

class UserAPI {
	getUsers(selectPage = 1, pageSize = 8) {
		return axsiosUsersIstans
			.get(`?page=${selectPage}&count=${pageSize}`)
			.then(res => res.data);
	}
}

const userAPI = new UserAPI();
export default userAPI;
