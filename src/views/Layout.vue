<template>
  <div class="main">
    <h1>24列栅格</h1>
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
    <h4>offset 设置横向的偏移量</h4>
    <van-row>
      <van-col span="4">span: 4</van-col>
      <van-col span="10" offset="4">offset: 4, span: 10</van-col>
    </van-row>
    <br>
    <van-row>
      <van-col offset="12" span="12">offset: 12, span: 12</van-col>
    </van-row>
    <h1>gutter 设置col的间距</h1>
    <h3>这里的gutter设置的是两边的padding</h3>
    <van-row gutter="20">
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
  </div>
</template>

<script>
import { Row, Col } from "vant";
import Vue from "vue";
Vue.use(Row);
Vue.use(Col);

export default {};
</script>

<style lang="scss" scoped>
.van-row{
    width: 100vw;
}
.van-col {
  text-align: center;
  border: 1px solid black;
}
.van-col--8{
    background-clip: content-box;
    background-color: red;
    box-sizing: border-box;
}
</style>