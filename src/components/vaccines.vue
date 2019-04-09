<template>
  <div class="card-vaccine">
    <span v-show="tabTitle" class="card-title">{{ tabTitle }}</span>
    <div v-show="!loading" class="vaccine-common">
      <Empty v-show="!checkIsEmpty(itemsData)" />
      <Row class="vaccine-common-row" :gutter="16" v-for="row in rowNumber">
        <Col
          span="8"
          v-for="(item, index) in itemsData.slice((row - 1) * 3, row * 3)"
          :key="index"
        >
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a :href="getHref(item)" v-html="item.name"></a>
            </span>
          </div>
        </Col>
      </Row>
    </div>
    <Spin v-show="loading" size="large"></Spin>
  </div>
</template>
<script>
import empty from "@/components/empty.vue";
export default {
  data() {
    return {};
  },
  methods: {
    getHref(item) {
      return "/vaccine/detail/" + item.vaccineId;
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
  computed: {
    //计算属性会缓存计算的数据，如果不需要经常更新的数据，建议用计算属性。
    rowNumber: function() {
      if (this.checkIsUnderfined(this.itemsData)) {
        var length = this.itemsData.length;
        if (length <= 3) {
          return 1;
        } else {
          return (length - (length % 3)) / 3 + 1;
        }
      }
    }
  },
  components: {
    Empty: empty
  },
  props: {
    tabTitle: String,
    loading: Boolean,
    itemsData: Array
  }
};
</script>

<style>
.vaccine-common {
  width: 100%;
}
.vaccine-common-row {
  margin-bottom: 16px;
}

.vaccine-common-item {
  font-size: 0.8rem;
  text-align: center;
  border: 1px solid #f2f2f2;
  height: 80px;
  width: 100%;
  display: table;
  padding: 16px;
  cursor: pointer;
}
.vaccine-common-item-title {
  display: table-cell;
  vertical-align: middle;
  color: cadetblue;
  font-weight: 500;
}
.ivu-spin-dot {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  background-color: #39af78;
  width: 20px;
  height: 20px;
  animation: ani-spin-bounce 1s 0s ease-in-out infinite;
}
</style>

