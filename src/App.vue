<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MainTabBar from './components/content/MainTabBar/MainTabBar.vue';
</script>

<template>
  <RouterView></RouterView>
  <MainTabBar v-if="$route.meta.showTabbar"></MainTabBar>
</template>

<style></style>
