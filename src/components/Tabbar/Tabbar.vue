<template>
  <div id="app">
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  /*
     1.如果在下方有一个单独的Tabbar组件
       > 自定义Tabbar组件在APP中使用
       > 让 Tabbar处于底部，并且设置样式
     2.TabBar中显示的内容有外界决定
       > 定义插槽
       > flex布局平分
     3.自定义TabBarItem，可以传入图片和文字
       > 定义item，并且定义两个插槽：图片和文字
       > 给两个插槽外层包装，用于设置样式
       > 填充插槽，实现底部Tabbar的效果
     
   */
  name:'Tabbar'
}
</script>

<style lang="less">
#app{
  #tabbar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
    color: #b4b5b6;
    font-size: 12px;
    background-color: #f6f6f6;
  }
}
</style>