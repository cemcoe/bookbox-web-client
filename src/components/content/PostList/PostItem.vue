<template>
  <div class="post-item">
    <router-link :to="'/u/' + post.authorId">{{ post.authorName }}</router-link>
    <router-link :to="'/p/' + post.id">
      <div class="title">{{ post.title }}</div>
      <div class="abstract">{{ post.abstract }}</div>
    </router-link>
  </div>
</template>

<script setup>
// PostList.vue
import { defineProps } from 'vue'

const props = defineProps({
  post: Object,
})

</script>

<style scoped>
.post-item {
  padding: 16px 8px;
  box-sizing: content-box;
  margin-bottom: 12px;
  box-shadow: 4px 4px 6px rgb(228, 225, 225);
}

.abstract {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>