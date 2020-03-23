<template>
  <div class="container">
    <div class="block">
      <van-checkbox v-model="checked">复选框</van-checkbox>
    </div>

    <div class="block">
      <h4>禁用状态</h4>
      <van-checkbox v-model="checked1" disabled>复选框</van-checkbox>
    </div>

    <div class="block">
      <h4>自定义形状</h4>
      <van-checkbox v-model="checked2" shape="square">复选框</van-checkbox>
    </div>

    <div class="block">
      <h4>自定义大小（可以使用rem）</h4>
      <van-checkbox v-model="checked3" icon-size="1.5rem">复选框</van-checkbox>
    </div>

    <div class="block">
      <h4>自定义图标</h4>
      <van-checkbox v-model="checked4">
        自定义图标
        <template #icon="props">
          <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
        </template>
      </van-checkbox>
    </div>

    <div class="block">
      <h4>禁用文本点击</h4>
      <h5>设置label-disabled属性后，点击图标以外的内容不会触发复选框切换</h5>
      <van-checkbox v-model="checked" label-disabled>复选框</van-checkbox>
    </div>

    <div class="block">
      <h4>复选框组</h4>
      <h5>复选框可以与复选框组一起使用，复选框组通过v-model数组绑定复选框的勾选状态</h5>
      <van-checkbox-group v-model="result">
        <van-checkbox name="a">复选框 a</van-checkbox>
        <van-checkbox name="b">复选框 b</van-checkbox>
      </van-checkbox-group>

      <h5>将direction属性设置为horizontal后，复选框组会变成水平排列</h5>
      <van-checkbox-group v-model="result2" direction="horizontal">
        <van-checkbox name="a">复选框 a</van-checkbox>
        <van-checkbox name="b">复选框 b</van-checkbox>
        <van-checkbox name="c">复选框 c</van-checkbox>
      </van-checkbox-group>

      <h4>全选与反选</h4>
      <h5>通过CheckboxGroup实例上的toggleAll方法可以实现全选与反选</h5>
      <van-checkbox-group v-model="result3" ref="checkboxGroup">
        <van-checkbox name="a">复选框 a</van-checkbox>
        <van-checkbox name="b">复选框 b</van-checkbox>
        <van-checkbox name="c">复选框 c</van-checkbox>
      </van-checkbox-group>
      <van-button type="primary" @click="checkAll">全选</van-button>
      <van-button type="info" @click="toggleAll">反选</van-button>
      <!-- 同理清空选择 -->
      <van-button type="info" @click="cancelAll">清空</van-button>
    </div>

    <div class="block">
      <h4>搭配单元格组件使用</h4>
      <h5>简单来说就是配Cellgroup和Cell循环多个Checkbox</h5>
      <van-checkbox-group v-model="result4">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="item"
            :title="`复选框 ${item}`"
            @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox :name="item" ref="checkboxes" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>

    <div class="block">
      <h4>以上为案例做个单选</h4>
      <van-checkbox-group v-model="result5">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list2"
            clickable
            :key="item"
            :title="`复选框 ${item}`"
            @click="singelToggle(index)"
          >
            <template #right-icon>
              <van-checkbox :name="item" ref="checkboxes" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, Button, Cell, CellGroup } from "vant";
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);

export default {
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: true,
      checked3: true,
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
      checked4: true,
      result: ["a", "b"],
      result2: ["a", "b", "c"],
      result3: [],
      list: ['a', 'b'],
      result4: [],
      list2: ['a', 'b','c','d'],
      result5: [,,,]
    };
  },
  methods: {
    checkAll() {
      // 相当于全部选择为true
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      //相当于全部触发点击
      this.$refs.checkboxGroup.toggleAll();
    },
    cancelAll() {
      this.$refs.checkboxGroup.toggleAll(false);
    },
     toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    singelToggle(index){
        this.result5.length = 0;
        this.result5[index] = 'true'
    }
  }
};
</script>
<style lang="scss" scoped>
.block {
  width: 100%;
  text-align: center;
}
.img-icon {
  height: 20px;
}
</style>