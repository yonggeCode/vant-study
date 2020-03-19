<template>
  <div class="container">
    <div class="block">
      <h1>文字省略</h1>
      <h4>当文本内容长度超过容器最大宽度时，自动省略多余的文本。</h4>
      <div class="box">
        <!-- 最多显示一行 -->
        <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
        <!-- 最多显示两行 -->
        <div class="van-multi-ellipsis--l2">这是一段最多显示两行的文字，多余的内容会被省略</div>
        <!-- 最多显示三行 -->
        <div class="van-multi-ellipsis--l3">这是一段最多显示三行的文字，多余的内容会被省略</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.block {
  text-align: center;
}
.box{
    display: inline-block;
    width: 200px;
    background-color: #f5f5f5;
}
</style>