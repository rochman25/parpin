<template>
  <vx-card title="Daftar Pengguna" subtitle="List data akun pengguna">
    <div>
      <vs-table max-items="3" pagination:data="list">
        <template slot="thead">
          <vs-th>Username</vs-th>
          <vs-th>Email</vs-th>
          <vs-th>No Telphone</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr,indextr) in data">
            <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>
            <vs-td :data="data[indextr].username">{{data[indextr].username}}</vs-td>
            <vs-td :data="data[indextr].no_telp">{{data[indextr].no_telp}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </vx-card>
</template>

<script>
import modulePengguna from "./../../../store/pengguna/modulePengguna.js";
export default {
  data() {
    return {
      isMounted: false
    };
  },
  computed: {
    list() {
      return this.$store.state.dataPengguna.pengguna;
    }
  },
  created() {
    if (!modulePengguna.isRegistered) {
      this.$store.registerModule("dataPengguna", modulePengguna);
      modulePengguna.isRegistered = true;
    }
    this.$store.dispatch("dataPengguna/fetchDataPengguna").catch(err => {
      console.error(err);
    });
  },
  mounted() {
    this.isMounted = true;
    // console.log(this.list)
  }
};
</script>