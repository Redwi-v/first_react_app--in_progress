import axsiosIstans from './axsios_instans';

class UserAPI {
	getUsers(selectPage = 1, pageSize = 8) {
		return axsiosIstans
			.get(`users?page=${selectPage}&count=${pageSize}`)
			.then(res => res.data);
	}

	addFriend(userId) {
		return axsiosIstans.post(`follow/${userId}`);
	}
	deleteFriend(userId) {
		return axsiosIstans.delete(`follow/${userId}`);
	}

	getProfile(userId) {
		return axsiosIstans.get('profile/' + userId);
	}
}

const userAPI = new UserAPI();
export default userAPI;
