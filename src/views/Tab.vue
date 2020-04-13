<template>
  <div class="container">
    <div class="block">
      <h4>基础用法</h4>
      <h5>通过v-model绑定当前激活标签对应的索引值，默认情况下启用第一个标签</h5>
      <h5>标签数量超过 4 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中</h5>
      <h5>可以在van-tabs上绑定click事件，事件传参为标签对应的索引和标题</h5>
      <h5>通过sticky属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶(容器内吸顶)</h5>
      <van-tabs v-model="active" @click="onClick" sticky>
        <van-tab v-for="item in 8" :title="'标签'+ item" :key="item">
          <div class="box">{{'内容' + item}}</div>
        </van-tab>
      </van-tabs>
      <h5>在标签指定name属性的情况下，v-model的值为当前标签的name（此时无法通过索引值来匹配标签）</h5>
      <h5>设置disabled属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在van-tabs上监听disabled事件</h5>
      <van-tabs v-model="activeName" @disabled="onClickDisabled">
        <van-tab title="标签 1" name="a">内容 1</van-tab>
        <van-tab title="标签 2" name="b" disabled>内容 2</van-tab>
        <van-tab title="标签 3" name="c">内容 3</van-tab>
      </van-tabs>
      <h5>Tab支持两种样式风格：line和card，默认为line样式，可以通过type属性修改样式风格</h5>
      <van-tabs type="card">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
    </div>
    <div class="block">
      <h4>自定义标签</h4>
      <h5>通过 title 插槽可以自定义标签内容</h5>
      <van-tabs v-model="active1">
        <van-tab v-for="index in 2" :key="index">
          <template #title>
            <van-icon name="more-o" />选项
          </template>
          内容 {{ index }}
        </van-tab>
      </van-tabs>
    </div>
    <div class="block">
      <h4>切换动画</h4>
      <h5>通过animated属性可以开启切换标签内容时的转场动画</h5>
      <van-tabs v-model="active2" animated>
        <van-tab v-for="index in 8" :title="'选项 ' + index" :key="index">内容 {{ index }}</van-tab>
      </van-tabs>
    </div>
    <div class="block">
      <van-tabs v-model="active3" scrollspy sticky>
        <van-tab v-for="index in 8" :title="'选项 ' + index" :key="index">
          <div class="box">内容 {{ index }}</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Toast, Icon } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Toast);
Vue.use(Icon);

export default {
  data() {
    return {
      active: 2,
      activeName: "a",
      active1: 0,
      active2: 0,
      active3: 0
    };
  },
  methods: {
    onClick(name, title) {
      Toast(title);
    },
    onClickDisabled(name, title) {
      Toast(name + "已被禁用");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 400vh;
}
.box {
  height: 100px;
}
</style>