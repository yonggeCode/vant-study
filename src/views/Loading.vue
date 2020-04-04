<template>
  <div class="container">
    <div class="block">
      <h4>加载类型</h4>
      <h5>通过type属性可以设置加载图标的类型，默认为circular，可选值为spinner</h5>
      <van-loading />
      <van-loading type="spinner" />
    </div>
    <div class="block">
      <h4>自定义颜色</h4>
      <h5>通过color属性设置加载图标的颜色</h5>
      <van-loading color="#1989fa" />
      <van-loading type="spinner" color="#1989fa" />
    </div>
    <div class="block">
      <h4>自定义大小</h4>
      <h5>通过size属性设置加载图标的大小，默认单位为px,默认大小30px</h5>
      <van-loading size="24" color="#1989fa"/>
      <van-loading type="spinner" size="24px" color="#1989fa"/>
    </div>
    <div class="block">
      <h4>加载文案</h4>
      <h5>可以使用默认插槽在图标的右侧插入加载文案</h5>
      <van-loading size="24px" color="#1989fa">加载中...</van-loading>
      <h5>设置vertical属性后，图标和文案会垂直排列</h5>
      <van-loading size="24px" color="#1989fa" vertical>加载中...</van-loading>

    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Loading } from "vant";

Vue.use(Loading);
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.block{
  text-align: center;
}
</style>