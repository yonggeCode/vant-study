<template>
  <div class="container">
    <h4>基础用法</h4>
    <h5>没啥可说的，就是一个模板。有自定义的样式</h5>
    <van-panel title="标题" desc="描述信息" status="状态">
      <div>内容</div>
    </van-panel>
    <van-panel title="标题" desc="描述信息" status="状态">
      <div>内容</div>
      <template #footer>
        <van-button size="small">按钮</van-button>
        <van-button size="small" type="danger">按钮</van-button>
      </template>
    </van-panel>
  </div>
</template>

<script>
import Vue from "vue";
import { Panel, Button} from "vant";

Vue.use(Panel);
Vue.use(Button);

export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>