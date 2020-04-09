<template>
  <div class="container">
    <h4>通过V-lazy指令来设置懒加载图篇</h4>
    <div class="block" v-for="(img,index) in imageList" :key="index">
      <img width="100" height="100" v-lazy="img" >
      <div style="width:100vw;height:120vh"></div>
    </div>
    <h4>和图片懒加载不同，背景图懒加载需要使用v-lazy:background-image，值设置为背景图片的地址，需要注意的是必须声明容器高度。</h4>
    <div style="width:100px;height:100px;background-size:100% 100%" v-lazy:background-image="imgBg" />
    <h4>将需要懒加载的组件放在lazy-component标签中，即可实现组件懒加载。</h4>
    <h4>经测试好像不太行，不知道是不是没有引入vue-lazyload 的原因，如果需要手动引入配置，倒不如之间用Vue-lazyload</h4>
    <lazy-component>
      <mbutton/>
    </lazy-component>
  </div>
</template>

<script>
import mbutton from "@/views/Button"
// Lazyload 是 Vue 指令，使用前需要对指令进行注册
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);


// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true  //组件懒加载
});
export default {
  data(){
    return{
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      imgBg:"https://img.yzcdn.cn/vant/apple-5.jpg"
    }
  },
  components:{
    mbutton
  }
}
</script>

<style lang="scss" scoped>

</style>