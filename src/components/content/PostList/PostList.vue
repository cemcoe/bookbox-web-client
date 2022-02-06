<template>
  <div class="post-list">
    <post-item
      v-for="post in props.postList"
      :post="post"
      :key="post.id"
    ></post-item>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import PostItem from './PostItem.vue';

// https://v3.vuejs.org/api/sfc-script-setup.html#typescript-only-features

interface IPost {
  id: string;
  title: string;
  abstract: string;
  authorId: string;
  authorName: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
}

interface Props {
  postList: IPost[];
}

// const props = defineProps({
//   postList: Array
// });

const props = defineProps<Props>();
</script>
