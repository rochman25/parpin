<template>
  <vx-card title="Daftar Pengguna" subtitle="List data akun pengguna">
    <div>
      <data-view-sidebar
        :isSidebarActive="addNewDataSidebar"
        @closeSidebar="toggleDataSidebar"
        :data="sidebarData"
      />
      <vs-table max-items="5" pagination :data="list">
        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
          <div class="flex flex-wrap-reverse items-center data-list-btn-container">
            <!-- ADD NEW -->
            <div
              class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary"
              @click="addNewData"
            >
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Tambah Pengguna</span>
            </div>
          </div>
        </div>
        <template slot="thead">
          <vs-th>Username</vs-th>
          <vs-th>Email</vs-th>
          <vs-th>No Telphone</vs-th>
          <vs-th>Aksi</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr,indextr) in data">
            <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>
            <vs-td :data="data[indextr].username">{{data[indextr].username}}</vs-td>
            <vs-td :data="data[indextr].no_telp">{{data[indextr].no_telp}}</vs-td>
            <vs-td class="whitespace-no-wrap">
              <feather-icon
                v-if="data[indextr].username != username"
                icon="EditIcon"
                svgClasses="w-5 h-5 hover:text-primary stroke-current"
                @click.stop="editData(tr)"
              />
              <feather-icon
                v-if="data[indextr].username != username"
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
import DataViewSidebar from "./FormPengguna.vue";
import modulePengguna from "./../../../store/pengguna/modulePengguna.js";
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
      return this.$store.state.dataPengguna.pengguna;
    },
    username() {
      // console.log(JSON.parse(localStorage.getItem("userInfo")).username)
      return JSON.parse(localStorage.getItem("userInfo")).username;
    }
  },
  methods: {
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData(id) {
      this.$store.dispatch("dataPengguna/removeItem", id).catch(err => {
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