<template>
  <div class="container">
    <h3>鸡肋，官方自己都没啥说明介绍</h3>
    <div class="block">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <h5>通过插槽自定义导航栏两侧的内容</h5>
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast } from "vant";

Vue.use(NavBar);
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>