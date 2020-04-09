<template>
  <div class="container">
    <div class="block">
      <h4>基本功能</h4>
      <h5>以函数的形式之间调用ImagePreview函数既可以预览</h5>
      <van-button type="primary" @click="showimage">查看图片</van-button>
    </div>

    <div class="block">
      <h5>引入组件</h5>
      <van-button type="info" @click="showimage2">查看图片</van-button>
      <van-image-preview v-model="show" :images="images" @change="onChange" />
    </div>

    <div class="block">
      <h5>配合image组件来使用</h5>
      <div class="imgaeBox">
        <van-image width="100" height="100" :src="item" @click="showimage3(index)" v-for="(item,index) in images" :key="index"/>
      </div>
      <van-image-preview v-model="show3" :images="images" @change="onChange" :start-position="nowIndex" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ImagePreview, Button,Image } from "vant";

Vue.use(ImagePreview);
Vue.use(Button);
Vue.use(Image);


export default {
  data() {
    return {
      show: false,
      show3:false,
      nowIndex:0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/2.jpg"
      ]
    };
  },
  created() {},
  methods: {
    showimage() {
      ImagePreview({
        images: this.images,
        startPosition: 1, //图片预览起始位置索引
        swipeDuration: 300, //动画时长，单位为ms
        showIndex: true, //是否显示页码
        showIndicators: true, //否显示轮播指示器
        loop: true, //是否循环播放
        onClose(value) {
          //关闭预览时触发
          console.log("close", value);
        },
        onChange(value) {
          //切换图片时触发
          console.log("cahnge", value);
        },
        onScale(value) {
          //缩放图片时触发
          console.log("scale", value);
        },
        asyncClose: false //是否开启异步关闭
      });
    },
    showimage2() {
      this.show = true;
    },
    showimage3(index){
      this.nowIndex = index;
      this.show3 = true;
    },
    onChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.imgaeBox{
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items:center;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0;
  place-items: center center;
}
</style>