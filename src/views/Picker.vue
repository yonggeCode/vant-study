<template>
  <div class="container">
    <div class="block">
      <h5>columns属性配置选项数据，columns是一个包含字符串或对象的数组</h5>
      <h5>可以通过default-index属性设置初始选中项的索引</h5>
      <h5>设置show-toolbar属性后会展示顶部操作栏，点击确认按钮触发confirm事件，点击取消按钮触发cancel事件</h5>
      <van-picker
        show-toolbar
        title="标题"
        :columns="columns"
        :default-index="2"
        @change="onChange"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
      <div>{{this.test}}</div>
    </div>

    <div class="block">
      <h4>多列选择</h4>
      <h5>通过columns属性可以配置多列选择</h5>value
      <h5>数组内每个对象的value表示对于的值(必须用value)，defaultIndex表示当前项的默认索引</h5>
      <van-picker show-toolbar title="多列选择" :columns="columns2" />
    </div>
    <div class="block">
      <h4>级联选择</h4>
      <h5>使用columns的children字段可以实现选项级联的效果</h5>
      <h5>级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位</h5>
      <van-picker show-toolbar title="级联选择" :columns="columns3" />
    </div>

    <div class="block">
      <h4>动态设置选项</h4>
      <h5>通过 Picker 上的实例方法可以更灵活地控制选择器，比如使用setColumnValues方法实现多列联动</h5>
      <h5>利用setColumnValues的方法动态改变第二栏的值</h5>
      <van-picker :columns="columns4" @change="onChange2" />
    </div>

    <div class="block">
      <h4>加载状态</h4>
      <h5>若选择器数据是异步获取的，可以通过 loading 属性显示加载提示</h5>
      <van-picker :columns="columns5" :loading="loading" />
    </div>

    <div class="block">
      <h4>与field和popup使用</h4>
      <h5>在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 Popup 和 Field 实现该效果</h5>
      <van-field
        readonly
        clickable
        label="城市"
        :value="value"
        placeholder="选择城市"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns6"
          @cancel="showPicker = false"
          @confirm="onConfirm2"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Picker, Toast,Field,Popup } from "vant";
Vue.use(Picker);
Vue.use(Toast);
Vue.use(Field);
Vue.use(Popup);

const citys = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"],
  南京: []
};
export default {
  data() {
    return {
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      test: "",

      columns2: [
        // 第一列
        {
          values: ["周一", "周二", "周三", "周四", "周五"],
          defaultIndex: 2
        },
        // 第二列
        {
          values: ["上午", "下午", "晚上"],
          defaultIndex: 1
        }
      ],

      columns3: [
        {
          text: "浙江",
          children: [
            {
              text: "杭州",
              children: [{ text: "西湖区" }, { text: "余杭区" }]
            },
            {
              text: "温州",
              children: [{ text: "鹿城区" }, { text: "瓯海区" }]
            }
          ]
        },
        {
          text: "福建",
          children: [
            {
              text: "福州",
              children: [{ text: "鼓楼区" }, { text: "台江区" }]
            },
            {
              text: "厦门",
              children: [{ text: "思明区" }, { text: "海沧区" }]
            }
          ]
        }
      ],

      columns4: [{ values: Object.keys(citys) }, { values: citys["浙江"] }],

      columns5: [],
      loading: true,

      value: "",
      showPicker: false,
      columns6: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
    };
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast("取消");
    },
    onConfirm(value, index) {
      this.test = `当前值：${value}, 当前索引：${index}`;
    },

    onChange2(picker, values) {
      console.log(values);
      // values是一个数组，存放各栏的值，索引位对应的值自左向右
      // valuse[0],就表示省
      picker.setColumnValues(1, citys[values[0]]);
    },
    onConfirm2(value) {
      this.value = value;
      this.showPicker = false;
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
      this.columns5 = ["杭州", "宁波", "温州", "嘉兴", "湖州"];
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.block {
  text-align: center;
}
</style>