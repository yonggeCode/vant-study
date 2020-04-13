<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>通过icon属性设置格子内的图标，text属性设置文字内容</h5>
      <h5>column-num控制列数，有点像栅格，还是基于flex布局实现的</h5>
      <van-grid :column-num="3">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
    <div class="block">
      <h4>自定义内容</h4>
      <h5>通过插槽可以自定义格子展示的内容</h5>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
      </van-grid>
    </div>

    <div class="block">
      <h5>设置square属性后，格子的高度会和宽度保持一致</h5>
      <h5>通过gutter属性设置格子之间的距离</h5>
      <van-grid square :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
      </van-grid>
    </div>

    <div class="block">
      <h5>通过to属性设置vue-router跳转链接，通过url属性设置 URL 跳转链接</h5>
      <h5>设置dot属性后，会在图标右上角展示一个小红点。设置badge属性后，会在图标右上角展示相应的徽标</h5>
      <van-grid clickable :column-num="2">
        <van-grid-item icon="home-o" text="首页" to="/" dot/>
        <van-grid-item icon="search" text="URL 官方实例跳转" url="https://youzan.github.io/vant/mobile.html" />
      </van-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem, Image } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);

export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>