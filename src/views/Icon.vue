<template>
  <div class="main">
    <h1>Icon</h1>
    <div class="block">
      <van-icon name="close" />
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
    </div>
    <h1>dot info size</h1>
    <div class="block">
      <van-icon name="chat" dot  size="50px"/>
      <van-icon name="chat" info="9"  size="50px"/>
      <van-icon name="chat" info="99+"  size="50px"/>
    </div>
    <h1>color</h1>
    <div class="block">
        <van-icon name="chat" color="red" size="50px"/>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
import Vue from "vue";
Vue.use(Icon);
export default {

};
</script>

