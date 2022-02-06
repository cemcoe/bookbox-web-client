<template>
  <nav-bar>
    <template v-slot:left>
      <p @click="goBack">
        <BxIcon name="arrow-left"></BxIcon>
      </p>
    </template>
    <template v-slot:center>文章</template>
    <template v-slot:right>
      <p @click="gotoEditor">编辑</p>
    </template>
  </nav-bar>
</template>

<script setup>
import NavBar from 'components/content/NavBar/NavBar.vue';
import BxIcon from 'components/common/BxIcon/BxIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.back();
};

const gotoEditor = () => {
  router.push('/editor/1');
};
</script>

<style scoped></style>
