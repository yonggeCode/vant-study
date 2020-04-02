<template>
  <div class="container">
    <div class="block">
      <h4>通过v-model绑定值当前选中项的 name</h4>
      <h5>既当前绑定之与radio的name值相同，这个radio为选择状态</h5>
      <h5>通过direction属性控制单选组的排列方式，默认垂直</h5>
      <van-radio-group v-model="radio" direction="horizontal">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
        <van-radio name="3">单选框 3</van-radio>
      </van-radio-group>
    </div>

    <div class="block">
      <h4>通过disabled属性禁止选项切换，在Radio上设置disabled可以禁用单个选项</h4>
      <h4>将shape属性设置为square，单选框的形状会变成方形</h4>
      <van-radio-group v-model="radio1" disabled>
        <van-radio name="1" shape="square">单选框 1</van-radio>
        <van-radio name="2" shape="square">单选框 2</van-radio>
      </van-radio-group>
    </div>

    <div class="block">
      <h4>通过checked-color属性设置选中状态的图标颜色</h4>
      <h4>通过icon-size属性可以自定义图标的大小</h4>
      <h4>设置label-disabled属性后，点击图标以外的内容不会触发单选框切换</h4>
      <van-radio-group v-model="radio2">
        <van-radio name="1" checked-color="#07c160">单选框 1</van-radio>
        <van-radio name="2" checked-color="#07c160" icon-size="24px">单选框 2</van-radio>
        <van-radio name="3" checked-color="#07c160" label-disabled>禁文本点击单选框 3</van-radio>
      </van-radio-group>
    </div>

    <div class="block">
      <h4>通过icon插槽自定义图标，并通过slotProps判断是否为选中状态</h4>
      <van-radio-group v-model="radio3">
        <van-radio name="1">
          单选框 1
          <template #icon="props">
            <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
          </template>
        </van-radio>
        <van-radio name="2">
          单选框 2
          <template #icon="props">
            <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
          </template>
        </van-radio>
      </van-radio-group>
    </div>

    <div class="block">
      <h4>在Cell组件内使用使其拥有更好的展现效果</h4>
      <h5>整体的结构为最外层为radio-group，radio-group下套一个cell-group，每一个选项栏都是要给cell，每个cell里面都是插槽的van-radio</h5>
      <h5>理解：radio-group规定整体的属性，radio-group规定结构，cell规定每一项的结构，插槽的van-radio为了绑定每一项的值</h5>
      <van-radio-group v-model="radio4">
        <van-cell-group>
          <van-cell title="单选框 1" clickable @click="radio4 = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="单选框 2" clickable @click="radio4 = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { RadioGroup, Radio,Cell,CellGroup } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Cell);
Vue.use(CellGroup);

export default {
  data() {
    return {
      radio: "1",
      radio1: "1",
      radio2: "1",
      radio3: "1",
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
      radio4: "1",
    };
  }
};
</script>

<style lang="scss" scoped>

.img-icon {
  height: 20px;
}
</style>