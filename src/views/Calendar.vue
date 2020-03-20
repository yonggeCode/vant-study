<template>
    <div class="contianer">
        <van-cell title="选择单个日期" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm" />
    </div>
</template>

<script>
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
export default {
     data() {
    return {
      date: '',
      show: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }
  }
}
</script>

<style lang="scss" scoped>
    
</style>