<template>
  <div>
    <nav-bar></nav-bar>
    <bx-post-list :postList="postList"></bx-post-list>
    <go-to-write-button />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPostList } from '../../network/post';
import NavBar from './components/HomeNavBar.vue';
import GoToWriteButton from './components/GoToWriteButton.vue';
import BxPostList from '../../components/content/PostList/PostList.vue';

let postList = ref([]);

onMounted(async () => {
  const result = await getPostList();
  // console.log(result)
  const { status } = result;

  if (status === 200) {
    // const {postList} = result.data
    // console.log(postList)
    postList.value = result.data.postList;
  }
});
</script>
<style></style>
