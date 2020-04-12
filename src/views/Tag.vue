<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>通过type属性控制标签颜色，默认为灰色</h5>
      <van-tag>标签</van-tag>
      <h5>通过round设置为圆角样式</h5>
      <van-tag type="primary" round>标签</van-tag>
      <h5>通过mark设置为标记样式(半圆角)</h5>
      <van-tag type="success" mark>标签</van-tag>
      <h5>设置plain属性设置为空心样式</h5>
      <van-tag type="danger" plain>标签</van-tag>
      <h5>通过size设置标签大小可选值为large medium</h5>
      <van-tag type="warning" size="medium">标签</van-tag>
      <van-tag type="warning" size="large">标签</van-tag>
      <h5>color设置背景颜色 text-color设置字体颜色</h5>
      <van-tag color="#ffe1e1" text-color="#ad0000"  size="medium">标签</van-tag>
    </div>
    <div class="block">
      <h4>可关闭标签</h4>
      <h5>添加closeable属性表示标签是可关闭的，关闭标签时会触发close事件，在close事件中可以执行隐藏标签的逻辑</h5>
      <van-tag v-show="show" type="primary" size="medium" round closeable @close="onClose">标签</van-tag>
      <br>
      <van-button type='info' style="margin-top:10px" round  size="small" @click="onClick">复位</van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tag,Button } from "vant";

Vue.use(Tag);
Vue.use(Button);

export default {
  data() {
    return {
      show:true
    };
  },
  methods:{
    onClose(){
      this.show = false;
    },
    onClick(){
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.block{
  text-align: center;
}
</style>