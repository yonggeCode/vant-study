<template>
  <div class="container">
    <div class="block">
      <van-rate v-model="value" />
    </div>
    <div class="block">
      <h5>icon选择时的图标，void-icon未选择时的图标</h5>
      <van-rate v-model="value" icon="like" void-icon="like-o" />
    </div>
    <div class="block">
			<h5>size图标的大小 color图标选择时的颜色void-color图标未选择时的颜色</h5>
      <h5> allow-half 允许半颗星评价</h5>
			<h5>count定义数量</h5>
			<van-rate v-model="value1" 
			allow-half 
			:count="6" 
			:size="25" 
			color="#ee0a24" 
			void-icon="star" 
			void-color="#eee" 
			@change="onChange"/>
    </div>

		<div class="block">
			<h4>禁用</h4>
      <van-rate v-model="value2" disabled />
    </div>
		<div class="block">
			<h4>只读</h4>
      <van-rate v-model="value2" readonly />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Rate,Toast } from "vant";

Vue.use(Rate);
Vue.use(Toast);

export default {
  data() {
    return {
			value: 3,
			value1: 3,
			value2: 3,
		};
	},
	methods:{
		onChange(value){
			Toast('当前值：'+ value)
		}
	}
};
</script>

<style lang="scss" scoped>
.block {
  text-align: center;
}
</style>