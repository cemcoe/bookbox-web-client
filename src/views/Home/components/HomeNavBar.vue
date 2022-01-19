<template>
  <nav-bar>
    <template v-slot:left>
      <a href="https://github.com/cemcoe/book-web-client">cemcoe</a>
    </template>
    <template v-slot:center>
      <router-link to="/search">
        <button class="search-button">搜索感兴趣的内容</button>
      </router-link>
    </template>
    <template v-slot:right>
      <div>
        <router-link :to="'/login'" replace class="login">登录|注册</router-link>
      </div>
    </template>
  </nav-bar>
</template>

<script setup>
import NavBar from 'components/content/NavBar/NavBar.vue'

</script>

<style scoped>
.search-button {
  width: 90%;
  border: 0px;
  border-radius: 6px;
  padding: 6px;
  outline-style: none;
  text-align: center;
  background-color: rgb(243, 237, 237);
  font-size: 12px;
  letter-spacing: 2px;
}
</style>