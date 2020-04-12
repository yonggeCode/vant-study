<template>
  <div class="container">
    <div class="block">
      <h5>每个 SwipeItem 代表一张轮播卡片，可以通过autoplay属性设置自动轮播的间隔</h5>
      <h5>indicator-color指示器颜色</h5>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item @click="onClick()">1</van-swipe-item>
        <van-swipe-item @click="onClick()">2</van-swipe-item>
        <van-swipe-item @click="onClick()">3</van-swipe-item>
        <van-swipe-item @click="onClick()">4</van-swipe-item>
      </van-swipe>
    </div>
    <h4>图片懒加载</h4>
    <h5>当 Swipe 中含有图片时，可以配合 Lazyload 组件实现图片懒加载</h5>
    <div class="block">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="width:100vw" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="block">
      <h4>竖直滚动</h4>
      <van-swipe
        class="my-swipe"
        style="height: 200px;"
        :autoplay="3000"
        indicator-color="white"
        vertical
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="block">
      <h4>自定义指示器</h4>
      <h5>通过indicator插槽可以自定义指示器的样式</h5>
      <van-swipe class="my-swipe" :autoplay="3000" @change="onChange2">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      current: 0
    };
  },
  methods: {
    onChange(index) {
      console.log(index);
    },
    onClick() {
      console.log("click");
    },
    onChange2(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.block::v-deep .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>