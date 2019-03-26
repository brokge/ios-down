<template>
  <div class="card-vaccine">
    <span v-show="tabTitle" class="card-title">{{ tabTitle }}</span>
    <div v-show="!loading" class="vaccine-common">
      <Row class="vaccine-common-row" :gutter="16">
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/1">卡介疫苗</a></span
            >
          </div>
        </Col>
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/2">脊灰疫苗(注射，灭活)</a>
            </span>
          </div>
        </Col>
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/3">流感嗜血杆菌疫苗(Hib 疫苗)</a>
            </span>
          </div>
        </Col>
      </Row>
      <Row class="vaccine-common-row" :gutter="16">
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/4">
                卡介疫苗
              </a>
            </span>
          </div>
        </Col>
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/6">
                脊灰疫苗(注射，灭活)
              </a>
            </span>
          </div>
        </Col>
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/7">
                流感嗜血杆菌疫苗(Hib 疫苗)
              </a>
            </span>
          </div>
        </Col>
      </Row>

      <Row class="vaccine-common-row" :gutter="16">
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/66">
                卡介疫苗
              </a>
            </span>
          </div>
        </Col>
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/77">
                脊灰疫苗(注射，灭活)
              </a>
            </span>
          </div>
        </Col>
        <Col span="8">
          <div class="vaccine-common-item">
            <span class="vaccine-common-item-title">
              <a href="/vaccine/detail/88">
                流感嗜血杆菌疫苗(Hib 疫苗)
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </div>
    <Spin v-show="loading" size="large"></Spin>
  </div>
</template>
<script>
export default {
  props: {
    tabTitle: String,
    loading: Boolean
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
</style>

