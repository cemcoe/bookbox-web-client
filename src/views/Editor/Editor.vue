<template>
  <div class="editor">
    <!-- <div class="editor-header" @click="publish">保存</div> -->
    <editor-header
      :isNewPost="pid ? false : true"
      @goBack="goBack"
      @publish="publish"
      @preview="preview"
      @update="update"
    ></editor-header>
    <div class="preview" v-show="state.isPreview">
      <div v-html="state.previewContent"></div>
    </div>
    <div class="content" v-show="!state.isPreview">
      <input
        v-model="post.title"
        type="text"
        id="title"
        placeholder="请输入标题"
      />
      <textarea
        v-model="post.content"
        name="post"
        id="post"
        placeholder="请输入正文"
      ></textarea>
    </div>
  </div>
  <editor-pannel @insert="insert"></editor-pannel>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { createPost, getPostDetailAPI } from '../../network/post';

import { updatePostApi } from '../../service/post';

import EditorHeader from './EditorHeader.vue';
import EditorPannel from './EditorPannel.vue';
import useInsertText from './useInsertText';
// marked 4 更改了引入方式，marked 1 (import marked from "marked";)
// https://marked.js.org/#usage 解析方式也发生了变化
import { marked } from 'marked';

const router = useRouter();
const route = useRoute();
const { pid } = route.params;

const getPostDetail = async (pid) => {
  const result = await getPostDetailAPI(pid);
  const { status } = result;
  if (status === 200) {
    return result.data.post;
    // post.value = result.data.post
    // previewContent.value = marked.parse(result.data.post.content)
  }
};

const post = reactive({
  title: '',
  content: ''
});

const state = reactive({
  isPreview: false,
  previewContent: ''
});

const goBack = () => {
  // 如果在预览状态下点击，则切换为编辑状态
  // 如果是编辑状态，则路由切换
  if (state.isPreview) {
    state.isPreview = false;
  } else {
    router.back();
  }
};

const publish = async () => {
  const result = await createPost(post);
  console.log(result);
  const { status } = result;
  if (status === 200) {
    router.back();
  }
};

const update = async () => {
  const result = await updatePostApi(pid, post);
  console.log(result, 'update');
  const { status } = result;
  if (status === 200) {
    router.back();
  }
};

const preview = () => {
  state.isPreview = true;
  // console.log(marked, 'marked')
  state.previewContent = marked.parse(post.content);
};

const insert = (value) => {
  console.log('insert', value);
  const dom = document.querySelector('#post');
  useInsertText(dom, value);
};

const init = async (pid) => {
  // 检查是否是新文章，如果带参数，则要根据pid查文章内容
  if (pid) {
    // 根据pid找文章内容
    const result = await getPostDetail(pid);
    post.title = result.title;
    post.content = result.content;
  } else {
    // 新文章啥也不干
  }
};

onMounted(init(pid));
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

.preview {
  margin-top: 44px;
}
</style>
