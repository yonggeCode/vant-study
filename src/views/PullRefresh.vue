<template>
  <div class="contianer">
    <div class="block">
      <h5>需要注意，下拉刷新的判断区域是在refresh组件内，要确保refresh内容区域够大</h5>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh"  success-text="刷新成功">
        <p>刷新次数: {{ count }}</p>
        <div class="content"></div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { PullRefresh,Toast} from "vant";

Vue.use(PullRefresh);
Vue.use(Toast);

export default {
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.block,.content{
  height: 100vh;
}
</style>