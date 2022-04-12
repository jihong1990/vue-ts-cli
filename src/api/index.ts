import axios from './axios';

/*
  登录验证 （done）
{
    username
    password
}
*/
export const Login = (data: any) => {
    return axios({
        url: '/login/Login',
        params: data,
    });
};
