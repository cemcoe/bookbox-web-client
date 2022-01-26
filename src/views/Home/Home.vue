<template>
  <div>{{ postList[0] }}</div>
</template>
<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { getPostList } from '../../network/post.ts'

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