<template>
  <div class="container">
    <div class="block">
      <h4>在表单中，每个 Field 组件 代表一个表单项，使用 Field 的rules属性定义校验规则</h4>
      <h5>这里表单内只要有vant的button就会触发onSubmit的事件</h5>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
        <!-- <van-button>提交</van-button> -->
      </van-form>
    </div>

    <div class="block">
      <h1>校验规则</h1>
      <h4>通过rules定义表单校验规则</h4>
      <h5>rules内的对象pattern需要为正则，validator为一个判断函数，二者存一</h5>
      <h5>validator的返回值为Boolean为同步检验，返回值是一个promise则为异步检验</h5>
      <h5>一个field可以添加多个检验规则</h5>
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="value1"
          name="pattern"
          placeholder="正则校验"
          :rules="[
                { pattern, message: '请输入正确内容' },
                { pattern:/^1\d{5}$/, message: '必须以1开头的6位数字' }
                ]"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value2"
          name="validator"
          placeholder="函数校验"
          :rules="[{ validator, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="value3"
          name="asyncValidator"
          placeholder="异步函数校验"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
    <div class="block">
      <h1>其他类型</h1>
      <h4>在van组件内使用组件需要使用template插槽功能,不用field包裹的话最后提交的时候不会被submit收集</h4>
      <van-form @submit="onSubmit2">
        <!-- 开关 -->
        <van-field name="switch" label="开关">
          <template #input>
            <van-switch v-model="switchChecked" size="20" />
          </template>
        </van-field>
        <!-- 复选框 -->
        <van-field name="checkbox" label="复选框">
          <template #input>
            <van-checkbox v-model="checkbox" shape="square" />
          </template>
        </van-field>
        <van-field name="checkboxGroup" label="复选框组">
          <template #input>
            <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
              <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <!-- 单选 -->
        <van-field name="radio" label="单选框">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">单选框 1</van-radio>
              <van-radio name="2">单选框 2</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <!-- 步进器 -->
        <van-field name="stepper" label="步进器">
          <template #input>
            <van-stepper v-model="stepper" />
          </template>
        </van-field>
        <!-- 评分组件 -->
        <van-field name="rate" label="评分">
          <template #input>
            <van-rate v-model="rate" />
          </template>
        </van-field>
        <!-- 滑块 -->
        <van-field name="slider" label="滑块">
          <template #input>
            <van-slider v-model="slider" />
          </template>
        </van-field>
        <!-- 文件上传 -->
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <!-- 选择器 -->
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="选择器"
          placeholder="点击选择城市"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>

        <!-- 时间选择器 -->
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="value1"
          label="时间选择"
          placeholder="点击选择时间"
          @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" position="bottom">
          <van-datetime-picker type="time" @confirm="onConfirm1" @cancel="showPicker1 = false" />
        </van-popup>

        <!-- 省市区选择器 -->
        <van-field
          readonly
          clickable
          name="area"
          :value="value2"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area :area-list="areaList" @confirm="onConfirm2" @cancel="showArea = false" />
        </van-popup>
        <!-- 日历组件 -->
        <van-field
          readonly
          clickable
          name="calendar"
          :value="value3"
          label="日历"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm3" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Areas from "@/libs/Area.js";
import Vue from "vue";
import {
  Form,
  Field,
  Button,
  Toast,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Stepper,
  Rate,
  Slider,
  Uploader,
  Popup,
  Picker,
  DatetimePicker,
  Area,
  Calendar
} from "vant";
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Stepper);
Vue.use(Rate);
Vue.use(Slider);
Vue.use(Uploader);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(DatetimePicker);
Vue.use(Area);
Vue.use(Calendar);


export default {
  data() {
    return {
      username: "",
      password: "",
      value1: "",
      value2: "",
      value3: "",
      pattern: /\d{6}/,
      switchChecked: false,
      checkbox: false,
      checkboxGroup: ["1", "2"],
      radio: "1",
      stepper: 1,
      rate: 3,
      slider: 50,
      uploader: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      value: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
      value1: "",
      showPicker1: false,
      value2: "",
      showArea: false,
      areaList: Areas, // 数据格式见 Area 组件文档
      value3: '',
      showCalendar: false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise(resolve => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    onSubmit2(values) {
      console.log("提交的数据集", values);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onConfirm1(time) {
      this.value1 = time;
      this.showPicker1 = false;
    },
    onConfirm2(values) {
      this.value2 = values.map(item => item.name).join("/");
      this.showArea = false;
    },
     onConfirm3(date) {
      this.value3 = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
  }
};
</script>

<style lang="scss" scoped>
.block {
  text-align: center;
}
.van-field::v-deep .van-cell__title {
  flex: inherit;
}
.van-field::v-deep .van-field__value {
  overflow: inherit;
}
form::v-deep .van-field {
  overflow: inherit;
}
</style>

