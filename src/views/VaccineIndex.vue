<template>
  <div>
    <div class="search-content">
      <AutoComplete
        class="search-input"
        v-model="value4"
        icon="ios-search"
        placeholder="输入疾病/疫苗名称"
        size="large"
        clearable
      >
      </AutoComplete>
      <button class="btn" type="button">搜索</button>
    </div>
    <Vaccines
      tabTitle="常搜索的疫苗"
      v-bind:loading="isVaccineLoading"
      v-bind:itemsData="commonVaccines"
    >
    </Vaccines>
    <News v-bind:newsData="lastNews"></News>
  </div>
</template>
<script>
import news from "@/components/news.vue";
import vaccines from "@/components/vaccines.vue";
import API from "@/api/VaccinesApi";
export default {
  data() {
    return {
      isVaccineLoading: false,
      lastNews: [],
      commonVaccines: [],
      value4: "",
      data4: [
        {
          title: "话题",
          children: [
            {
              title: "iView",
              count: 10000
            },
            {
              title: "iView UI",
              count: 10600
            }
          ]
        },
        {
          title: "问题",
          children: [
            {
              title: "iView UI 有多好",
              count: 60100
            },
            {
              title: "iView 是啥",
              count: 30010
            }
          ]
        },
        {
          title: "文章",
          children: [
            {
              title: "iView 是一个设计语言",
              count: 100000
            }
          ]
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.getLastNews();
    this.getCommonVaccine();
  },
  methods: {
    getLastNews() {
      var self = this;
      API.searchRecommandNews()
        .then(function(response) {
          console.log("bb", response);
          self.lastNews = response.data.items;
        })
        .catch(function(error) {
          console.log("bb", error); 
        });
    },
    getCommonVaccine() {
      var self = this;
      self.isVaccineLoading = true;
      API.searchCommonVaccine()
        .then(function(response) {
          console.log("aa", response);
          self.commonVaccines = response.data.items;
          self.isVaccineLoading = false;
        })
        .catch(function(error) {
          console.log("aa",erroe);
          self.commonVaccines = [];
          self.isVaccineLoading = false;
        });
    }
  },
  components: {
    News: news,
    Vaccines: vaccines
  }
};
</script>
<style>
.search-content {
  width: 80%;
  max-width: 800px;
  margin: 40px auto 40px auto;
  vertical-align: middle;
}
.search-input {
  width: 60%;
  margin: 0px auto 0px auto;
}

.demo-auto-complete-item {
  padding: 4px 0;
  border-bottom: 1px solid #f6f6f6;
}
.demo-auto-complete-group {
  font-size: 12px;
  padding: 4px 6px;
}
.demo-auto-complete-group span {
  color: #666;
  font-weight: bold;
}
.demo-auto-complete-group a {
  float: right;
}
.demo-auto-complete-count {
  float: right;
  color: #999;
}
.demo-auto-complete-more {
  display: block;
  margin: 0 auto;
  padding: 4px;
  text-align: center;
  font-size: 12px;
}

.ivu-input-large {
  font-size: 14px;
  padding: 8px 9px;
  height: 48px;
}
.ivu-input-wrapper-large .ivu-input-icon {
  font-size: 18px;
  height: 48px;
  line-height: 48px;
}
.btn {
  padding: 8px 20px;
  background-color: #39af78;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  margin: auto 20px;
  vertical-align: middle;
  border: 1px solid #39af78;
  cursor: pointer;
}
.btn:hover {
  padding: 8px 20px;
  background-color: #1b5238;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  margin: auto 20px;
  vertical-align: middle;
  border: 1px solid #1b5238;
  cursor: pointer;
}
.btn:active {
  padding: 8px 20px;
  background-color: #1b5238;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  margin: auto 20px;
  vertical-align: middle;
  border: 1px solid #1b5238;
  cursor: pointer;
  box-shadow: none;
}
</style>
