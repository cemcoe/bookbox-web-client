<template>
  <div class="post">
    <NavBar title="文章" left-arrow @click-left="onClickLeft" />
    <div class="post-box">
      <h1 class="title">{{ post.title }}</h1>
      <div class="author">
        <p>{{ post.authorName }}</p>
      </div>
      <article>
        <div v-html="previewContent"></div>
      </article>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPostDetailAPI } from '../../network/post';
import { NavBar } from 'vant';
const onClickLeft = () => history.back();
import { marked } from "marked";


const route = useRoute()
const post = ref({})
let previewContent = ref('')

const getPostDetail = async () => {
  const result = await getPostDetailAPI(route.params.id)
  const { status } = result
  if (status === 200) {
    post.value = result.data.post
    previewContent.value = marked.parse(result.data.post.content)
  }
}

onMounted(getPostDetail())
</script>


<style scoped>
.post-box {
  padding: 10px;
}

.artile {
  line-height: 40px;
}
</style>

