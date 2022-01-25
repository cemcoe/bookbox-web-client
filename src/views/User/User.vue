<template>
  <div class="user">
    <nav-bar left-arrow :title="user.name"></nav-bar>
    <h1>{{ user.name }}</h1>
    <h1>{{ user.id }}</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getUserInfoAPI } from '../../network/user';

import NavBar from 'components/content/NavBar/NavBar.vue'

const route = useRoute()
const user = ref({})

const getUserInfo = async () => {
  const result = await getUserInfoAPI(route.params.id)
  const { status } = result
  if (status === 200) {
    user.value = result.data.user
  }
}

onMounted(getUserInfo())
</script>
