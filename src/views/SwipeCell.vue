<template>
  <div class="contianer">
    <div class="block">
      <h4>利用左右插槽自定义滑动选项</h4>
      <van-cell-group>
        <van-swipe-cell v-for="(item,index) in list" :key="item">
          <template #left>
            <van-button square type="primary" text="选择" @click="onChoice(index)" />
          </template>
          <van-cell :title="'单元格'+item" value="内容" />
          <template #right>
            <van-button square type="danger" text="删除" @click="onDelete(index)" />
            <van-button square type="primary" text="收藏" @click="onLike" />
          </template>
        </van-swipe-cell>
      </van-cell-group>
      <div>已选择：{{result | showMessage}}</div>
    </div>

    <div class="block">
      <h4>SwipeCell内容可以嵌套任意内容</h4>
      <van-swipe-cell>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { SwipeCell, Button, Cell, CellGroup,Card } from "vant";

Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Card);


export default {
  data() {
    return {
      list: [1, 2, 3, 4],
      result: []
    };
  },
  created() {
    this.result = Array.from({ length: this.list.length }, () => "");
  },
  filters: {
    showMessage(data) {
      console.log(data);
      if (Object.prototype.toString.call(data) !== "[object Array]")
        return data;
      let str = "";
      data.forEach(ele => {
        if (ele) {
          str += `单元格${ele}；`;
        }
      });
      return str;
    }
  },
  methods: {
    onChoice(index) {
      this.result.splice(index, 1, this.list[index]);
    },
    onDelete(index) {
      this.result.splice(index, 1, "");
    },
    onLike() {
      alert("收藏");
    }
  }
};
</script>

<style lang="scss" scoped>
$white:#fff;
.block::v-deep .van-cell,.block::v-deep .van-card{
  background: none;
}
.goods-card {
  margin: 0;
  background-color: $white;
}

.delete-button {
  height: 100%;
}
</style>