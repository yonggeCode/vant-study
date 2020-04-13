<template>
  <div class="container">
    <div class="block">
      <h4>单选模式</h4>
      <h5>main-active-index表示左侧高亮选项的索引，active-id表示右侧高亮选项的 id</h5>
      <h5>activeId值与item中的id行程对应</h5>
      <h5>item的的结构如果不使用插槽,必须符合默认的格式才会起作用</h5>
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        @click-item="clickItem"
      />
      <h5>active-id为数组格式时，可以选中多个右侧选项</h5>
      <van-tree-select
        :items="items"
        :active-id.sync="activeId2"
        :main-active-index.sync="activeIndex2"
        @click-item="clickItem"
      />
      <h5>通过content插槽可以自定义右侧区域的内容</h5>
      <van-tree-select height="55vw" :items="items2" :main-active-index.sync="active">
        <template #content>
          <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { TreeSelect,Image } from "vant";

Vue.use(TreeSelect);
Vue.use(Image);

export default {
  data() {
    return {
      items: [
        {
          // 导航名称
          text: "浙江",

          // 是否在导航名称右上角显示小红点
          dot: true,
          // 导航节点额外类名
          className: "my-class",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识符
              id: 1
            },
            {
              text: "杭州",
              id: 2
            },
            {
              text: "义乌",
              id: 3
            },
            {
              text: "宁波",
              id: 4,
              // 禁用选项
              disabled: true
            }
          ]
        },
        {
          text: "江苏",
          // 导航名称右上角徽标，2.5.6 版本开始支持
          badge: 3,
          children: [
            {
              text: "南京",
              id: 5
            },
            {
              text: "无锡",
              id: 6
            },
            {
              text: "徐州",
              id: 7
            },
            {
              text: "苏州",
              id: 8
            }
          ]
        },
        {
          text: "福建",
          disabled: true
        }
      ],
      activeId: 1,
      activeIndex: 0,
      activeId2: [1, 2],
      activeIndex2: 0,
      active: 0,
      items2: [{ text: '分组 1' }, { text: '分组 2' }]
    };
  },
  methods: {
    clickItem(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>