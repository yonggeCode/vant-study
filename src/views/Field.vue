<template>
  <div class="container">
    <div class="block">
      <h4>可以通过v-model双向绑定输入框的值，通过placeholder设置占位提示文字</h4>
      <h5>Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。</h5>
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-cell-group>
    </div>

    <div class="block">
      <h1>自定义类型输入框</h1>
      <h4>根据type属性定义不同类型的输入框，默认text,label是输入框左侧文本</h4>
      <van-cell-group>
        <van-field v-model="text" type="text" label="文本" placeholder="这是文本" />
        <van-field v-model="tel" type="tel" label="手机号" placeholder="这是手机号，和文本基本一样" />
        <van-field v-model="digit" type="digit" label="整数" placeholder="这是整数，会限制字符和小数点的输入" />
        <van-field v-model="number" type="number" label="数字" placeholder="这是数字，会限制字符和小数点的输入" />
        <van-field v-model="password" type="password" label="密码" placeholder="这是密码，不给你看" />
        <van-field v-model="textarea" type="textarea" label="textarea" placeholder="留言" />
      </van-cell-group>
    </div>

    <div class="block">
      <h1>禁用输入框</h1>
      <h4>通过readonly将输入框设置为只读状态，通过disabled将输入框设置为禁用状态</h4>
      <van-cell-group>
        <van-field label="文本" value="输入框只读" readonly />
        <van-field label="文本" value="输入框已禁用" disabled />
      </van-cell-group>
    </div>

    <div class="block">
      <h1>显示图标</h1>
      <h4>通过left-icon和right-icon配置输入框两侧的图标，通过设置clearable在输入过程中展示清除图标</h4>
      <van-cell-group>
        <van-field
          v-model="value1"
          label="文本"
          left-icon="smile-o"
          right-icon="warning-o"
          placeholder="显示图标"
        />
        <van-field 
            v-model="value2" 
            clearable 
            label="文本" 
            left-icon="music-o" 
            placeholder="显示清除图标" 
        />
      </van-cell-group>
    </div>

    <div class="block">
      <h1>错误提示</h1>
      <h4>设置required属性表示这是一个必填项，可以配合error或error-message属性显示对应的错误提示</h4>
      <h5>error这个属性暂时没看出来有什么用，只是吧表单内容变红而已</h5>
      <van-cell-group>
        <van-field
            v-model="username"
            error
            required
            label="用户名"
            placeholder="请输入用户名"
        />
        <van-field
            v-model="phone"
            required
            label="手机号"
            placeholder="请输入手机号"
            error-message="手机号格式错误"
        />
      </van-cell-group>
    </div>

    <div class="block">
      <h4>基于error-message这个属性和blur做一个表单验证</h4>
      <van-cell-group>
        <van-field
            v-model="phone2"
            required
            label="手机号"
            placeholder="请输入手机号"
            :error-message="phonemessage"
            @blur="checkphone"
        />
      </van-cell-group>
    </div>

    <div class="block">
			<h1>插入按钮</h1>
      <h4>通过 button 插槽可以在输入框尾部插入按钮</h4>
      <van-field
				v-model="sms"
				center
				clearable
				label="短信验证码"
				placeholder="请输入短信验证码"
			>
				<template #button>
					<van-button size="small" type="primary">发送验证码</van-button>
				</template>
			</van-field>
    </div>

		<div class="block">
      <h4>通过formatter属性可以对输入的内容进行格式化</h4>
			<h5>本质就是绑定input事件，对文本进行处理</h5>
      <van-cell-group>
        <van-field
					v-model="value3"
					label="文本"
					:formatter="formatter"
					placeholder="格式化输入内容"
				/>
      </van-cell-group>
    </div>

		<div class="block">
      <h1>高度自适应</h1>
			<h4>对于 textarea，可以通过autosize属性设置高度自适应.rows默认几行</h4>
			<h4>maxlength设置文本最大长度show-word-limit显示当前文档长度并计数</h4>
      <van-cell-group>
        <van-field
					v-model="message"
					rows="2"
					autosize
					label="留言"
					type="textarea"
					maxlength="50"
					placeholder="请输入留言"
					show-word-limit
				/>
      </van-cell-group>
    </div>

		<div class="block">
      <h1>对齐方式与额外类名</h1>
			<h4>label-class设置左侧文本额外类名；label-width设置左侧文本宽度，默认为90px；label-align设置左侧文本对齐方式，可选值为 center right</h4>
			<h4>input-align设置输入框对齐方式，可选值为 center right</h4>
			<h5>设置label-class不要使用scoped或者使用穿透符</h5>
      <van-cell-group>
        <van-field
				v-model="value4"
				label-class="red"
				label-width="120px"
				label-align="right"
				label="文本"
				placeholder="输入框内容右对齐"
				input-align="right"
			/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, CellGroup,Button} from "vant";
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(Button);

export default {
  data() {
    return {
      value: "",
      text: "",
      tel: "",
      digit: "",
      number: "",
      password: "",
      textarea:'',
      value1: '',
      value2: '123',
      username:'',
      phone:'',
      phone2:'',
			phonemessage:'',
			sms:'',
			value3: '',
			message:'',
			value4: '',
    };
  },
  methods:{
      checkphone(){
          if(this.phone2 == ''){
              this.phonemessage = "请输入手机号码";
          }else if(!/^1[3456789]\d{9}$/.test(this.phone2)){
              this.phonemessage = "请输入正确的手机号码";
          }else{
              this.phonemessage = "";
          }
			},
			formatter(value) {
				console.log(value)
      // 过滤输入的数字
      return value.replace(/\d/g, '');
    }
  }
};
</script>

<style lang="scss" scoped>
	.van-cell::v-deep .red {
		color: red;
	}
</style>