<template>
  <div class="post-item">
    <div class="author" v-if="author">
      <div class="author-avatar">
        <!-- <img src="" alt="avatar"> -->
      </div>
      <div class="author-name">
        <router-link :to="'/u/' + post.authorId">{{
          post.authorName
        }}</router-link>
      </div>
    </div>
    <div class="title">
      <router-link :to="'/p/' + post.id">{{ post.title }}</router-link>
    </div>
    <div class="abstract">
      <router-link :to="'/p/' + post.id">{{ post.abstract }}</router-link>
    </div>
    <div class="meta">
      <span class="meta-item">{{ post.authorName }}</span>
      <span class="meta-item" v-if="meta.viewCount">0 阅读</span>
      <span class="meta-item">0 评论</span>
      <span class="meta-item">0 赞</span>
    </div>
  </div>
</template>

<script setup>
// PostList.vue
import { defineProps } from 'vue';

const props = defineProps({
  post: Object,
  author: {
    // 是否需要author模块
    type: Boolean,
    default: true
  },
  // TODO: 头像可调大小 meta可动态配置
  meta: {
    type: Object,
    default: {
      // 是否展示个meta
      authorName: true,
      viewCount: true
    }
  }
});
</script>

<style scoped>
.post-item {
  padding: 16px 8px;
  box-sizing: content-box;
  margin-bottom: 12px;
  box-shadow: 4px 4px 6px rgb(228, 225, 225);
}

.author {
  /* background-color: #ddd; */
  display: flex;
  align-items: center;
}

.author .author-avatar {
  width: 30px;
  height: 30px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 10px;
}

.title {
  /* background-color: #ccc; */
  font-size: 18px;
  font-weight: 700;
  padding-top: 12px;
  padding-bottom: 8px;
}

.title a {
  color: #000;
}

.abstract {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  line-height: 30px;
}

.meta {
  /* background-color: #ccc; */
  font-size: 12px;
  color: #ccc;
}

.meta-item {
  padding-right: 6px;
}
</style>
