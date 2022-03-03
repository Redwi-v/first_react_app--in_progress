import axios from 'axios';

const axsiosIstans = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': ' ee72656b-e4b6-457f-983f-35457a0d8aec',
	},
});

export default axsiosIstans;
