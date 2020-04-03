<template>
  <div class="container">
    <div class="block">
      <h4>基本用法</h4>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>

    <div class="block">
      <h5>Search 组件提供了search和cancel事件，search事件在点击键盘上的搜索/回车按钮后触发，cancel事件在点击搜索框右侧取消按钮时触发</h5>
      <h5>在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮</h5>
      <h5>通过 input-align 属性设置搜索框内容的对齐方式，可选值为center、right</h5>
      <h5>通过disabled属性禁用搜索框</h5>
      <h5>通过background属性可以设置搜索框外部的背景色，通过shape属性设置搜索框的形状，可选值为round</h5>
      <form action="/">
        <van-search
          v-model="value2"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
          shape="round"
          background="#4fc08d"
          input-align="right"
        />
      </form>
    </div>

    <div class="block">
      <h4>自定义按钮</h4>
      <h5>使用action插槽可以自定义右侧按钮的内容。使用插槽后，cancel事件将不再触发</h5>
      <h5>插槽内自定义的按钮获取不到Search的值</h5>
      <van-search v-model="value3" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch2">
				<template #action>
          <div @click="onSearch2">搜索</div>
        </template>
      </van-search>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Search, Toast } from "vant";

Vue.use(Search);
Vue.use(Toast);

export default {
  data() {
    return {
      value: "",
      value2: "",
      value3: "",

    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    onSearch2(val) {
			console.log(val)
      Toast(this.value3);
    },
  }
};
</script>

<style lang="scss" scoped>
.block {
  text-align: center;
}
</style>