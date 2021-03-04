<template>
  <div>
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home" activeColor='#937bf5'>
        <img slot="item-icon" src="@/assets/images/首页.png" />
        <img slot="item-icon-active" src="@/assets/images/首页_active.png" />
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor='#937bf5'>
        <img slot="item-icon" src="@/assets/images/分类.png" />
        <img slot="item-icon-active" src="@/assets/images/分类_active.png" />
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart" activeColor='#937bf5'>
        <img slot="item-icon" src="@/assets/images/购物车.png" />
        <img slot="item-icon-active" src="@/assets/images/购物车_active.png" />
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" activeColor='#937bf5'>
        <img slot="item-icon" src="@/assets/images/我的.png" />
        <img slot="item-icon-active" src="@/assets/images/我的_active.png" />
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
    
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar/Tabbar.vue';
import TabbarItem from '@/components/Tabbar/TabbarItem';
export default {
  components:{
    Tabbar,
    TabbarItem
  }
};
</script>

<style lang="less">
@import './assets/css/base.less';
</style>
