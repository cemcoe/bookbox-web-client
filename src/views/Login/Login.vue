<template>
  <div class="login">
    <form>
      <cell-group inset>
        <field
          v-model="user.name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
        />
        <field
          v-model="user.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
        />
      </cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" @click="onSubmit"
          >登陆</van-button
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// <script setup> 范围里的值也能被直接作为自定义组件的标签名使用
import { Form, Field, CellGroup } from 'vant';
import { reactive } from 'vue';
import { login } from '../../network/user';
import { useRouter } from 'vue-router';

const user = reactive({
  name: '',
  password: ''
});

const router = useRouter();

const onSubmit = async () => {
  // TODO: 参数校验
  console.log('submit', user);
  const result = await login(user);
  console.log(result, 'result');
  const { status } = result;
  if (status === 200) {
    const { token } = result.data;
    localStorage.setItem('token', token);
    // TODO: 请求用户信息保存本地并跳转到首页

    router.back();
  } else {
    // TODO: 登录失败
  }
};
</script>
