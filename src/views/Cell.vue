<template>
  <div class="main">
    <div>
      <h1>cell</h1>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </div>

    <div>
      <h1>cell与CellGroup</h1>
      <h4>group加了上下线</h4>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
    </div> 
    <div>
      <h1>size</h1>
      <van-cell title="单元格" value="内容" size="large"/>
      <van-cell title="单元格" value="内容" label="描述信息" />
    </div>
    <div>
      <h1>icon</h1>
      <van-cell title="单元格" icon="location-o" value="内容"/>
    </div>
    <div>
      <h1>only value</h1>
      <h4>内容默认左对齐</h4>
      <van-cell value="内容" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);

export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
