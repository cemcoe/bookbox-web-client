<template>
  <div class="write">
    <router-link to="/editor">+</router-link>
  </div>
</template>

<script>

</script>

<style scoped>
.write {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 50px;
  bottom: 80px;
  border-radius: 50%;
  /* background-color: rgb(236, 221, 221); */
  background-color: rgb(14, 18, 235);
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
  font-size: 40px;
}
</style>