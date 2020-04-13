<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>通过v-model来绑定当前选择项的索引</h5>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
      <h4>微标提示</h4>
      <h5>设置dot属性后，会在右上角展示一个小红点。设置badge属性后，会在右上角展示相应的徽标</h5>
      <h5>通过disabled属性禁用选项</h5>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" dot />
        <van-sidebar-item title="标签名称" badge="5" />
        <van-sidebar-item title="标签名称" badge="99+" />
      </van-sidebar>
    </div>
    <div class="block">
      <h4>监听切换事件</h4>
      <h5>设置change方法来监听切换导航项时的事件</h5>
      <van-sidebar v-model="activeKey1" @change="onChange">
        <van-sidebar-item title="标签名1" />
        <van-sidebar-item title="标签名2" />
        <van-sidebar-item title="标签名3" />
      </van-sidebar>
    </div>

    <h5>通过card和sideBar自制一个选择成像的效果</h5>
    <card-show :data="data"/>
  </div>
</template>

<script>
import CardShow from "@/components/CardShow"
import Vue from "vue";
import { Sidebar, SidebarItem ,Notify } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  data() {
    return {
      activeKey: 0,
      activeKey1: 0,
      data:[
        {
          tagName:'ipad',
          itemNum:'2',
          itemPrice:'2000.00',
          itemDesc:'最便宜的pad',
          itemTitle:'苹果ipad',
          itemImage:'https://img.yzcdn.cn/vant/ipad.jpeg',
          id:'0'
        },
        {
          tagName:'iphone',
          itemNum:'200',
          itemPrice:'1000.00',
          itemDesc:'这是苹果手机',
          itemTitle:'苹果手机',
          itemImage:'https://img.yzcdn.cn/vant/apple-1.jpg',
          id:'1'
        },
        {
          tagName:'ipad Mac',
          itemNum:'20',
          itemPrice:'20000.00',
          itemDesc:'这是苹果电脑',
          itemTitle:'苹果电脑',
          itemImage:'https://img.yzcdn.cn/vant/apple-2.jpg',
          id:'2'
        },
          
        ]
    };
  },
   methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    }
  },
  components:{
    CardShow
  }
};
</script>

<style lang="scss" scoped>
</style>