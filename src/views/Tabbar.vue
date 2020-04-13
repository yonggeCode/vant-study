<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>v-model默认绑定选中标签的索引值，通过修改v-model即可切换选中的标签</h5>
      <h5>设置dot属性后，会在图标右上角展示一个小红点。设置badge属性后，会在图标右上角展示相应的徽标</h5>
      <h5 style="color:red">会默认固定在底部</h5>
      <van-tabbar v-model="active" style="position:none" :fixed="false">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search" badge="20">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o" dot>标签</van-tabbar-item>
      </van-tabbar>

      <h5>在标签指定name属性的情况下，v-model的值为当前标签的name</h5>
      <h5>active-color设置选择标签颜色,inactive-color设置为选择标签的颜色</h5>
      <van-tabbar
        v-model="active2"
        active-color="#07c160"
        inactive-color="#000"
        :fixed="false"
        @change="onChange"
      >
        <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>

      <h5>通过van-tabbar-item内的 icon 插槽自定义图标，可以通过 slot-scope 判断标签是否选中</h5>
      <van-tabbar v-model="active3" :fixed="false">
        <van-tabbar-item badge="3">
          <span>自定义</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>

      <div class="block">
        <h4>路由模式</h4>
        <h5>标签栏支持路由模式,van-tabbar添加route属性，用于搭配vue-router使用。路由模式下会匹配页面路径和标签的to属性，并自动选中对应的标签</h5>
        <h5>replace设置是否是否在跳转时替换当前页面历史(没感觉到区别)</h5>
        <van-tabbar route>
          <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item replace to="/Search" icon="search">Search组件</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Notify } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Notify);

export default {
  data() {
    return {
      active: 0,
      active2: "home",
      active3: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  methods: {
    onChange(index) {
      Notify({ type: "primary", message: index });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>