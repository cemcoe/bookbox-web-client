<template>
  <div class="tab-bar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="like-o" replace to="/attention">关注</van-tabbar-item>
      <van-tabbar-item icon="fire-o" replace to="/excellent">优选</van-tabbar-item>
      <van-tabbar-item icon="chat-o" replace to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="contact" replace to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(0);



</script>