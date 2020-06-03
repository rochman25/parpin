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
          statisticTitle="Kasus Kebocoran"
          color="warning"
        />
      </div>
    </div>
  </div>
</template>
<script>
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import moduleAlat from "./../store/alat/moduleAlat.js";
import moduleNotifikasi from "./../store/notifikasi/moduleNotifikasi.js";
export default {
  components: {
    StatisticsCardLine
  },
  data() {
    return {};
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