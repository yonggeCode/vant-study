<template>
  <div class="containe">
    <van-cell title="选择多个日期" :value="text" @click="show = true" />
    <van-calendar v-model="show" type="multiple" @confirm="onConfirm"/>
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
      text: "",
      show: false
    };
  },
  methods: {
    onConfirm(date) {
      this.show = false;
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