<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>将内容包裹在Sticky组件内即可</h5>
      <van-sticky>
        <van-button type="primary">基础用法</van-button>
      </van-sticky>
      <h5>通过offset-top属性可以设置组件在吸顶时与顶部的距离</h5>
      <h5>如果要给具体的位置，最好用margin，竖直方向上用offset-top控制</h5>
      <van-sticky :offset-top="50">
        <van-button style="margin-left:100px" type="info">吸顶距离</van-button>
      </van-sticky>
    </div>

    <div class="block">
      <h4>指定容器，局部吸顶</h4>chao
      <h5>通过container属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部</h5>
      <h5>即容器超出视图范围，粘性组件会固定在容器的底部和容器一起滚出视图范围</h5>
      <div class="box" ref="container" style="height: 150px;">
        <van-sticky :container="container">
          <van-button style="margin-left:200px" type="warning">指定容器</van-button>
        </van-sticky>
      </div>
    </div>
    
    <!-- <div class="block">
      <h4>根据position: sticky属性自己写一个吸顶</h4>
      <div class="sticky">
        我的吸顶
      </div>
    </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Sticky, Button } from "vant";

Vue.use(Sticky);
Vue.use(Button);

export default {
  data() {
    return{
      container: null
    }
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 200%;
  overflow: visible;
}
.box{
  background: #12306f;
}
.block{
  overflow: visible;

}
.sticky{
  position: sticky;
  top: 30px;
  text-align: right;
}
</style>