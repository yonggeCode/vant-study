<template>
  <div class="contianer">
    <div class="block">
      <h5>文件上传完毕后会触发after-read回调函数，获取到对应的file对象</h5>
      <van-uploader v-model="list" :after-read="afterRead" />
    </div>

    <div class="block">
      <h4>文件预览</h4>
      <h5>通过v-model可以绑定已经上传的文件列表，并展示文件列表的预览图</h5>
      <h5>show-upload设置是否展示添加区域，deletable设置是否展示删除按钮。这两个值设置为false，只保留预览功能</h5>
      <van-uploader v-model="list2" :show-upload="false" :deletable="false" />
    </div>

    <div class="block">
      <h4>上传状态的控制</h4>
      <h5>通过status属性可以标识上传状态，uploading表示上传中，failed表示上传失败，done表示上传完成（从 2.4.7 版本开始支持）</h5>
      <h5>对应单图片上传进行状态的控制。感觉用处不大，增删太耗服务器性能了</h5>
      <van-uploader v-model="fileList" :after-read="afterRead2" />
    </div>

    <div class="block">
      <h4>自定义上传样式</h4>
      <van-uploader v-model="list">
        <van-button icon="photo" type="primary">上传文件</van-button>
      </van-uploader>
    </div>

    <div class="block">
      <h4>上传前自定义处理</h4>
      <h5>通过传入beforeRead函数可以在上传前进行校验，返回true表示校验通过，返回false表示校验失败。支持返回Promise对 file 对象进行自定义处理，例如压缩图片。</h5>
      <van-uploader v-model="list3" :before-read="beforeRead" />
      <br />
      <van-uploader v-model="list4" :before-read="asyncBeforeRead" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Uploader, Button, Toast } from "vant";

Vue.use(Uploader);
Vue.use(Button);
Vue.use(Toast);

export default {
  data() {
    return {
      list: [],
      list2: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/tree.jpg" },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/tree.jpg" },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/tree.jpg" }
      ],
      fileList: [
        {
          url: "https://img.yzcdn.cn/vant/leaf.jpg",
          status: "uploading",
          message: "上传中..."
        },
        {
          url: "https://img.yzcdn.cn/vant/tree.jpg",
          status: "failed",
          message: "上传失败"
        }
      ],
      list3: [],
      list4: []
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    afterRead2(file) {
      console.log(12);
      file.status = "uploading";
      file.message = "上传中...";

      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
        console.log(file);
      }, 1000);
    },
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        Toast("请上传 jpg 格式图片");
        return false;
      }
      return true;
    },
    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== "image/jpeg") {
          Toast("请上传 jpg 格式图片");
          reject();
        } else {
          console.log(file)
          resolve(file);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>