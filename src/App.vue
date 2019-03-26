<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/vaccine">vaccine</router-link>
    </div> -->
    <div id="header">
      <div class="header-container">
        <img id="logo" src="./assets/yimiao.png" width="70px" height="74px" />
        <div id="nav">
          <router-link to="/vaccine/index">首页</router-link>
          <router-link :to="{name:'vaccine-month'}">按月查询</router-link>
          <router-link to="/about">关于</router-link>
        </div>
      </div>
      <hr />
    </div>
    <router-view />
    <div id="footer">
      <hr />
      <div class="copyright">
        © 2019, DXDOCTOR Tech. 大象（杭州）有限公司
        <span>浙 ICP 备 6666666 号 -1</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTag: "index"
    };
  },
  methods: {},
  computed: {}
};
</script>


<style>
@import "./assets/css/common.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#header {
  margin-bottom: 20px;
  clear: both;
}
.header-container {
  width: 80%;
  margin: 0 auto;
  height: 80px;
  max-width: 800px;
}
#logo {
  width: 70px;
  height: 74px;
  min-width: 70px;
  display: block;
  float: left;
}
#nav {
  width: 60%;
  height: 100%;
  text-align: left;
  margin: auto 5%;
  float: left;
  line-height: 80px;
}
#nav a {
  font-size: 18px;
  margin-right: 5%;
  text-decoration: none;
  font-weight: 800;
  color: #737373 !important;
}
#nav a:hover {
  font-size: 18px;
  margin-right: 5%;
  text-decoration: none !important;
  font-weight: 700;
  color: #39af78 !important;
}
#nav a:active {
  font-size: 18px;
  margin-right: 5%;
  text-decoration: none !important;
  font-weight: 700;
  color: #39af78 !important;
}
#nav a.router-link-active {
  font-size: 18px;
  margin-right: 5%;
  text-decoration: none !important;
  font-weight: 700;
  color: #39af78 !important;
}

#footer {
  width: 100%;
  color: #999;
  float: left;
  margin: 0 auto;
}
.copyright span {
  height: 80px;
  line-height: 80px;
  font-size: 14px;
  color: #333;
  text-align: center;
  font-size: 13px;
}
hr {
  height: 1px;
  border: none;
  border-top: 1px solid #eeeeee;
}
</style>
