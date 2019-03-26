<template>
  <div>
    <div class="card-vaccine">
      <div class="detail-container">
        <span class="detail-title">
          卡介疫苗{{vaccineId}}
        </span>
        <hr />
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">常用名</span>
          <p class="vaccine-detail-content">
            卡介苗
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">适用年龄</span>
          <p class="vaccine-detail-content">
            12 个月
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">是否必须</span>
          <p class="vaccine-detail-content">
            必打/推荐
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">计量单位</span>
          <p class="vaccine-detail-content">
            第1计/总4计
          </p>
        </div>

        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">关联信息</span>
          <p class="vaccine-detail-content">
            第1计/总4计
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">相关信息</span>
          <p class="vaccine-detail-content">
            第1计/总4计
          </p>
        </div>
        <div class="vaccine-detail-tab">
          <span class="vaccine-detail-tabtitle">适用说明</span>
          <p class="vaccine-detail-content">
            山东省疫苗异常问题补充问题查询山东a疫苗异常a题补充问题查询山东省疫苗异常问题补充问题查询山东省疫苗异常问题补充问题查询,山东省疫苗异常问题补充问题查询山东省疫苗异常问题补充问题查询山东省疫苗异常问题补充问题查询山东省疫苗异常问题补充问题查询
            ,山东省疫苗异常问题补充问题查询山东省疫苗异常问题补充问题查询山东省疫苗异常问题补充问题查询山东省疫苗异常问题补充问题查询
          </p>
        </div>
      </div>
    </div>
    <News></News>
  </div>
</template>
<script>
import news from "@/components/news.vue";
export default {
  components: {
    News: news
  },
  props:{
    vaccineId:Number
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


