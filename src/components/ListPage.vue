<template>
  <div class="container">
    <van-cell-group>
      <van-cell v-for="item in showData" :key="item" title="标题" value="内容" :label="'当前索引' + item" />
    </van-cell-group>
    <van-pagination
      v-model="currentPage"
      :total-items="data.length"
      :show-page-size="3"
      force-ellipses
      :items-per-page="pageItemNum"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Pagination, List, Cell, CellGroup } from "vant";

Vue.use(Pagination);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);

export default {
  props: ["data"],
  data() {
    return {
      currentPage: 1,
      pageItemNum: 5
    };
  },
  computed:{
    showData(nowindex){
      return this.data.slice( this.currentPage * this.pageItemNum - this.pageItemNum , this.currentPage * this.pageItemNum )
    }
  }
};
</script>

<style lang="scss" scoped>
</style>