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
          statistic="2"
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
          statistic="13"
          statisticTitle="Kasus Kebocoran"
          color="warning"
        />
      </div>
    </div>
  </div>
</template>
<script>
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
export default {
  components: {
    StatisticsCardLine
  },
  data() {
    return {};
  },
  created() {
    console.log(localStorage.getItem("accessToken"));
  }
};
</script>