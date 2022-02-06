<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="./tabbar/home.svg" />
        </template>

        <template v-slot:item-icon-active>
          <img src="./tabbar/home_active.svg" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/attention">
        <template v-slot:item-icon>
          <img src="./tabbar/following.svg" />
        </template>

        <template v-slot:item-icon-active>
          <img src="./tabbar/following_active.svg" />
        </template>
        <template v-slot:item-text>
          <div>attention</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/excellent">
        <template v-slot:item-icon>
          <img src="./tabbar/island.svg" />
        </template>

        <template v-slot:item-icon-active>
          <img src="./tabbar/island_active.svg" />
        </template>
        <template v-slot:item-text>
          <div>excellent</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/message">
        <template v-slot:item-icon>
          <img src="./tabbar/message.svg" />
        </template>

        <template v-slot:item-icon-active>
          <img src="./tabbar/message_active.svg" />
        </template>
        <template v-slot:item-text>
          <div>message</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="./tabbar/profile.svg" />
        </template>

        <template v-slot:item-icon-active>
          <img src="./tabbar/profile_active.svg" />
        </template>
        <template v-slot:item-text>
          <div>profile</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script setup lang="ts">
import TabBar from '../../common/TabBar/TabBar.vue';
import TabBarItem from '../../common/TabBar/TabBarItem.vue';
</script>
<style lang=""></style>
