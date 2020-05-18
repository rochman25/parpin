<template>
  <vx-card title="Daftar Sensor" subtitle="List data sensor">
    <div>
      <data-view-sidebar
        :isSidebarActive="addNewDataSidebar"
        @closeSidebar="toggleDataSidebar"
        :data="sidebarData"
      />
      <vs-table max-items="10" pagination :data="list">
        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
          <div class="flex flex-wrap-reverse items-center data-list-btn-container">
            <!-- ADD NEW -->
            <div
              class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary"
              @click="addNewData"
            >
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Tambah Sensor</span>
            </div>
          </div>
        </div>
        <template slot="thead">
          <vs-th>Nama</vs-th>
          <vs-th>Model</vs-th>
          <vs-th>Working Range</vs-th>
          <vs-th>Water Pressure</vs-th>
          <vs-th>Aksi</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr,indextr) in data">
            <vs-td :data="data[indextr].nama">{{data[indextr].nama}}</vs-td>
            <vs-td :data="data[indextr].model">{{data[indextr].model}}</vs-td>
            <vs-td :data="data[indextr].working_range">{{data[indextr].working_range}}</vs-td>
            <vs-td :data="data[indextr].water_pressure">{{data[indextr].water_pressure}}</vs-td>
            <vs-td class="whitespace-no-wrap">
              <feather-icon
                icon="EditIcon"
                svgClasses="w-5 h-5 hover:text-primary stroke-current"
                @click.stop="editData(tr)"
              />
              <feather-icon
                icon="TrashIcon"
                svgClasses="w-5 h-5 hover:text-danger stroke-current"
                class="ml-2"
                @click.stop="deleteData(tr._id)"
              />
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </vx-card>
</template>
<script>
import DataViewSidebar from "./FormSensor.vue";
import moduleSensor from "./../../../store/sensor/moduleSensor.js";
export default {
  components: {
    DataViewSidebar
  },
  data() {
    return {
      isMounted: false,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    list() {
      return this.$store.state.dataSensor.sensor;
    }
  },
  methods: {
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData(id) {
      this.$store.dispatch("dataSensor/removeItem", id).catch(err => {
        console.error(err);
      });
    },
    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      // console.log(data)
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    getOrderStatusColor(status) {
      if (status == "on_hold") return "warning";
      if (status == "delivered") return "success";
      if (status == "canceled") return "danger";
      return "primary";
    },
    getPopularityColor(num) {
      if (num > 90) return "success";
      if (num > 70) return "primary";
      if (num >= 50) return "warning";
      if (num < 50) return "danger";
      return "primary";
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
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