<template>
  <div class="container">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="item in data" :key="item.id" :title="item.tagName" />
    </van-sidebar>
    <van-card
      :num="showCard.itemNum"
      :price="showCard.itemPrice"
      :desc="showCard.itemDesc"
      :title="showCard.itemTitle"
      :thumb="showCard.itemImage"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Sidebar, SidebarItem, Card } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Card);

export default {
  props:['data'],
  data() {
    return {
      activeKey: 0
    };
  },
  computed:{
    showCard(){
      return this.data[this.activeKey]
    }
  }
};
</script>
<style lang="scss" scoped>
.container{
  display: flex;
}
.container::v-deep .van-card{
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
}
</style>

