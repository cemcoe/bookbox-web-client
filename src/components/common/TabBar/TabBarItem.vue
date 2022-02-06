<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!state.isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 根据是否被点击切换不同的图片，使用时传入两种状态的图片 -->
    <div :style="state.activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- 根据是否处于被点击状态改变文字的颜色 -->
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  activeColor: {
    type: String,
    default: 'red'
  }
});

const router = useRouter();
const route = useRoute();
const state = reactive({
  isActive: false,
  activeStyle: {}
});

state.isActive = route.path.indexOf(props.path) !== -1;
state.activeStyle = state.isActive ? { color: props.activeColor } : {};

// : computed(() => {
//     return route.path.indexOf(props.path) !== -1;
//   })
// const isActive = route.path.indexOf(props.path) !== -1;
// const activeStyle = isActive ? { color: props.activeColor } : {};

const itemClick = () => {
  router.replace(props.path);
};

// export default {
//   props: {
//     path: String,
//     activeColor: {
//       type: String,
//       default: 'red'
//     }
//   },
//   data() {
//     return {
//       // isActive: true
//     };
//   },
//   computed: {
//     isActive() {
//       return this.$route.path.indexOf(this.path) !== -1;
//     },
//     activeStyle() {
//       return this.isActive ? { color: this.activeColor } : {};
//     }
//   },
//   methods: {
//     itemClick() {
//       this.$router.replace(this.path);
//     }
//   }
// };
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item:deep(img) {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
