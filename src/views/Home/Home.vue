<template>
  <div class="home">
    <Search placeholder="请输入搜索关键词" @click-input="$router.push('/search')" />

    <bx-post-list :postList="postList"></bx-post-list>
    <div class="write">
      <router-link to="/editor">写</router-link>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, reactive } from 'vue'
import { getPostList } from '@/network/post'

import { Search } from 'vant';

import BxPostList from 'components/content/PostList/PostList'

// const name = ref('cemcoe')
let postList = ref([])
// let data = reactive({
//   postList: []
// })

onMounted(async () => {
  // // console.log('onMounted')
  // const url = '/v1/users';
  // // fetch(url, options).then(res => {

  // //   // fetch 需要转化一下，需要点操作两次
  // //   return res.json()
  // // }).then(res => {
  // //   // console.log(res)
  // //   if (res.status === 200) {
  // //     postList.value = res.data.post

  // //     // note: 此种方式会丢失响应式
  // //     // postList = res.data.post
  // //     // console.log(postList, 'postList')
  // //   }
  // // })

  // // 要小心，一不小心就丢失了响应式
  // postList.value = await getUsersList()
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
.write {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 50px;
  bottom: 80px;
  border-radius: 50%;
  /* background-color: rgb(236, 221, 221); */
  background-color: #fff;
  line-height: 40px;
  text-align: center;
  padding: 10px;
  /* box-shadow: 0 0 40px rgb(8, 8, 8); */
  box-shadow: 4px 4px 6px rgb(228, 225, 225);
}
.write a {
  width: 100%;
  height: 100%;
  display: block;
  color: #fff;
}
</style>