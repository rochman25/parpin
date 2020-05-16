<template>
  <vx-card title="Daftar Microcontroller" subtitle="List data microcontroller">
    <div>
      <vs-table max-items="3" pagination :data="list">
        <template slot="thead">
          <vs-th>Nama</vs-th>
          <vs-th>Model</vs-th>
          <vs-th>Connection Type</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr,indextr) in data">
            <vs-td :data="data[indextr].nama">{{data[indextr].nama}}</vs-td>
            <vs-td :data="data[indextr].model">{{data[indextr].model}}</vs-td>
            <vs-td :data="data[indextr].connection_type">{{data[indextr].connection_type}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </vx-card>
</template>
<script>
import moduleMicro from "./../../../store/micro/moduleMicro.js";
export default {
  data() {
    return {
      isMounted: false
    };
  },
  computed: {
    list() {
      return this.$store.state.dataMicro.micro;
    }
  },
  created() {
    if (!moduleMicro.isRegistered) {
      this.$store.registerModule("dataMicro", moduleMicro);
      moduleMicro.isRegistered = true;
    }
    this.$store.dispatch("dataMicro/fetchDataMicro").catch(err => {
      console.error(err);
    });
  },
  mounted() {
    this.isMounted = true;
    // console.log(this.list)
  }
};
</script>