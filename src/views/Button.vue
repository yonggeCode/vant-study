<template>
  <div class="main">
    <div class="block">
      <h1>common</h1>
      <van-button @click="handelClick" type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div class="block">
      <h1>plain</h1>
      <van-button plain type="primary">朴素按钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
    </div>
    <div class="block">
      <h1>hairline</h1>
      <van-button plain hairline type="primary">细边按钮</van-button>
      <van-button plain hairline type="info">细边按钮</van-button>
    </div>
    <div class="block">
      <h1>disabled</h1>
      <van-button disabled type="primary">禁用状态</van-button>
      <van-button disabled type="info">禁用状态</van-button>
    </div>
    <div class="block">
      <h1>loading</h1>
      <van-button loading type="primary"></van-button>
      <van-button loading type="info"></van-button>
      <van-button loading loading-type="spinner" type="warning" loading-text="加载中"></van-button>
    </div>
    <div class="block">
      <h1>square</h1>
      <van-button square type="primary">方形按钮</van-button>
      <van-button round type="info">圆形按钮</van-button>
    </div>
    <div class="block">
      <h1>icon</h1>
      <van-button icon="star-o" type="primary" />
      <van-button icon="star-o" type="primary">按钮</van-button>
      <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">按钮</van-button>
    </div>
    <div class="block">
      <h1>size</h1>
      <van-button type="primary" size="large">大号按钮</van-button>
      <van-button type="info" round size="normal">普通按钮</van-button>
      <van-button type="warning" size="small">小型按钮</van-button>
      <van-button type="danger" size="mini">迷你按钮</van-button>
    </div>
    <div class="block">
      <h1>block</h1>
      <van-button type="primary">块级元素</van-button>
      <van-button type="info">块级元素</van-button>
      <van-button type="primary" block size="small">块级元素</van-button>
    </div>
    <div class="block">
      <h1>url</h1>
      <van-button type="primary" url="Https://www.baidu.com">跳转到百度</van-button>
      <van-button type="info" to="/">跳转到首页</van-button>
      <van-button type="info" to="/" replace>跳转到首页</van-button>
    </div>
    <div class="block">
      <h1>color</h1>
      <van-button color="#7232dd">单色按钮</van-button>
      <van-button color="#7232dd" plain>单色按钮</van-button>
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
export default {
  data() {
    return {};
  },
  methods: {
    handelClick() {
      alert("按一按");
    }
  }
};
</script>

<style lang="scss" scoped>
.block{
  text-align: center;
}
.van-button {
  margin-left: 0.3rem;
  margin-top: 0.5rem;
}
</style>