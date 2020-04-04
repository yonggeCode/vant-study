<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>默认value对应对应的text</h5>
      <h5>通过active-color属性可以自定义菜单标题和选项的选中态颜色</h5>
      <h5>将direction属性值设置为up，菜单即可向上展开(需要保证有足够的空间)</h5>
      <van-dropdown-menu active-color="#ee0a24" direction="down">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="block">
      <h4>自定义选项值</h4>
      <h5>通过插槽可以自定义DropdownItem的内容，此时需要使用实例上的toggle方法手动控制菜单的显示</h5>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item title="筛选" ref="item">
          <van-switch-cell v-model="switch1" title="包邮" />
          <van-switch-cell v-model="switch2" title="团购" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem,SwitchCell,Button } from "vant";

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(SwitchCell);
Vue.use(Button);

export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>