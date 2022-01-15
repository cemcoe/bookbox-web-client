<template>
  <NavBar title="搜索" left-arrow @click-left="onClickLeft" />

  <Search placeholder="请输入搜索关键词" v-model="key" @search="onSearch" @cancel="onCancel" />

  <div class="result">
    {{key}}
  </div>
</template>


<script setup>
import { Search, NavBar } from 'vant';
import { ref } from 'vue';


const onClickLeft = () => history.back();

const key = ref('')

const onSearch = () => {
  console.log(key.value)
}

const onCancel = () => {
  console.log(key.value)
}

</script>