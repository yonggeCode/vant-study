<template>
  <div class="contianer">
    <div class="block">
      <h4>this上绑定了$notify方法</h4>
      <van-button @click="onDefault">默认红色</van-button>
    </div>

    <h4>四种类型</h4>
    <div class="block">
      <van-button type="info" @click="onprimary">primary</van-button>
      <van-button type="primary" @click="onsuccess">success</van-button>
      <van-button type="danger" @click="ondanger">danger</van-button>
      <van-button type="warning" @click="onwarning">warning</van-button>
    </div>
    <h4>自定义</h4>
    <div class="block">
      <van-button type="info" @click="onmy">primary</van-button>
    </div>
    <div>{{tips}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Notify, Button } from "vant";

Vue.use(Notify);
Vue.use(Button);

export default {
  data() {
    return {
      tips:''
    };
  },
  mounted() {
    Notify("通知内容");
  },
  methods: {
    onDefault() {
      console.log(this.$notify);
      Notify("通知内容");
    },
    onprimary() {
      Notify({ type: "primary", message: "通知内容" });
    },
    onsuccess() {
      Notify({ type: "success", message: "通知内容" });
    },
    ondanger() {
      Notify({ type: "danger", message: "通知内容" });
    },
    onwarning() {
      Notify({ type: "warning", message: "通知内容" });
    },
    onmy() {
      const that = this;
      Notify({
        message: "自定义,点击收起提示",
        color: "#ad0000",
        background: "#ffe1e1",
        onClick(){
          Notify.clear();
        },
        onOpened(){
          that.tips = '我已经提示你了';
        },
        onClose(){
          that.tips = '';
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>