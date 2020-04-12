<template>
  <div id="nav">
    <h2>Vant组件笔记</h2>
    <van-collapse v-model="components" accordion>
      <van-collapse-item title="基础组件" name="basic">
        <router-link class="link" to="/" tag="div">Home</router-link>
        <router-link class="link" to="/Button" tag="div">Button</router-link>
        <router-link class="link" to="/Cell" tag="div">Cell</router-link>
        <router-link class="link" to="/Icon" tag="div">Icon</router-link>
        <router-link class="link" to="/Image" tag="div">Image</router-link>
        <router-link class="link" to="/Layout" tag="div">Layout</router-link>
        <router-link class="link" to="/Popup" tag="div">Popup</router-link>
        <router-link class="link" to="/Style" tag="div">Style内置样式</router-link>
      </van-collapse-item>

      <van-collapse-item title="表单组件" name="form">
        <router-link class="link" tag="div" to="/Calendar">Calendar</router-link>
        <router-link class="link" tag="div" to="/Checkbox">Checkbox</router-link>
        <router-link class="link" tag="div" to="/DatetimePicker">DatetimePicker</router-link>
        <router-link class="link" tag="div" to="/Field">Field</router-link>
        <router-link class="link" tag="div" to="/Form">Form</router-link>
        <router-link class="link" tag="div" to="/NumberKeyboard">NumberKeyboard</router-link>
        <router-link class="link" tag="div" to="/Passwordinput">Passwordinput</router-link>
        <router-link class="link" tag="div" to="/Picker">Picker</router-link>
        <router-link class="link" tag="div" to="/Radio">Radio</router-link>
        <router-link class="link" tag="div" to="/Rate">Rate</router-link>
        <router-link class="link" tag="div" to="/Search">Search</router-link>
        <router-link class="link" tag="div" to="/Slider">Slider</router-link>
        <router-link class="link" tag="div" to="/Stepper">Stepper</router-link>
        <router-link class="link" tag="div" to="/Switch">Switch</router-link>
        <router-link class="link" tag="div" to="/Uploader">Uploader</router-link>
      </van-collapse-item>

      <van-collapse-item title="反馈组件" name="feedback">
        <router-link class="link" tag="div" to="/ActionSheet">ActionSheet</router-link>
        <router-link class="link" tag="div" to="/Dialog">Dialog</router-link>
        <router-link class="link" tag="div" to="/DropDownMenu">DropDownMenu</router-link>
        <router-link class="link" tag="div" to="/Loading">Loading</router-link>
        <router-link class="link" tag="div" to="/Notify">Notify</router-link>
        <router-link class="link" tag="div" to="/Overlay">Overlay</router-link>
        <router-link class="link" tag="div" to="/PullRefresh">PullRefresh</router-link>
        <router-link class="link" tag="div" to="/SwipeCell">SwipeCell</router-link>
        <router-link class="link" tag="div" to="/Toast">Toast</router-link>
      </van-collapse-item>

      <van-collapse-item title="展示组件" name="show">
        <router-link class="link" tag="div" to="/Circle">Circle</router-link>
        <router-link class="link" tag="div" to="/Collapse">Collapse</router-link>
        <router-link class="link" tag="div" to="/CountDown">CountDown</router-link>
        <router-link class="link" tag="div" to="/Divider">Divider</router-link>
        <router-link class="link" tag="div" to="/ImagePreview">ImagePreview</router-link>
        <router-link class="link" tag="div" to="/List">List</router-link>
        <router-link class="link" tag="div" to="/NoticeBar">NoticeBar</router-link>
        <router-link class="link" tag="div" to="/Panel">Panel</router-link>
        <router-link class="link" tag="div" to="/Progress">Progress</router-link>
        <router-link class="link" tag="div" to="/Skeleton">Skeleton</router-link>
        <router-link class="link" tag="div" to="/Steps">Steps</router-link>
        <router-link class="link" tag="div" to="/Sticky">Sticky</router-link>
        <router-link class="link" tag="div" to="/Swipe">Swipe</router-link>
        <router-link class="link" tag="div" to="/Tag">Tag</router-link>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import Vue from "vue";
import { Collapse, CollapseItem, Cell, CellGroup } from "vant";

Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cell);
Vue.use(CellGroup);

export default {
  data() {
    return {
      components: sessionStorage.getItem('type') || ""
    };
  }
};
</script>
<style lang="scss">
.container {
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
}
.home {
  text-align: center;
}
.noPadding {
  padding: 0;
}
#nav {
  padding: 30px;
  .link {
    font-weight: bold;
    font-size: 16px;
    padding: 0.4rem 0;
    color: #409EFF;
  }
}
.link {
  width: 100%;
}
</style>
