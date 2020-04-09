<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <van-divider>文字</van-divider>
      <van-divider content-position="left">文字</van-divider>
      <van-divider content-position="right">文字</van-divider>
      <h5>实现一个水平线</h5>
      <h5>思路，利用after、before和flex布局撑开两边</h5>
      <div class="line">文字</div>
      <div class="line left">文字</div>
      <div class="line right">文字</div>

    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";

Vue.use(Divider);
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.line {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  margin: 16px 0;
  color: #969799;
  font-size: 14px;
  line-height: 24px;
  border-color: red;
  border-style: solid;
  border-width: 0;
}

.line::before, .line::after{
  content: "";
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  box-sizing: border-box;
  height: 1px;
  border-color: inherit;
  border-style: inherit;
  border-width: 1px 0 0;
  transform: scaleY(.5);
}
.line::before{
  margin-right: 16px;
}
.line::after{
  margin-left: 16px;
}

.line.right::before{
  flex: 7;
}
.line.left::after{
  flex: 7;
}

</style>