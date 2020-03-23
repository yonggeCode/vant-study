<template>
  <div class="containe">
    <div class="block">
      <h4>选择单个日期</h4>
      <van-cell title="选择单个日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" />
    </div>
    <div class="block">
      <h4>选择日期区间</h4>
      <van-cell title="选择日期区间" :value="date2" @click="show2 = true" />
      <van-calendar v-model="show2" type="range" @confirm="onConfirm2" />
    </div>
    <div class="block">
      <h4>选择多个日期</h4>
      <van-cell title="选择多个日期" :value="text" @click="show3 = true" />
      <van-calendar v-model="show3" type="multiple" @confirm="onConfirm3" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Calendar, Cell } from "vant";

Vue.use(Calendar);
Vue.use(Cell);
export default {
  data() {
    return {
      date: "请选择",
      show: false,
      date2: "请选择",
      show2: false,
      text: "",
      show3: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    formatDate2(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm2(date) {
      const [start, end] = date;
      console.log(date)
      this.show2 = false;
      this.date2 = `${this.formatDate2(start)} - ${this.formatDate2(end)}`;
    },
    onConfirm3(date) {
      this.show3 = false;
      this.text = `选择了 ${date.length} 个日期`;
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
}
</style>