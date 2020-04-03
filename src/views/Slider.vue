<template>
  <div class="contianer">
    <div class="block">
      <h4>基本用法</h4>
      <h5>min与max制定选择范围，默认值分别为0/100</h5>
      <h5>step指定步长</h5>
      <h5>bar-heigh整个线的宽带</h5>
      <h5>active-color已包含部分的线的颜色</h5>
      <h5>通过插槽自定义按钮</h5>
      <van-slider 
      v-model="value" 
      :min="-50" 
      :max="50"
      :step="10"
      bar-height="4px"
      active-color="#ee0a24"
      @change="onChange" >
      </van-slider>
    </div>

    <div class="block">
      <h5>通过插槽自定义按钮</h5>
      <van-slider 
      v-model="value2" 
      active-color="#ee0a24"
      @change="onChange" >
      <template #button>
        <div class="custom-button">{{value2}}</div>
      </template>
      </van-slider>
    </div>

    <div class="block" style="height:100px;">
      <h5>vertical竖直展示</h5>
      <h5>active-color进度条激活态颜色</h5>
      <h5>inactive-进度条非激活态颜色</h5>
      <van-slider style="margin-left:20px" 
      v-model="value3" 
      vertical active-color="#e5e5e5" 
      inactive-color="#1989fa"
      @change="onChange2"/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Slider, Toast } from "vant";

Vue.use(Slider);
Vue.use(Toast);

export default {
  data() {
    return {
      value: 0,
      value2: 50,
      value3: 50,
    };
  },
  methods: {
    onChange(value) {
      Toast('当前值：' + value);
    },
    onChange2(value){
      Toast('当前值：' + (100-value));
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
</style>