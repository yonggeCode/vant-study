<template>
  <div class="container">
    <div class="block">
      <h4>基本用法</h4>
      <h5>format会提取对应的关键字替换成对应的计数</h5>
      <h5>DD替换天计数/>HH替换小时计数/>mm替换分钟计数/>ss替换秒计数/>SSS替换毫秒计数/</h5>
      <van-count-down millisecond :time="time" format="DD天 HH：mm：ss" />
      <h5>millisecond可以开启毫秒级渲染</h5>
      <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    </div>
    <div class="block">
      <h4>自定义样式</h4>
      <h5>通过插槽自定义倒计时的样式</h5>
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </div>

    <div class="block">
      <h4>手动控制</h4>
      <h5>通过 ref 获取到组件实例后，可以调用start、pause、reset方法</h5>
      <van-count-down
        ref="countDown"
        millisecond
        time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="finish"
      />
      <van-grid clickable>
        <van-grid-item text="开始" icon="play-circle-o" @click="start" />
        <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
        <van-grid-item text="重置" icon="replay" @click="reset" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { CountDown, Toast, Grid, GridItem } from "vant";

Vue.use(CountDown);
Vue.use(Toast);
Vue.use(Grid);
Vue.use(GridItem);

export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },
  methods: {
    start() {
      console.log(this);
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      Toast("倒计时结束");
    }
  }
};
</script>

<style scoped>
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>