import axsiosIstans from './axsios_instans';

class AuthApi {
	me() {
		return axsiosIstans.get(`auth/me`);
	}
}

export default new AuthApi();
