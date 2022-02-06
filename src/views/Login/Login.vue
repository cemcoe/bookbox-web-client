<template>
  <div class="login">
    <form
      @submit.prevent="
        () => {
          return false;
        }
      "
    >
      <div class="name">
        <label for="name">账号:</label>
        <input type="text" id="name" v-model="user.name" />
      </div>
      <div class="password">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <div class="submit">
        <button @click="onSubmit">登录</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// <script setup> 范围里的值也能被直接作为自定义组件的标签名使用
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
