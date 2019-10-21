<template>
  <div id="app">
    <router-view />
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
  font-weight: 600;
  color: #737373 !important;
}
#nav a:hover {
  font-size: 18px;
  margin-right: 5%;
  text-decoration: none !important;
  font-weight: 600;
  color: #39af78 !important;
}
#nav a:active {
  font-size: 18px;
  margin-right: 5%;
  text-decoration: none !important;
  font-weight: 600;
  color: #39af78 !important;
}
#nav a.router-link-active {
  font-size: 18px;
  margin-right: 5%;
  text-decoration: none !important;
  font-weight: 600;
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
