<template>
  <router-view />
  <main-tab-bar v-if="$route.meta.showTabbar"></main-tab-bar>
</template>

<style>
</style>

<script setup>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'


</script>
