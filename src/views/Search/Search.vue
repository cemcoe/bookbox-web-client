<template>
  <NavBar left-arrow>
    <template v-slot:center>
    <Search placeholder="请输入搜索关键词" v-model="key" @search="onSearch" @cancel="onCancel" />
    </template>
  </NavBar>

  

  <div class="result">{{ key }}</div>
</template>


<script setup>
import { Search } from 'vant';
import { ref } from 'vue';
import NavBar from 'components/content/NavBar/NavBar.vue'



const onClickLeft = () => history.back();

const key = ref('')

const onSearch = () => {
  console.log(key.value)
}

const onCancel = () => {
  console.log(key.value)
}

</script>