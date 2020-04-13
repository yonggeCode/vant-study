<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>total-items设置总信息数目，items-per-page设置每一页展示多少条，默认是10</h5>
      <van-pagination v-model="currentPage1" :total-items="24" :items-per-page="5" />
      <h5>显示省略号</h5>
      <h5>force-ellipses控制是否显示省略号，</h5>
      <van-pagination v-model="currentPage2" :total-items="125"  :items-per-page="5"  :show-page-size="3" force-ellipses />
      <h4>简单模式</h4>
      <h5>mode设置为simple</h5>
      <van-pagination v-model="currentPage3" :page-count="12" mode="simple" />
      <h5>根据cell与Pagination自制一个翻译组件</h5>
      <list-page :data="data"/>
    </div>
  </div>
</template>

<script>
import ListPage from "@/components/ListPage"
import Vue from "vue";
import { Pagination } from "vant";

Vue.use(Pagination);
export default {
  data() {
    return {
      currentPage: 1,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    };
  },
  components:{
    ListPage
  }
};
</script>

<style lang="scss" scoped>
</style>