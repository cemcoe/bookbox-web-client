<template>
  <div class="post-list">
   <post-item v-for="post in props.postList" :post="post"></post-item>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import PostItem from './PostItem.vue'

const props = defineProps({
  postList: Array,
})
</script>