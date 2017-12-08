<template>
  <div id="app">
  <!-- 导航栏 -->
    <my-head></my-head>
    <my-nav></my-nav>
    <router-view class="main_content"></router-view>
    <my-foot></my-foot>
</div>
</template>

<script>
  import myHead from 'components/header';
  import myNav from 'components/nav';
  import myFoot from 'components/foot';
  import Post from 'components/post';

  export default {
    name: 'app',
    components: {
      myHead,
      myNav,
      myFoot,
      Post
    }
  }
</script>

<style>
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  #app {
    font-family: "Microsoft Yahei", sans-serif;
  }
  .main_content {
    position: relative;
    top: 80px;
    width: 100%;
    margin-bottom: 135px;
    padding-left: 248px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 964px) {
    .main_content {
      padding-left: 0;
    }
  }
</style>
