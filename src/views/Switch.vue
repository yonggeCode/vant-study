<template>
  <div class="contianer">
    <div class="block">
      <h4>基础用法</h4>；
      <h5>通过v-model绑定开关的选中状态，true表示开，false表示关</h5>
      <h5>通过size属性自定义开关的大小</h5>
      <h5>active-color属性表示打开时的背景色，inactive-color表示关闭时的背景色</h5>
      <van-switch v-model="checked" size="24px" active-color="#07c160" inactive-color="#ee0a24" />
    </div>

    <div class="block">
      <h4>加载状态</h4>
      <h5>通过loading属性设置开关为加载状态，加载状态下开关不可点击</h5>
      <van-switch v-model="checked2" :loading="loadingFlag" @change="onChange" />
    </div>

    <div class="block">
      <h4>异步控制</h4>
      <h5>需要异步控制开关时，可以使用value属性和input事件代替v-model，并在input事件回调函数中手动处理开关状态</h5>
      <van-switch :value="checked3" @input="onInput" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Switch,Dialog } from "vant";
Vue.use(Switch);
Vue.use(Dialog);

export default {
  data() {
    return {
      checked: true,
      loadingFlag: false,
      checked2: false,
      checked3: true
    };
  },
  methods: {
    onChange(val) {
      if (val) {
        this.loadingFlag = true;
        //异步事件
        setTimeout(() => {
          this.loadingFlag = false;
        }, 1500);
      }
    },
    onInput(checked) {
      Dialog.confirm({
        title: "提醒",
        message: "是否切换开关？"
      }).then(() => {
        this.checked3 = checked;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>