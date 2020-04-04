<template>
  <div class="container">
    <div class="block">
      <h4>dialog弹窗如果不需要自定义，使用默认的样式可以通过Dialog方法或是Vue实例上的$dialog</h4>
      <h5>引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，在所有组件内部都可以直接调用此方法</h5>
      <van-button type="primary" @click="onAlert">alert</van-button>
      <van-button type="info" @click="onConfirm">alert</van-button>
    </div>
    <div class="block">
      <h4>自定义弹出框</h4>
      <van-button type="info" @click="onClick">自定义</van-button>
      <van-dialog v-model="show" 
      title="标题"
      confirmButtonText="我确定" 
      confirmButtonColor="#1234f6"
      cancelButtonText="我不确定"
      cancelButtonColor="#123066"
      overlayClass="myoverlay"
      show-cancel-button>
        <div class="flex"> 
        <img style="width:50px" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span>这是内容</span>
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog, Button, Popup } from "vant";
Vue.use(Button);
// 这里use之后才会在vue对象上注入$dialog
Vue.use(Dialog);

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    onAlert() {
      console.log(this.$dialog);
      this.$dialog({
        title: "标题",
        message: "这是内容"
      }).then(val => {
        console.log(val);
      });
    },
    onConfirm() {
      Dialog.confirm({
        title: "标题",
        message: "弹窗内容"
      })
        .then(val => {
          // on confirm
          console.log(val);
        })
        .catch(val => {
          // on cancel
          console.log(val);
        });
    },
    onClick(){
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.block::v-deep .myoverlay{
  background-color: rgba($color: #f4f, $alpha: .4);
}
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>