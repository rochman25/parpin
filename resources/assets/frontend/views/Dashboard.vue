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
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: "series2",
            data: [11, 32, 45, 32, 34, 52, 41]
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
              "2018-09-19T00:00:00",
              "2018-09-19T01:30:00",
              "2018-09-19T02:30:00",
              "2018-09-19T03:30:00",
              "2018-09-19T04:30:00",
              "2018-09-19T05:30:00",
              "2018-09-19T06:30:00"
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
      // console.log(this.$store.state.dataAlat.jumlah);
      return this.$store.state.dataAlat.jumlah;
    },
    totalNotifikasi() {
      return this.$store.state.dataNotifikasi.jumlah;
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