<template>
  <div class="down_page">
    <div>
      <span class="go_home" @click="goHome()">《 返回主页</span>
    </div>
    <ul>
      <li class="down_item" v-for="(item, index) in ipaList" :key="index">
        <img class="item_icon" src="../assets/icon/app_icon.png" />
        <div class="item_center">
          <span class="item_name">{{ item.jobName }}</span>
          <span class="item_version">{{ item.bundleVersion }}({{item.buildNumber}})</span>
          <span class="item_time">更新：{{ formartDate(item.createTime) }}</span>
        </div>
        <a class="item_click" :href="item.downloadPath">下载</a>
      </li>
      <div class="load_more" @click="loadMore()">{{ loadingMoreStr }}</div>
    </ul>
  </div>
</template>
<script>
import API from "@/api/iOSApi";
var appData = require("@/store/mock.json");
export default {
  name: "iosDownload",
  data() {
    return {
      isLoading: false,
      currentIndex: 0,
      loadingMoreStr: "加载更多",
      ipaList: new Array()
    };
  },
  created() {
    this.ipaList = appData.data;
    console.log(this.$route.params.jobName);
    let jobName = this.$route.params.jobName;
    this.requestApi(this.currentIndex, jobName);
  },
  methods: {
    requestApi(index, jobName) {
      let self = this;
      let params = {
        page: index,
        jobName: jobName
      };
      API.getIpaInfoByJobName(params)
        .then(function(response) {
          self.isLoading = false;
          if (response.data == null) {
            return;
          }
          if (index == 0) {
            self.ipaList = response.data;
          } else {
            self.ipaList = self.ipaList.concat(response.data);
          }
          self.loadingMoreStr = "加载更多";
          console.log("aa", response);
        })
        .catch(function() {
          self.isLoading = false;
          self.loadingMoreStr = "加载更多";
          //self.ipaList = self.ipaList.concat(response.data);
        });
    },
    loadMore() {
      this.currentIndex += 1;
      this.loadingMoreStr = "loading";
      this.requestApi(this.currentIndex);
    },
    goHome() {
      this.$router.go(-1);
    },
    formartDate(param) {
      if (param == null) {
        return "";
      }
      if(param.indexOf('.')){
        param = param.substring(0, 10);
      }
    
      let date = new Date(+param*1000);
      let Y = date.getFullYear() + "-";

      let M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1) + "-"
          : date.getMonth() + 1 + "-";
      let D =
        date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
      let h =
        date.getHours() < 10
          ? "0" + date.getHours() + ":"
          : date.getHours() + ":";
      let m =
        date.getMinutes() < 10
          ? "0" + date.getMinutes() + ":"
          : date.getMinutes() + ":";
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

      return Y + M + D + h + m + s;
    }
  }
};
</script>

<style scoped>
.down_page {
  display: block;
}
.down_page ul {
  display: inline-block;
  width: 100%;
}

.go_home {
  color: #7a0002;
  font-size: 18px;
  float: left;
  margin-left: 8px;
  font-weight: bold;
}
.attention {
  padding: 10px;
  float: left;
  font-size: 20px;
  color: blue;
  color: blue !important;
  text-decoration: underline;
}

.down_item {
  padding: 10px;
  width: 100%;
}
li {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  border-bottom: 1px #eeeeee solid;
  display: inline-block;
}
.item_icon {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 8px;
}
.item_center {
  float: left;
  margin-left: 20px;
  text-align: left;
  color: #333333;
  max-width: 60%;
  font-size: 14px;
}
.item_center span {
  display: block;
}
.item_click {
  float: right;
  border: 1px #7a0002 solid;
  padding: 4px 10px;
  color: #7a0002;
  border-radius: 6px;
  margin: 10px 0;
  color: #7a0002 !important;
}
.item_click:hover {
  background: #7a0002;
  color: white !important;
}
.load_more {
  width: 100px;
  margin: 10px auto;
  height: 40px;
  background-color: #eeeeee;
  border-radius: 10px;
  line-height: 40px;
  color: #333333;
}
</style>

