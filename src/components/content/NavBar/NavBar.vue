<template>
  <div class="nav-bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script setup>

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
