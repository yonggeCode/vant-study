<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>通过title属性显示标题占位图，通过row属性配置占位段落行数</h5>
      <van-skeleton title :row="3" />
      <h5>通过avatar属性显示头像占位图</h5>
      <van-skeleton title avatar :row="3" />
    </div>
    <div class="block">
      <div class="h5"></div>
      <van-switch v-model="loading"  size="25"/>
      <van-skeleton title avatar :row="3" :loading="show">
        <div class="demo-preview">
          <img src="https://img.yzcdn.cn/vant/logo.png" />
          <div class="demo-content">
            <h3>关于 Vant</h3>
            <p>Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</p>
          </div>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Skeleton,Switch } from "vant";

Vue.use(Skeleton);
Vue.use(Switch);

export default {
  data() {
    return {
      loading: false
    };
  },
  computed:{
    show(){
      return !this.loading
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    padding: 0 16px;
}
 .demo-preview img {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-right: 16px;
}
.demo-content h3 {
    margin: 0;
    font-size: 18px;
    line-height: 20px;
    color: #333;
    text-align: left;
}
.demo-preview .demo-content p {
    margin: 13px 0 0;
    font-size: 14px;
    line-height: 25px;
}
.container{
  background: none;
}
</style>