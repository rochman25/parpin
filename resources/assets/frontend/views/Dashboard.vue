<template>
  <div>
    <!-- ROW 1-->
    <div class="vx-row">
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
        <statistics-card-line
          hideChart
          class="mb-base"
          icon="CpuIcon"
          icon-right
          :statistic="totalAlat"
          statisticTitle="Jumlah Alat"
        />
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
        <statistics-card-line
          hideChart
          class="mb-base"
          icon="ActivityIcon"
          icon-right
          statistic="2"
          statisticTitle="Alat Terkoneksi"
          color="success"
        />
      </div>

      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
        <statistics-card-line
          hideChart
          class="mb-base"
          icon="ActivityIcon"
          icon-right
          statistic="0"
          statisticTitle="Alat Tidak Terkoneksi"
          color="danger"
        />
      </div>

      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
        <statistics-card-line
          hideChart
          class="mb-base"
          icon="AlertOctagonIcon"
          icon-right
          :statistic="totalNotifikasi"
          statisticTitle="Notifikasi Alat"
          color="warning"
        />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col md:w-1/1 w-full mb-base">
        <vx-card title="Statistik Harian Alat">
          <vue-apex-charts
            type="area"
            height="350"
            :options="lineAreaChartSpline.chartOptions"
            :series="lineAreaChartSpline.series"
          ></vue-apex-charts>
        </vx-card>
      </div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import moduleAlat from "./../store/alat/moduleAlat.js";
import moduleNotifikasi from "./../store/notifikasi/moduleNotifikasi.js";
export default {
  components: {
    StatisticsCardLine,
    VueApexCharts
  },
  data() {
    return {
      themeColors: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
      lineAreaChartSpline: {
        series: [
          {
            name: "series1",
            data: [
              10,
              1,
              2,
              3,
              4,
              5,
              1000,
              200,
              100,
              100,
              100,
              200,
              300,
              400,
              100
            ]
          },
          {
            name: "series2",
            data: [
              20,
              2,
              3,
              10,
              200,
              100,
              100,
              100,
              200,
              300,
              400,
              500,
              100,
              200,
              300
            ]
          }
        ],
        chartOptions: {
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          colors: this.themeColors,
          xaxis: {
            type: "datetime",
            categories: [
              // "2018-09-19T00:00:00.891Z",
              // "2018-09-19T01:30:00.891Z",
              // "2018-09-19T02:30:00.891Z",
              // "2018-09-19T03:30:00.891Z",
              // "2018-09-19T04:30:00.891Z",
              // "2018-09-19T05:30:00.891Z",
              // "2018-09-19T06:30:00.891Z"
            ]
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm"
            }
          }
        }
      }
    };
  },
  computed: {
    totalAlat() {
      this.setSeries(
        this.$store.state.dataAlat.alat,
        this.$store.state.dataAlat.arus
      );
      // console.log(this.$store.state.dataAlat.jumlah);
      return this.$store.state.dataAlat.jumlah;
    },
    totalNotifikasi() {
      return this.$store.state.dataNotifikasi.jumlah;
    },
    arus() {
      return this.$store.state.dataAlat.arus;
    }
  },
  methods: {
    elapsedTime(startTime) {
      let x = new Date(startTime);
      let now = new Date();
      var timeDiff = now - x;
      timeDiff /= 1000;

      var seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);

      var minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);

      var hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);

      var days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);

      var years = timeDiff;

      if (years > 0) {
        return years + (years > 1 ? " Years " : " Year ") + "ago";
      } else if (days > 0) {
        return days + (days > 1 ? " Days " : " Day ") + "ago";
      } else if (hours > 0) {
        return hours + (hours > 1 ? " Hrs " : " Hour ") + "ago";
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? " Mins " : " Min ") + "ago";
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? " sec ago" : "just now");
      }

      return "Just Now";
    },
    setSeries(alat, arus) {
      // var arus_ = [];
      // arus.forEach(function(item, index) {
      //   alat.forEach(function(item_, index_) {
      //     arus_[index_] = {alat_id: item_._id,name: item_.nama,data:[]};
      //     // console.log(item_._id)
      //     if(arus_[index_].alat_id == item.alat_id){
      //       console.log(item.arus)
      //     }
      //     // arus_[index_].name.data.push(item.arus)
      //     // console.log(item.alat_id);
      //     // if (item.alat_id == item_.alat_id) {
      //       // this.$set(this.lineAreaChartSpline.series, index_, {
      //       //   data: [item.arus]
      //       // })
      //     // }
      //   });
      //   // console.log(item);
      // });
      // console.log(arus_);
      // alat.forEach(function(item, index) {
      //   this.$store
      //     .dispatch("dataAlat/fetchStatisticArus", item._id)
      //     .catch(err => {
      //       console.error(err);
      //     });
      // });
      let group = arus.reduce((r, a) => {
        // console.log("a", a);
        // console.log("r", r);
        r[a.alat_id] = [...(r[a.alat_id] || []), a.arus];
        return r;
      }, {});
      let categories = arus.reduce((r, a) => {
        // console.log("a", a);
        // console.log("r", r);
        r[a.alat_id] = [...(r[a.alat_id] || []), a.created_at];
        return r;
      }, {});
      // let created_at = arus.reduce((r, a) =)
      var arr = [];
      // console.log("group", categories);
      var i;
      for (i = 0; i < alat.length; i++) {
        // console.log(i.nama);
        // var anoArr = [];
        arr[i] = {};
        arr[i].name = alat[i].nama;
        // anoArr.push(group[alat[i]._id]);
        arr[i].data = [];
        arr[i].data.push(group[alat[i]._id]);
      }
      // console.log(categories);
      // arr.map((item, index) =>
      //   this.$set(this.lineAreaChartSpline.series, index, {
      //     name: item.name,
      //     data: item.data
      //   })
      // );
      categories.map((item, index) =>
        // this.$set(
        //   this.lineAreaChartSpline.chartOptions.xaxis.categories,
        //   index,
        //   item
        // )
        console.log(index)
      );
      console.log(this.lineAreaChartSpline);
    },
    setArusData(alat) {
      // this.$store.dispatch("dataAlat/fetchStatisticArus",id).catch(err => {
      //     console.error(err);
      // });
    }
  },
  created() {
    if (!moduleAlat.isRegistered) {
      this.$store.registerModule("dataAlat", moduleAlat);
      moduleAlat.isRegistered = true;
    }
    this.$store.dispatch("dataAlat/fetchDataAlat").catch(err => {
      console.error(err);
    });
    this.$store.dispatch("dataAlat/fetchStatisticArus").catch(err => {
      console.error(err);
    });

    if (!moduleNotifikasi.isRegistered) {
      this.$store.registerModule("dataNotifikasi", moduleNotifikasi);
      moduleNotifikasi.isRegistered = true;
    }
    this.$store.dispatch("dataNotifikasi/fetchDataNotifikasi").catch(err => {
      console.error(err);
    });
  }
};
</script>