<template>
  <div id="nav-list">
    <ul class="nav-left">
      <li class="nav-item" v-for="(item, index) in items">
        <!-- <a href="#">{{item.name}}</a> -->
        <router-link :to="'/' + item.ad">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {name: '热销商品排名', ad: 'testchart'},
        {name: 'post', ad: 'post'}
      ]
    };
  }
}
</script>

<style scoped>
  #nav-list {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    padding: 20px 40px;
    line-height: 40px;
    background-color: #293c55;
    overflow-y: auto;
    z-index: 15;
  }
  .nav-left {
    width: 168px;
    font-family: "Microsoft Yahei", sans-serif;
  }
  .nav-item a {
    size: 14px;
    color: #b2b2b2;
  }
  .nav-item a:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  a.router-link-active {
    color: rgba(255, 255, 255, 0.9);
  }
  @media screen and (max-width: 964px) {
    #nav-list {
      position: relative;
      width: 100%;
      padding: 5px 20px;
      box-sizing: border-box;
      line-height: 20px;
    }
    .nav-left {
      width: 100%;
    }
    .nav-left .nav-item {
      display: inline-block;
      margin: 5px 0;
      padding: 0 8px;
      border-right: solid 1px #b2b2b2;
    }
    .nav-item:last-child {
      border-right: none;
    }
  }
</style>
