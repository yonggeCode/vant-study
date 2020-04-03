<template>
  <div class="contianer">
    <div class="block">
      <h4>基础用法</h4>
      <h5>step设置步长</h5>
      <h5>通过min和max属性限制输入值的范围</h5>
      <h5>步进器内的值不能小于0</h5>
      <h5>通过设置decimal-length属性可以保留固定的小数位数</h5>
      <van-stepper
        v-model="value"
        min="0"
        max="20"
        step=".1"
        decimal-length="2"
        @change="onChange"
      />
      <h5>设置integer属性后，输入框将限制只能输入整数</h5>
      <h5>step值会被向下取整</h5>
      <h5>通过设置disable-input属性来禁用输入框，此时按钮仍然可以点击，不可直接输入</h5>
      <van-stepper v-model="value1" step="1.2" integer disable-input />
    </div>

    <div class="block">
			<h5>如果需要异步地修改输入框的值，可以设置async-change属性，并在change事件中手动修改value</h5>
      <van-stepper :value="value2" async-change @change="onChange2" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Stepper, Toast } from "vant";

Vue.use(Stepper);
Vue.use(Toast);

export default {
  data() {
    return {
      value: 0,
			value1: 0,
			value2:0
    };
  },
  methods: {
    onChange(value) {
      Toast(value);
		},
		onChange2(value) {
			console.log(value)
			if(this.value2 == value) return
      Toast.loading({ forbidClick: true });
      setTimeout(() => {
        Toast.clear();

        // 注意此时修改 value 后会再次触发 change 事件
        this.value2 = value;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>