<template>
  <div class="container">
    <div class="block">
      <h4>默认样式，show控制键盘的展示状态，extra-key代表扩展键的字符，close-button-text表示删除键的显示内容</h4>
      <van-button type="info" @touchstart.stop="show = true">弹出默认键盘</van-button>
      <van-number-keyboard
        :show="show"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
    </div>

    <div class="block">
      <h4>type为custom的键盘需要手动设置close事件</h4>
      <h4>title可以设置键盘的标题</h4>
      <div>键盘的输入值为：{{value}}</div>
      <van-button type="primary" @touchstart.stop="show1 = true">弹出自定义键盘键盘</van-button>
      <van-number-keyboard
        :show="show1"
        theme="custom"
        title="这个是自己定义的键盘"
        extra-key="嘿嘿"
        close-button-text="完成"
        v-model="value"
        @blur="show1 = false"
        @input="onInput"
        @delete="onDelete"
        @close="show1 = false"
      />
    </div>
    <div class="block">
      <h4>根据上面的示例完成一个常见的键盘输入栏</h4>
      <h5>根据按键的类型不同和用户的操作行为，将键盘的事件分为6类，分别是：input，delete，close，blur，show，hide，根据合适的常见进行使用</h5>
			<van-field
        readonly
        clickable
        label="身份证"
        :value="text"
        placeholder="请输入身份证号码"
        @touchstart.native.stop="show2 = true "
      />
      <van-number-keyboard
        v-model="text"
        :show="show2"
        :maxlength="18"
        extra-key="X"
        theme="custom"
				title="身份证键盘"
        close-button-text="完成"
        @blur="show2 = false"
				@close="onClose"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NumberKeyboard } from "vant";
import { Toast, Button, Field } from "vant";
Vue.use(NumberKeyboard);
Vue.use(Toast);
Vue.use(Button);
Vue.use(Field);
export default {
  data() {
    return {
      show: false,
      show1: false,
      value: "",
      show2: false,
      text: ""
    };
  },
  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast("删除");
		},
		onClose(){
			const reg = /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/;
			if(reg.test(this.text)){
				Toast('身份证格式正确')
			}else{
				Toast('身份证格式不正确，请检查')
			}
		},

  }
};
</script>

<style lang="scss" scoped>
.block {
  text-align: center;
}
</style>
