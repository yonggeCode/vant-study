<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>mode改变默认模式,有两个,link是箭头,closeable是×</h5>
      <h5>这一个就够了,后面的实用性不大,只是有默认样式而已</h5>
      <van-notice-bar :text="text" left-icon="volume-o" mode="link" />
      <h5>自定义颜色</h5>
      <van-notice-bar :text="text" left-icon="volume-o" color="#1989fa" background="#ecf9ff"></van-notice-bar>
      <h4>禁用滚动和多行展示</h4>
      <h5>wrapable必须作用在禁用滚动的通知栏上</h5>
      <van-notice-bar :scrollable="false">{{text}}</van-notice-bar>
      <van-notice-bar wrapable  :scrollable="false">{{text}}</van-notice-bar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NoticeBar } from "vant";

Vue.use(NoticeBar);
export default {
  data() {
    return {
      text:
        "今天真是一个好天气啊!勇哥在家有学习了一天,疫情期间又不好出去和朋友们愉快的玩耍。"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>