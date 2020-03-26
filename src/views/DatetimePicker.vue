<template>
  <div class="container">
    <div class="block">
      <h4>通type选定时间选择器的类型，type值有datetime year-month date</h4>
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </div>

    <div class="block">
      <h4>利用popup配合使用选择器</h4>
      <h5>is-link是否展示箭头，arrow-direction箭头方向，formatter格式化picker的展示内容（可根据需求自定义），filter的用法与formatter类似唯一不同的地方是filter是将每一类都放到一个数组中去，而formatter是按类列举每一个数值每一个都是一个string</h5>
      <h5>理论上formatter和filter可以做到相同的事情，可根据具体需求选用</h5>
      <van-cell
        title="这是时间选择器"
        is-link
        arrow-direction="down"
        :value="timeValue"
        @click="show = true"
      />
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          :filter="filter"
          @cancel="show = false"
          @confirm="confirmPicker"
					@change="onChange"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DatetimePicker, Popup, Cell } from "vant";
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Cell);

export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      show: false,
      currentDate2: new Date(),
      timeValue: "请选择时间",
    };
  },
  methods: {
    confirmPicker(val) {
      // console.log(val);
      let year = val.getFullYear();
      let month = val.getMonth() + 1;
      let day = val.getDate();
      let hour = val.getHours();
      let minute = val.getMinutes();
      if (month >= 1 && month <= 9) {
        month = `0${month}`;
      }
      if (day >= 1 && day <= 9) {
        day = `0${day}`;
      }
      if (hour >= 0 && hour <= 9) {
        hour = `0${hour}`;
      }
      if (minute >= 0 && minute <= 9) {
        minute = `0${minute}`;
      }
      this.timeValue = `${year}-${month}-${day} ${hour}:${minute}`;
      this.show = false;
    },
    // 选项格式化函数，给对应的数字后面加入年月日
    formatter(type, value) {
      // console.log(type,value)
      if (type === "year") {
        return `${value}年`;
        // console.log(value)
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      } else if (type === "hour") {
        return `${value}时`;
      } else if (type === "minute") {
        return `${value}分`;
      } else if (type === "second") {
        return `${value}秒`;
      }
      // console.log(value)
      return value;
    },
    //利用filter给分钟添加一个间隔。每个选项间隔5分钟
    // 可以发现filter与formatter的表现形式十分的类似，只不过formatter每一个value是string,filter的option是array
    filter(type, options) {
      // console.log(options)
      if (type === "minute") {
        // console.log(options);
        return options.filter(option => option % 5 === 0);
      }
      return options;
    },
    onChange(item) {
			console.log('组件实例',item)
    }
  }
};
</script>