import axsiosIstans from './axsios_instans';

class AuthApi {
	me() {
		return axsiosIstans.get(`auth/me`);
	}
	login(email, password, rememberMe) {
		return axsiosIstans.post('auth/login', { email, password, rememberMe });
	}
}

export default new AuthApi();
