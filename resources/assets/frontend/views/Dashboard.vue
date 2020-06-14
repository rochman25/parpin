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
        <vx-card title="Statistik Perbandingan Alat">
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
            data: []
          },
          {
            name: "series2",
            data: []
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
            categories: []
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
    setSeries(alat, arus) {
      let categories = [];
      let group = arus.reduce((r, a) => {
        r[a.alat_id] = [...(r[a.alat_id] || []), a.arus];
        categories.push(a.created_at);
        return r;
      }, {});
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
      arr.map((item, index) =>
        // console.log(item.data[0])
        this.$set(this.lineAreaChartSpline.series, index, {
          name: item.name,
          data: item.data[0]
        })
      );
      let created_arr = Array.from(new Set(categories));
      created_arr.map((item, index) =>
        this.$set(
          this.lineAreaChartSpline.chartOptions.xaxis.categories,
          index,
          item
        )
      );
      console.log(this.lineAreaChartSpline);
    }
  },
  created() {
    if (!moduleAlat.isRegistered) {
      this.$store.registerModule("dataAlat", moduleAlat);
      moduleAlat.isRegistered = true;
    }
    this.$store.dispatch("dataAlat/fetchDataAlat").catch(err => {
      // console.error(err);
    });
    this.$store.dispatch("dataAlat/fetchStatisticArus").catch(err => {
      // console.error(err);
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