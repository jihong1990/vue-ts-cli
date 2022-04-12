// @ts-check
import { defineStore } from 'pinia';
export const appStore = defineStore({
    id: 'user',
    state: () => ({
        loading: false,
    }),
    actions: {
        // 用户登录
        // login() {
        //     Taro.login({
        //         success: (res) => {
        //             const code = res.code;
        //             if (code) {
        //                 login({ code }).then((res2) => {
        //                     if (res2?.code == 0 && res2.data) {
        //                         const data = res2.data;
        //                         // /* 埋点上报：登陆成功 */
        //                         Taro['uma'].trackEvent('Um_Event_LoginSuc', {
        //                             Um_Key_LoginType: '微信登陆', // 目前无手机号认证
        //                             Um_Key_UserID: data.id, // 使用服务端分配的 id
        //                         });
        //                         Taro['uma'].setUserid(data.id);
        //                         Taro.setStorageSync('userInfo', data);
        //                         Taro.setStorageSync('user_id', data.id);
        //                         this.userInfo = data;
        //                         this.setUserInfo(data);
        //                         Object.keys(data).map((key) => {
        //                             this[key] = data[key];
        //                         });
        //                     }
        //                 });
        //             } else {
        //                 console.log('获取用户登录态失败！' + res.errMsg);
        //                 /* 埋点上报：登陆失败 */
        //                 Taro['uma'].trackEvent('Um_Event_LoginFailed', { Um_Key_Reasons: res.errMsg });
        //             }
        //         },
        //     });
        // },
        // // 更新用户信息用户信息
        // setUserInfo(data: User.UpdateInfo = {}) {
        //     var user = Taro.getStorageSync('userInfo');
        //     if (data) {
        //         Taro.setStorageSync('userInfo', { ...user, ...data });
        //         Taro;
        //     }
        //     const pages = xGetPage(-1);
        //     if (pages.length > 1) {
        //         xRouter();
        //     } else {
        //     }
        // },
    },
});
