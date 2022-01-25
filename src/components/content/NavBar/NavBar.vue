<template>
  <!-- <nav-bar left-arrow title="title"></nav-bar> -->
  <div class="nav-bar">
    <div class="left">
      <!-- {{ props.leftArrow }} -->
      <!-- 你如果给我了值那么，left就展示的是返回的功能, 下面的同理 -->
      <slot name="left" v-if="!props.leftArrow"></slot>
      <div class="back" @click="history.back()" v-else>回</div>
    </div>
    <div class="center">
      <slot v-if="!props.title" name="center"></slot>
      <div class="title" v-else>{{ props.title }}</div>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  // 如果有值就不是插槽模式
  leftArrow: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  }
})

</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  overflow: hidden;
  display: flex;
  text-align: center;
  align-items: center;
  background-color: #fff;
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>
