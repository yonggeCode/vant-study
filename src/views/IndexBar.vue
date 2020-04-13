<template>
  <div class="container">
    <div class="block">
      <h5>点击索引栏时，会自动跳转到对应的IndexAnchor锚点位置,用的不是a标签的锚点定位，位置应该是计算出来的</h5>
      <h5>要注意一点，默认的索引是[A-Z], van-index-anchor必须绑定对应的[A-Z]的值，点击索引才能跳转</h5>
      <h5>可以通过index-list属性自定义展示的索引字符列表，van-index-anchor的index需要按照新的索引符匹配才能跳转</h5>
      <van-index-bar :index-list="data">
        <div v-for="item in data" :key="item">
          <van-index-anchor :index=item />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
  data() {
    return {
      data: [
        "123",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>