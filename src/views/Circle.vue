<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>rate属性表示进度条的目标进度，v-model表示动画过程中的实时进度。当rate发生变化时，v-model会以speed的速度变化，直至达到rate设定的值。</h5>
      <h5>stroke-width</h5>
      <van-circle
        style="margin:1rem"
        v-model="currentRate"
        :rate="rate"
        :speed="100"
        :text="text"
        :stroke-width="60"
      />
      <h5>通过color属性来控制进度条颜色，layer-color属性来控制轨道颜色</h5>
      <h5>color属性支持传入对象格式来定义渐变色</h5>
      <h5>size通过size属性设置圆环直径</h5>
      <h5>将clockwise设置为false，进度会从逆时针方向开始</h5>
      <van-circle v-model="currentRate" :rate="rate" :color="gradientColor" text="渐变色" size="150px" :clockwise="false"/>
    </div>
    <van-button type="primary" @click="reduce">减少</van-button>
    <van-button type="info" @click="add">增加</van-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Circle,Button } from "vant";
Vue.use(Circle);
Vue.use(Button);

export default {
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      },
      rate:30
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  methods:{
    add(){
      if(this.rate >= 100) return;
      this.rate += 10; 
    },
    reduce(){
      if(this.rate <= 0) return;
      this.rate -= 10; 
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>