<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>active属性表示当前步骤的索引，从 0 起计</h5>
      <van-steps :active="active">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
      <h5>可以通过active-icon和active-color属性设置激活状态下的图标和颜色</h5>
      <van-steps :active="active" active-icon="success" active-color="#38f">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
      <h5>可以通过设置direction属性来改变步骤条的显示方向</h5>
      <van-steps direction="vertical" :active="0">
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Step, Steps } from "vant";

Vue.use(Step);
Vue.use(Steps);
export default {
  data() {
    return {
      active: 1
    };
  }
};
</script>

<style lang="scss" scoped>
h3{
  text-align: left;
  color: #333;
}
</style>