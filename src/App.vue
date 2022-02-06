<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import MainTabBarVue from './components/content/MainTabBar/MainTabBar.vue';
import DemoTab from './components/content/MainTabBar/DemoBar.vue';
</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <RouterView></RouterView>
  <!-- <MainTabBarVue v-if="$route.meta.showTabbar"></MainTabBarVue> -->
  <DemoTab></DemoTab>
</template>

<style></style>
