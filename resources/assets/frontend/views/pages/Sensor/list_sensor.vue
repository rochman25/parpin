<template>
  <vx-card title="Daftar Sensor" subtitle="List data sensor">
    <div>
      <vs-table max-items="3" pagination :data="list">
        <template slot="thead">
          <vs-th>Nama</vs-th>
          <vs-th>Model</vs-th>
          <vs-th>Working Range</vs-th>
          <vs-th>Water Pressure</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr,indextr) in data">
            <vs-td :data="data[indextr].nama">{{data[indextr].nama}}</vs-td>
            <vs-td :data="data[indextr].model">{{data[indextr].model}}</vs-td>
            <vs-td :data="data[indextr].working_range">{{data[indextr].working_range}}</vs-td>
            <vs-td :data="data[indextr].water_pressure">{{data[indextr].water_pressure}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </vx-card>
</template>
<script>
import moduleSensor from "./../../../store/sensor/moduleSensor.js";
export default {
  data() {
    return {
      isMounted: false
    };
  },
  computed: {
    list() {
      return this.$store.state.dataSensor.sensor;
    }
  },
  created() {
    if (!moduleSensor.isRegistered) {
      this.$store.registerModule("dataSensor", moduleSensor);
      moduleSensor.isRegistered = true;
    }
    this.$store.dispatch("dataSensor/fetchDataSensor").catch(err => {
      console.error(err);
    });
  },
  mounted() {
    this.isMounted = true;
    // console.log(this.list)
  }
};
</script>