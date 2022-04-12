'use strict';
import axios from 'axios';
import { Notify } from 'vant';
const apiPrefix = '/bush/v1';
//创建axios实例
const requests = axios.create({
    baseURL: process.env.VUE_APP_URL + apiPrefix, // 基础url,如果是多环境配置这样写，也可以像下面一行的写死。 // baseURL: 'http://168.192.0.123',
    timeout: 6000, //请求超时时间
});
//request interceptor(请求拦截器)
requests.interceptors.request.use(
    (config: any) => {
        const username = localStorage.getItem('username');
        if (username) {
            config.headers['x-nf-operator'] = username; //让每个请求携带自定义 token 请根据实际情况自行修改
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

//response interceptor（接收拦截器）
requests.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.code !== 0 && res.code !== 200) {
            if (res.code === 401 || res.code === 403 || res.code === 999) {
                Notify('请登录');
            } else {
                Notify(res.message || res.msg);
            }
            return Promise.reject(res);
        } else {
            return res;
        }
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default requests;
