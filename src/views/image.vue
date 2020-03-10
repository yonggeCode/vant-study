<template>
  <div class="main">
    <div class="block">
      <h1>image</h1>
      <h4>如果是本地的图片需要用require引入</h4>
      <van-image width="100" height="100" alt="123123" :src="image" />
    </div>

    <div class="block">
      <h1>fit</h1>
      <h4>默认fill：中文释义“填充”。默认值。替换内容拉伸填满整个content box, 不保证保持原有的比例。</h4>
      <van-image width="100" height="100" fit="fill" :src="image" />
      <h4>contain：中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。</h4>
      <van-image width="100" height="100" fit="contain" :src="image" />
      <h4>cover: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见</h4>
      <van-image width="100" height="100" fit="cover" :src="image" />
      <h4>none: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小</h4>
      <van-image width="100" height="100" fit="none" :src="image" />
      <h4>scate-down：中文释义“降低”。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。</h4>
      <van-image width="100" height="100" fit="scate-down" :src="image" />
    </div>

    <div class="block">
      <h1>round</h1>
      <van-image width="100" height="100" round :src="image" />
      <h4>radius设置圆角大小</h4>
      <van-image width="100" height="100" radius="20px" :src="image" />
    </div>

    <div class="block">
      <h1>lazy-load</h1>
      <h4>需要配好Lazyload模块使用</h4>
      <van-image width="100" height="100" lazy-load round :src="image" />
    </div>

    <div class="block">
      <h1>loading</h1>
      <h3>van-image默认带loading与失败的图片</h3>
      <h4>loading图片成功</h4>
      <van-image width="100" height="100"  src="https://up.enterdesk.com/edpic_360_360/35/58/2b/35582bb1f02caf1d4269bc6c0601a595.jpg">
        <template v-slot:loading>
        </template>
      </van-image>
      <h4>loading图片失败</h4>
      <van-image width="100" height="100"  src="https://img.yzcdn.cn/vant/cat.jpeg">
      </van-image>
    </div>
  </div>
</template>
<script>
import { Image, Lazyload } from "vant";
import Vue from "vue";
Vue.use(Image);
Vue.use(Lazyload);
export default {
  data() {
    return {
      image: require("../assets/1.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

