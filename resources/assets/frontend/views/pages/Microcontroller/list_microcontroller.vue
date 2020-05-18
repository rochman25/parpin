<template>
  <vx-card title="Daftar Microcontroller" subtitle="List data microcontroller">
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
              <span class="ml-2 text-base text-primary">Tambah Microcontroller</span>
            </div>
          </div>
        </div>
        <template slot="thead">
          <vs-th>Nama</vs-th>
          <vs-th>Model</vs-th>
          <vs-th>Connection Type</vs-th>
          <vs-th>Aksi</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr,indextr) in data">
            <vs-td :data="data[indextr].nama">{{data[indextr].nama}}</vs-td>
            <vs-td :data="data[indextr].model">{{data[indextr].model}}</vs-td>
            <vs-td :data="data[indextr].connection_type">{{data[indextr].connection_type}}</vs-td>
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
import DataViewSidebar from "./FormMicro.vue";
import moduleMicro from "./../../../store/micro/moduleMicro.js";
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
  methods: {
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData(id) {
      this.$store.dispatch("dataMicro/removeItem", id).catch(err => {
        console.error(err);
      });
    },
    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      // console.log(data)
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    }
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