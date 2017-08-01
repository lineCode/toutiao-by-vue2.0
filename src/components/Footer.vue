<template>
  <div class="footer">
    <router-link to="/home" class="navItem">
      <Icon type="home" class="navItem-icon"></Icon>
      <span>首页</span>
    </router-link>
    <router-link to="/collect" class="navItem">
      <Icon type="ios-heart" class="navItem-icon"></Icon>
      <span>收藏</span>
    </router-link>
    <router-link to="/session" class="navItem">
      <Icon type="chatbubble-working" class="navItem-icon"></Icon>
      <span>段子</span>
    </router-link>
    <router-link to="/about" class="navItem">
      <Icon type="android-person" class="navItem-icon"></Icon>
      <span>我的</span>
    </router-link>
  </div>
</template>