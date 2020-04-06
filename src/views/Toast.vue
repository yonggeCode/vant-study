<template>
  <div class="contianer">
    <div class="block">
      <h4>this上绑定了$toast方法</h4>
      <h5>duration展示时长(ms),默认2000ms。为0表示不会消失，需要手动调用Toast.clear()</h5>
      <van-button type="info" @click="onDefault">默认轻提示</van-button>
    </div>
    <div class="block">
      <h4>加载提示</h4>
      <h5>使用Toast.loading方法展示加载提示，通过forbidClick属性可以禁用背景点击，通过loadingType属性可以自定义加载图标类型。</h5>
      <van-button type="info" @click="onLoading">加载提示</van-button>
      <h5>内置默认成功与失败的提示</h5>
      <van-button type="primary" @click="onSuccess">成功</van-button>
      <van-button type="info" @click="onFail">失败</van-button>

    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast, Button } from "vant";

Vue.use(Toast);
Vue.use(Button);

export default {
  data() {
    return {};
  },
  methods: {
    onDefault() {
      console.log(this.$toast);
      Toast("提示内容");
    },
    onLoading() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner"
      });
    },
    onSuccess(){
      Toast.success('成功文案');
    },
    onFail(){
      Toast.fail('成功文案');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>