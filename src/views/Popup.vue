<template>
  <div class="container">
    <div class="block">
      <van-cell is-link @click="showPopup(1)">展示弹出层</van-cell>
      <van-popup v-model="show1">内容</van-popup>
    </div>

    <div class="block">
      <h1>弹出位置</h1>
      <h4>通过position属性设置弹出位置，默认居中弹出，可以设置为top、bottom、left、right</h4>
      <van-cell is-link @click="showPopup(2)">展示弹出层</van-cell>
      <van-popup v-model="show2" position="top" :style="{ height: '30%' }" v-text="text" />
    </div>

    <div class="block">
      <h1>关闭图标</h1>
      <h4>设置closeable属性后，会在弹出层的右上角显示关闭图标，并且可以通过close-icon属性自定义图标，使用close-icon-position属性可以自定义图标位置</h4>
      <van-cell is-link @click="showPopup(3)">展示弹出层</van-cell>
      <van-popup
        v-model="show3"
        closeable
        close-icon="close"
        close-icon-position="top-left"
        position="bottom"
        :style="{ height: '30%' }"
      />
    </div>

    <div class="block">
      <h1>圆角弹窗</h1>
      <h4>设置round属性后，弹窗会根据弹出位置添加不同的圆角样式</h4>
      <van-cell is-link @click="showPopup(3)">展示弹出层</van-cell>
      <van-popup v-model="show" round position="bottom" overlay=false :style="{ height: '30%' }" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);

export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      text: "这是内容"
    };
  },
  methods: {
    showPopup(type) {
      this["show" + type] = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  text-align: center;
}
</style>