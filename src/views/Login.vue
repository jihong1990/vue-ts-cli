<template>
    <div flex="main:center cross:center" class="login">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit"> 提交 </van-button>
            </div>
        </van-form>
    </div>
</template>

<script lang="ts">
import { Login } from '@/api';
import { Toast } from 'vant';
import { defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'login',
    setup() {
        const router = useRouter();
        const state = reactive({
            username: '',
            password: '',
        });
        const onSubmit = (values: { username: string; password: string }) => {
            Login(values).then(({ data }) => {
                localStorage.user_id = data.user_id;
                localStorage.username = values.username;
                Toast('登陆成功');
                router.push('/');
            });
        };
        return {
            ...toRefs(state),
            onSubmit,
        };
    },
});
</script>
<style lang="scss">
.login {
    height: 100%;
}
</style>
