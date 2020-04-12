<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>进度条默认为蓝色，使用percentage属性来设置当前进度</h5>
      <h5>通过stroke-width可以设置进度条的粗细</h5>
      <van-progress :percentage="50" stroke-width="8" />
      <h5>设置inactive属性后进度条将置灰</h5>
      <van-progress inactive :percentage="50" />
      <h5>可以使用pivot-text属性自定义文字，color属性自定义进度条颜色</h5>

      <van-progress style="display:block" pivot-text="橙色" color="#f2826a" :percentage="25" />
      <br />
      <van-progress pivot-text="红色" color="#ee0a24" :percentage="50" />
      <br />
      <van-progress
        :percentage="75"
        pivot-text="紫色"
        pivot-color="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
      <h5>进度条自动推进</h5>
      <van-progress :percentage="num" stroke-width="8" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Progress } from "vant";

Vue.use(Progress);
export default {
  data() {
    return {
      num: "0.0"
    };
  },
  created() {
    // this.getNum(0)
    this.num = this.getNum(+this.num + 0.1);
    setInterval(() => {
      if (this.num == 100) this.num = 0;
      this.num = this.getNum(+this.num + 0.1);
    }, 100);
  },
  methods: {
    getNum(num) {
      const reg = /([0-9]+\.[0-9]{2})[0-9]*/;
      const result = Math.ceil(String(num).replace(reg, "$1") * 10) / 10 + "";
      return /([0-9]+\.[0-9]{1})[0-9]*/.test(result) ? result : result + ".0";
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
}
</style>