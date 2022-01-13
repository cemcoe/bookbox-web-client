<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.authorName }}</p>
    <p>{{ post.content }}</p>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPostDetailAPI } from '../../network/post';

const route = useRoute()
const post = ref({})

const getPostDetail = async () => {
  const result = await getPostDetailAPI(route.params.id)
  const { status } = result
  if (status === 200) {
    post.value = result.data.post
  }
}

onMounted(getPostDetail())
</script>

