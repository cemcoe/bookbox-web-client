<template>
  <!-- <div class="home">bookbox{{ name }}</div> -->
  <ul>
    <li v-for="post in postList">{{ post }}---</li>
  </ul>
</template>


<script setup>
import { ref, onMounted, reactive } from 'vue'
import { getUsersList } from '@/network/user.js'
// const name = ref('cemcoe')
let postList = ref([])
// let data = reactive({
//   postList: []
// })

onMounted(async () => {
  // console.log('onMounted')
  const url = '/v1/users';
  // fetch(url, options).then(res => {

  //   // fetch 需要转化一下，需要点操作两次
  //   return res.json()
  // }).then(res => {
  //   // console.log(res)
  //   if (res.status === 200) {
  //     postList.value = res.data.post

  //     // note: 此种方式会丢失响应式
  //     // postList = res.data.post
  //     // console.log(postList, 'postList')
  //   }
  // })

  // 要小心，一不小心就丢失了响应式
  postList.value = await getUsersList()

})

</script>