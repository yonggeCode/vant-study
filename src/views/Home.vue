<template>
  <div id="nav">
      <div>
        <h2>基础组件</h2>
        <router-link to="/">Home</router-link>|
        <router-link to="/Button">Button</router-link>|
        <router-link to="/Cell">Cell</router-link>|
        <router-link to="/Area">Area</router-link>|
        <router-link to="/Icon">Icon</router-link>|
        <router-link to="/Image">Image</router-link>|
        <router-link to="/Layout">Layout</router-link>|
        <router-link to="/Popup">Popup</router-link>|
        <router-link to="/Style">Style内置样式</router-link>
      </div>
      <div>
        <h2>表单组件</h2>
        <router-link to="/Calendar">Calendar</router-link>|
        <router-link to="/Checkbox">Checkbox</router-link>|
        <router-link to="/DatetimePicker">DatetimePicker</router-link>|
        <router-link to="/Field">Field</router-link>|
        <router-link to="/Form">Form</router-link>|
      </div>
      <router-link to="/Test">Test</router-link>|
    </div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss">
.home{
  text-align: center;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
