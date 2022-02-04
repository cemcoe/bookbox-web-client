<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/attention" icon="search"
        >关注</van-tabbar-item
      >
      <van-tabbar-item replace to="/excellent" icon="search"
        >优选</van-tabbar-item
      >
      <van-tabbar-item replace to="/message" icon="search"
        >消息</van-tabbar-item
      >
      <van-tabbar-item replace to="/profile" icon="search"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script setup lang="ts"></script>
