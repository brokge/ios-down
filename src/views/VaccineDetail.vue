<template>
  <div>
    <div class="card-vaccine">
      <div class="detail-container" v-if="checkIsUnderfined(vaccineDetail)">
        <span class="detail-title">
          {{ vaccineDetail.name }}{{ vaccineId }}
        </span>
        <hr />
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">常用名</span>
          <p class="vaccine-detail-content">
            {{ vaccineDetail.aliasName }}
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">适用年龄</span>
          <p class="vaccine-detail-content">
            {{ vaccineDetail.months }}
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">是否必须</span>
          <p class="vaccine-detail-content" v-text="getRecommentType(vaccineDetail.recommendType)">
            {{ vaccineDetail.recommendType }}
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">自费/免费</span>
          <p class="vaccine-detail-content">
            {{ vaccineDetail.feeType }}
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">计量单位</span>
          <p class="vaccine-detail-content">
            {{ vaccineDetail.injectionNumber }}
          </p>
        </div>

        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">关联信息</span>
          <p class="vaccine-detail-content">
            第1计/总4计
          </p>
        </div>
        
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">适用说明</span>
          <p class="vaccine-detail-content">
            {{ vaccineDetail.effect }}
          </p>
        </div>

        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">相关信息</span>
          <p class="vaccine-detail-content">
            {{ vaccineDetail.description }}
          </p>
        </div>
      </div>
    </div>
    <News></News>
  </div>
</template>
<script>
import news from "@/components/news.vue";
import API from "@/api/VaccinesApi";
export default {
  data() {
    return {
      vaccineDetail: {},
      vaccineAbout: []
    };
  },
  methods: {
    fetchData() {
      var vm = this;
      var paramJson = {};
      paramJson.id=this.vaccineId;
      API.getVaccineDetail(paramJson)
        .then(function(response) {
          console.log("数据不为空", response);
          vm.vaccineDetail = response.data;
          vm.vaccineAbout = response.data.about;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getRecommentType(recommendType){
      if(recommendType==1){
        return "必须";
      }else if(recommendType==2){
        return "推荐";
      }else {
        return "可选";
      }
    },
    checkIsUnderfined(object) {
      if (object == undefined || object == {} || object == []) {
        return false;
      } else {
        return true;
      }
    }
  },
  created() {
    this.fetchData();
    console.log("keyword", this.$store.getters.defaultSearchKeyWord);
  },
  components: {
    News: news
  },
  props: {
    vaccineId: String
  }
};
</script>
<style>
.detail-container {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: inline-block;
}

.detail-title {
  width: 80%;
  float: left;
  margin: auto 0;
  margin-bottom: 10px;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 500;
  color: #39af78;
}
.detail-container hr {
  width: 100%;
  height: 1px;
  float: left;
  border: none;
  margin-bottom: 10px;
  border-top: 1px solid #39af78;
}

.vaccine-detail-tab {
  width: 100%;
  display: block;
  float: left;
}
.vaccine-detail-tabtitle {
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  float: left;
  text-align: left;
}
.vaccine-detail-content {
  font-size: 14px;
  margin: 8px 0;
  float: left;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: justify;
  line-height: 18pt;
  color: darkgrey;
}

.detail-from {
  display: block;
  font-size: 12px;
  float: left;
  margin-top: 10px;
  margin-bottom: 10px;
}
.detail-from::before {
  content: "来源：";
}
</style>


