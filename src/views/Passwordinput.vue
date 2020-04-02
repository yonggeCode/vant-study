<template>
  <div class="contianer">
    <div class="block">
      <h2>用于输入支付密码、短信验证码等，通常与数字键盘组件配合使用</h2>
      <h4>pc上貌似用不了,blur必须要点在html内且在keyboard外才会触发，简单来说就是html至少需要撑满整个视图容器</h4>
      <h5>mask值用于是否隐藏密码内容；gutter输入框格子之间的间距，默认0；length密码最大长度；info输入框下方文字提示；error-info 输入框下方错误提示;focused  聚焦状态，聚焦时会显示光标，密码已满的时候不闪烁</h5>
      
      <!-- 密码输入框 -->
      <van-password-input
        :value="value"
        info="密码为 7 位数字"
        :focused="showKeyboard"
        length="7"
        :error-info="errorMsg"
        @focus="showKeyboard = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { PasswordInput, NumberKeyboard } from "vant";

Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
export default {
  data() {
    return {
      value: "123",
      showKeyboard: true,
      errorMsg:'',
    };
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 7);
      this.value.includes(9)?this.errorMsg = '填写内容不能含有数字9': this.errorMsg = '';
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
      this.value.includes(9)?this.errorMsg = '填写内容不能含有数字9': this.errorMsg = '';

    }
  }
};
</script>

<style lang="scss" scoped>

.block {
  text-align: center;
}
</style>