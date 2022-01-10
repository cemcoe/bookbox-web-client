<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <main-tab-bar></main-tab-bar>
</template>

<style>

</style>

<script setup>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'


</script>
