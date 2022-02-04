<template>
  <nav-bar>
    <template v-slot:left>
      <a href="https://github.com/cemcoe/bookbox-web-client">
        <img src="./GitHub-Mark-64px.png" />
      </a>
    </template>
    <template v-slot:center>
      <router-link to="/search">
        <button class="search-button">搜索感兴趣的内容</button>
      </router-link>
    </template>
    <template v-slot:right>
      <a href="https://github.com/cemcoe/bookbox-web-client">
        <img src="./GitHub-Mark-64px.png" />
      </a>
    </template>
  </nav-bar>
</template>

<script setup>
import NavBar from 'components/content/NavBar/NavBar.vue';
</script>

<style scoped>
.search-button {
  width: 100%;
  border: 0px;
  border-radius: 2px;

  padding: 8px;
  outline-style: none;
  text-align: left;
  background-color: rgb(250, 243, 243);
  font-size: 12px;
  letter-spacing: 4px;
}

img {
  width: 30px;
}
</style>
