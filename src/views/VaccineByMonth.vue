<template>
  <div>
    <div class="card-vaccine">
      <VueSlideBar
        v-model="slider.value"
        :data="slider.data"
        :range="slider.range"
        :lineHeight="slider.lineHeight"
        :labelStyles="{ color: '#39af78', backgroundColor: '#39af78' }"
        :processStyle="{ backgroundColor: '#eeeeee' }"
        @callbackRange="callbackRange"
      >
        <template slot="tooltip" slot-scope="tooltip">
          <div class="slider-tooltip">
            <span>
              {{ slider.value }}
            </span>
          </div>
        </template>
      </VueSlideBar>
      <div>
      </div>
    </div>
    <div class="vbm-vaccine-content">
    <Vaccines v-bind:loading="isLoading"></Vaccines>
    </div>
  </div>
</template>
<script>
import VueSlideBar from "vue-slide-bar";
import Vaccines from "@/components/vaccines.vue";
import { request } from "http";
import { truncate } from "fs";

export default {
  name: "WithLabel",
  components: {
    VueSlideBar,
    Vaccines
  },
  data() {
    return {
      isLoading: false,
      rangeValue: {},
      slider: {
        lineHeight: 4,
        value: 0,
        data: [0, 1, 2, 3, 4, 5, 6, 8, 9, 12, 13, 14, 18, 24, 26, 36, 48, 72],
        range: [
          {
            label: "出生",
            value: "0"
          },
          {
            label: "1 月",
            value: "1"
          },
          {
            label: "2 月",
            value: "2",
            isHide: true
          },
          {
            label: "3 月",
            value: "3"
          },
          {
            label: "4 月",
            isHide: true,
            value: "4"
          },
          {
            label: "5 月",
            value: "5"
          },
          {
            label: "6 月",
            value: "6"
          },
          {
            label: "8 月",
            value: "8"
          },
          {
            label: "9 月",
            value: "9"
          },
          {
            label: "1 岁",
            value: "12"
          },
          {
            label: "13 月",
            value: "13"
          },
          {
            label: "14 月",
            value: "14"
          },
          {
            label: "18 月",
            value: "18"
          },
          {
            label: "2 岁",
            value: "24"
          },
          {
            label: "26 月",
            value: "26"
          },
          {
            label: "3 岁",
            value: "36"
          },
          {
            label: "4 岁",
            value: "48"
          },
          {
            label: "6 岁",
            value: "72"
          }
        ]
      }
    };
  },
  methods: {
    callbackRange(val) {
      this.rangeValue = val;
      this.requestApi(val);
    },
    requestApi(val) {
      let self = this;
      this.isLoading = true;
      setTimeout(function() {
        self.isLoading = false;
        console.log(self.isLoading);
      }, 2000);
      console.log(val.value);
    }
  }
};
</script>
<style>
.vbm-vaccine-content{
    min-height: 400px;
}
.slider-tooltip {
  width: 20px;
  height: 26px;
  color: white;
  background: url("../assets/icon/rectangle-slide.svg");
}
.vue-slide-bar {
  position: relative;
  display: block;
  border-radius: 15px;
  background-color: #eeeeee !important;
  cursor: pointer;
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


