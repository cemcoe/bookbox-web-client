<template>
  <div class="profile">
    <div class="user-info-container">
      <div class="user-info">
        <Row>
          <Col class="avator-container" span="6" @click="goToLogin">
            <div class="avator">头像</div>
          </Col>
          <Col class="info" span="12" @click="goToLogin">
            <div class="name">{{ user.name ? user.name : '登录' }}</div>
            <div class="number">
              <span class="attention">关注 0</span>
              <span class="fans">粉丝 0</span>
            </div>
          </Col>
          <Col class="ext-info" span="6">
            <div class="text-box">书盒创作者</div>
          </Col>
        </Row>
      </div>
      <Divider />
      <div class="user-content">
        <Grid :border="false">
          <GridItem icon="photo-o" text="我的文章" />
          <GridItem icon="photo-o" text="我的贴子" />
          <GridItem icon="photo-o" text="赞和收藏" />
          <GridItem icon="photo-o" text="我的书架" />
        </Grid>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { Grid, GridItem } from 'vant';
import { Col, Row } from 'vant';
import { Divider } from 'vant';

import { useRouter } from 'vue-router'
import { getOwnerInfo } from '../../network/user';
const router = useRouter()

const goToLogin = () => {
  router.push('/login')
}


let user = reactive({
  name: '',
})

onMounted(async () => {
  const result = await getOwnerInfo()
  // console.log(result)
  const { status } = result

  if (status === 200) {
    // user = result.data // 此操作会丢失响应式
    user.name = result.data.name
  }
})

</script>

<style>
.profile {
  /* background-color: #000;
  height: 300px; */
  overflow: hidden;
}
.user-info-container {
  background-color: #fff;
  margin: 20px 10px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 4px rgb(236, 233, 233);
}

.user-info {
  padding-top: 20px;
}

.avator-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.avator {
  width: 60px;
  height: 60px;
  background-color: #ccc;
  border-radius: 50%;
}

.info {
  /* background-color: #ccc; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;
}

.ext-info {
  display: flex;
  justify-content: right;
}

.text-box {
  font-size: 12px;
  background-color: #ccc;
  padding: 4px;
  height: 20px;
  line-height: 20px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}
</style>