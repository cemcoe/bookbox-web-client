<template>
  <div class="editor">
    <!-- <div class="editor-header" @click="publish">保存</div> -->
    <editor-header :isNewPost="true" @goBack="goBack" @publish="publish"></editor-header>
    <div class="content">
      <input v-model="post.title" type="text" id="title" placeholder="请输入标题" />
      <textarea v-model="post.content" name="post" id="post" placeholder="请输入正文"></textarea>
    </div>
  </div>
  <div class="editor-pannel">pannel</div>
</template>


<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '../../network/post';
import EditorHeader from './EditorHeader.vue'

const router = useRouter()

const post = reactive({
  title: '',
  content: '',
})

const goBack = () => {
  router.back()
};

const publish = async () => {
  const result = await createPost(post)
  console.log(result)
}

</script>

<style>
.content {
  margin-top: 44px;
  margin-bottom: 49px;
  /* overflow-y: scroll; */
}

.content #title {
  outline: 0 none;
  border: none !important;
  font-size: 20px;
  padding: 8px;
}

::-webkit-input-placeholder {
  color: #ccc;
}

.content #post {
  outline: 0 none;
  border: none !important;
  width: 100%;
  height: 100%;
  resize: none;
  height: calc(100vh - 200px);
  /* 剪掉头和尾以及title高度 */
  padding: 8px;
  box-sizing: border-box;
}
</style>