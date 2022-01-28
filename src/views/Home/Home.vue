<template>
  <div>
    <bx-post-list :postList="postList"></bx-post-list>
  </div>
</template>
<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { getPostList } from '../../network/post'
import BxPostList from '../../components/content/PostList/PostList.vue'

let postList = ref([])

onMounted(async () => {
  const result = await getPostList()
  // console.log(result)
  const { status } = result

  if (status === 200) {
    // const {postList} = result.data
    // console.log(postList)
    postList.value = result.data.postList
  }
})
</script>
<style>
</style>