<template>
  <div class="container">
    <div class="block">
      <h5>List 组件通过loading和finished两个变量控制加载状态。</h5>
      <h5>当组件滚动到底部时，会触发load事件并将loading设置成true。此时可以发起异步操作并更新数据，数据更新完毕后，将loading设置成false即可。若数据已全部加载完毕，则直接将finished设置成true即可。</h5>
      <h5>若列表数据加载失败，可将error设置成true即可显示错误提示，用户点击错误提示后会重新触发 load 事件。</h5>
      <h5>List 组件可以与 PullRefresh 组件结合使用，实现下拉刷新的效果</h5>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="我是有底线的"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { List, PullRefresh } from "vant";

Vue.use(List);
Vue.use(PullRefresh);

export default {
  data() {
    return {
      list: [],
      error: false,
      loading: false,
      index: 0,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    onLoad() {
      this.fetchSomeThing()
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            this.list.push(data[i]);
          }
          // 加载状态结束
          this.loading = false;
          // 当数组长度大于40表示已获得全部数据
          if (this.list.length >= 40) {
            // 数据全部加载完成
            this.finished = true;
          }
        })
        .catch(() => {
          // 请求失败loading状态改为false
          this.loading = false;
          // 请求错误状态为True；
          this.error = true;
        });
    },
    // 异步事件，一般都是请求数据;
    fetchSomeThing() {
      // 通过Promise和setTimeout模拟请求
      return new Promise((resolve, reject) => {
        setTimeout(() => {
  
          if (this.refreshing) {
            // this.refreshing为true表示当前是上拉刷新触发的请求
            // 将数组置为空,this.refreshing改为false表示上拉刷新操作结束
            this.list = [];
            this.refreshing = false;
          }
          if (Math.random() > 0.3) {
            // > 0.3表示请求成功，返回一个10个数的数组，用来模拟数据；
            let arr = [];
            for (let i = 0; i < 10; i++) {
              arr.push(this.index + i + 1);
            }
            this.index += 10;
            resolve(arr);
          } else {
            // < 0.3 就不做什么处理之间reject
            reject();
          }
        }, 1000);
      });
    },
    onRefresh() {
      console.log(this.refreshing)
      // 清空列表数据
      this.finished = false;
      this.index = 0;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      // 这里官方文档给的这个this.loading = true有问题
      // refresh组件用this.refreshing控制加载图标的展示，如果这里给loading也为true会多一个加载
      // this.loading = true;
      this.onLoad();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>