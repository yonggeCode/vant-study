<template>
  <div class="contianer">
    <h4>通过插槽能够在遮罩层内加任何内容</h4>
    <van-button type="primary" text="显示遮罩层" @click="show = true" />
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block"  @click.stop/>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from "vue";
import { Overlay, Button } from "vant";

Vue.use(Overlay);
Vue.use(Button);

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>