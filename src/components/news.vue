<template>
  <div class="card-vaccine">
    <span class="card-title">相关新闻</span>
    <div class="card-content">
      <Empty v-show="!checkIsEmpty(newsData)" />
      <ul>
        <li v-for="(item, index) in newsData" :key="index">
          <div class="news-content">
            <span class="news-title">
              <a :href="getDetailUrl(item)" v-html="item.title">
               
              </a>
            </span>
            <a class="news-from" v-bind:href="item.fromUrl" target="_blank">
              {{ item.fromSource}}
            </a>
            <p class="news-desc">
              {{ item.summary }}
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import empty from "@/components/empty.vue";
export default {
  components: {
    Empty: empty
  },
  methods: {
    getDetailUrl(item) {
      return "/news/detail?new_id=" + item.id;
    },
    checkIsUnderfined(object) {
      if (object == undefined || object == {} || object == []) {
        return false;
      } else {
        return true;
      }
    },
    checkIsEmpty(object) {
      if (
        object == undefined ||
        object == {} ||
        object == [] ||
        object.length == 0
      ) {
        return false;
      } else {
        return true;
      }
    }
  },
  props: {
    newsData: Array
  }
};
</script>
<style>
.card-content ul li {
  text-align: start;
  padding: 0 0px;
  height: 100%;
  list-style: none;
}
.card-content ul li hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #eeeeee;
}

.news-content {
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  display: inline-block;
}
.news-title {
  width: 80%;
  float: left;
  margin: auto 0;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 500;
}
.news-desc {
  width: 100%;
  float: left;
  margin: 8px 0;
  text-overflow: ellipsis;
  font-size: 13px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-align: justify;
  line-height: 16pt;
}
.news-from {
  font-size: 12px;
  float: right;
  text-align: end;
}
.news-from::before {
  content: "来源：";
}
</style>

