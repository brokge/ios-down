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
      <div></div>
    </div>
    <div class="vbm-vaccine-content">
      <Vaccines
        v-bind:loading="isLoading"
        v-bind:itemsData="vaccineItems"
        v-bind:showSubtitle=true
      ></Vaccines>
    </div>
  </div>
</template>
<script>
import VueSlideBar from "vue-slide-bar";
import Vaccines from "@/components/vaccines.vue";
import API from "@/api/VaccinesApi";
export default {
  name: "VaccineByMonth",
  components: {
    VueSlideBar,
    Vaccines
  },
  data() {
    return {
      isLoading: false,
      vaccineItems: [],
      rangeValue: {},
      slider: {
        lineHeight: 4,
        value: 0,
        data: [0, 1, 2, 3, 4, 5, 6, 8, 9, 12, 14, 18, 24, 26, 36, 48, 72],
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
  created() {
    var initVal = {
      label: "出生",
      value: "0"
    };
    this.requestApi(initVal);
  },
  methods: {
    callbackRange(val) {
      console.log("month", val.value);
      this.rangeValue = val;
      this.requestApi(val);
    },
    requestApi(val) {
      let self = this;
      this.isLoading = true;
      API.searchVaccineByMonth(val.value)
        .then(function(response) {
          self.isLoading = false;
          self.vaccineItems = response.data.items;
          console.log("aa", response);
        })
        .catch(function() {
          self.isLoading = false;
        });
    }
  }
};
</script>
<style>
.vbm-vaccine-content {
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
</style>


