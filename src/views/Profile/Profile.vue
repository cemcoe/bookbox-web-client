<template>
  <div class="profile">
    <NavBar title="我的"></NavBar>
    <div class="user-info-container">
      <div class="user-info">
        <div class="avator-container" @click="goToLogin">
          <div class="avator"></div>
        </div>
        <div class="info" @click="goToLogin">
          <div class="name">{{ user.name ? user.name : '登录' }}</div>
          <div class="number">
            <span class="attention">关注 0</span>
            <span class="fans">粉丝 0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import NavBar from '../../components/content/NavBar/NavBar.vue';

import { useRouter } from 'vue-router';
import { getOwnerInfo } from '../../network/user';
const router = useRouter();

const goToLogin = () => {
  // 检查是否拿到用户信息，如果已经登录跳转到对应的用户页面
  const path = user.id ? '/u/' + user.id : '/login';
  router.push(path);
};

let user = reactive({
  id: 0,
  name: ''
});

onMounted(async () => {
  const result = await getOwnerInfo();
  // console.log(result)
  const { status } = result;

  if (status === 200) {
    // user = result.data // 此操作会丢失响应式
    user.name = result.data.name;
    user.id = result.data.id;
  }
});
</script>

<style>
.profile {
  /* background-color: #000;
  height: 300px; */
  overflow: hidden;
}
.user-info-container {
  background-color: #fff;
  margin: 0px 10px 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 4px rgb(236, 233, 233);
}

.user-info {
  padding: 20px;
  display: flex;
}

.avator-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.avator {
  width: 60px;
  height: 60px;
  background-color: #ccc;
  border-radius: 50%;
}

.info {
  /* background-color: #ccc; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;
}
</style>
