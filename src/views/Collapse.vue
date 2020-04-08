<template>
  <div class="container">
    <div class="block">
      <h4>基础功能</h4>
      <h5>van-collapse表示折叠版容器，van-collapse-item 表示里面的每一项内容</h5>
      <h5>activeNames绑定展示内容的数组，值与item的name对应</h5>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="标题1" name="1">内容1</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容2</van-collapse-item>
        <van-collapse-item title="标题3" name="3" disabled>内容3</van-collapse-item>
      </van-collapse>
    </div>

    <div class="block">
      <h4>手风琴</h4>
      <h5>通过accordion可以设置为手风琴模式，最多展开一个面板，此时activeName为字符串格式</h5>
      <van-collapse v-model="activeName2" accordion>
        <van-collapse-item title="标题1" name="1">内容1</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容2</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容3</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Collapse, CollapseItem } from "vant";

Vue.use(Collapse);
Vue.use(CollapseItem);
export default {
  data() {
    return {
      activeNames: ["1"],
      activeName2:'1'
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
}
</style>