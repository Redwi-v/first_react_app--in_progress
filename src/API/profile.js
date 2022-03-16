import axsiosIstans from './axsios_instans';

class Profile {
	getProfile(userId) {
		return axsiosIstans.get('profile/' + userId);
	}
	getStatus(userId) {
		return axsiosIstans.get(`profile/status/${userId}`).then(res => res.data);
	}
	updateStatus(status) {
		return axsiosIstans.put('profile/status', { status: status });
	}
}

export default new Profile();
