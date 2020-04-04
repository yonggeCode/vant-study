<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>配合cell，cellGroup使用。也可以和别的组件一起使用，看具体需求而定</h5>
      <h5>设置cancel-text属性后，会在底部展示取消按钮，点击后关闭当前菜单</h5>
      <h5>description会在选项上方显示描述信息</h5>
      <h5>title定义一个标题</h5>
      <van-cell-group>
        <van-cell title="基础用法" is-link @click="onClick" />
        <van-action-sheet 
          v-model="show" 
          :actions="actions"
          title="这是个标题"
          description="对这个上拉选择的描述" 
          cancel-text="点此取消"
          @select="onSelect" 
          />
      </van-cell-group>
    </div>

    <div class="block">
      <h4>选项状态</h4>
      <h5>在actions中配置选项的状态和颜色</h5>
      <h5>close-on-click-action 属性开启自动收起</h5>
      <h5>close-icon设置关闭图标，可以是个图片地址，要想显示关闭按钮必须要有title属性</h5>
      <van-cell-group>
        <van-cell title="选项状态" is-link @click="onClick2" />
        <van-action-sheet 
          v-model="show2"
          close-icon="tosend"
          title="标题"
          close-on-click-action 
          :actions="actions2"
          />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ActionSheet, Toast, Cell, CellGroup } from "vant";

Vue.use(ActionSheet);
Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);

export default {
  data() {
    return {
      show: false,
      actions: [
        { name: "选项1" },
        { name: "选项2" },
        { name: "选项3", subname: "描述信息" }
      ],
      show2: false,
      actions2: [
        { name: '选项', color: '#07c160' },
        { loading: true },
        { name: '禁用选项', disabled: true }
      ],
    };
  },
  methods: {
    onClick() {
      this.show = true;
    },
    onClick2() {
      this.show2 = true;
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
   
  }
};
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  min-height: 100%;
  background-color: #f5f5f5;
}
</style>