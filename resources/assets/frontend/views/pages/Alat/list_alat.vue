<template>
  <div id="demo-card-analytics">
    <data-view-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <div class="vx-row">
      <div class="vx-col">
        <div
          class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary"
          @click="addNewData"
        >
          <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
          <span class="ml-2 text-base text-primary">Tambah Alat</span>
        </div>
      </div>
    </div>
    <div class="vx-row">
      <!-- SUPPORT TRACKER CHART+- -->
      <!-- <template slot-scope="{data}"> -->
      <div
        class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base"
        v-for="(alatInfo,index) in list"
        :key="index"
      >
        <vx-card :title="alatInfo.nama">
          <!-- CARD ACTION -->
          <template slot="actions">
            <vs-dropdown vs-trigger-click class="dd-actions cursor-pointer mb-4">
              <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
              <vs-dropdown-menu>
                <vs-dropdown-item>
                  <span class="flex items-center" @click="navigate_to_detail_view(alatInfo._id)">
                    <feather-icon icon="InfoIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Detail</span>
                  </span>
                </vs-dropdown-item>

                <vs-dropdown-item>
                  <span class="flex items-center" @click.stop="editData(alatInfo)">
                    <feather-icon icon="EditIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Ubah</span>
                  </span>
                </vs-dropdown-item>

                <vs-dropdown-item>
                  <span class="flex items-center" @click.stop="deleteData(alatInfo._id)">
                    <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Hapus</span>
                  </span>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </template>

          <div slot="no-body" v-if="test_series[alatInfo._id].supportTracker.analyticsData">
            <div class="vx-row text-center">
              <!-- Chart -->
              <div
                class="vx-col w-full lg:w-5/5 md:w-full sm:w-5/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-3"
              >
                <vue-apex-charts
                  type="radialBar"
                  height="350"
                  :options="analyticsData.supportTrackerRadialBar.chartOptions"
                  :series="test_series[alatInfo._id].supportTracker.series"
                />
              </div>
            </div>
            <!-- Support Tracker Meta Data -->
            <div class="flex flex-row justify-between px-8 pb-5">
              <p
                class="text-center"
                v-for="(val, key) in test_series[alatInfo._id].supportTracker.analyticsData.meta"
                :key="key"
              >
                <span class="block">{{ key }}</span>
                <span class="text-2xl font-semibold">{{ val }}</span>
              </p>
            </div>
          </div>
        </vx-card>
      </div>
      <!-- </template> -->
    </div>
  </div>
</template>
<script>
import DataViewSidebar from "./FormAlat.vue";
import moduleAlat from "./../../../store/alat/moduleAlat.js";
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "./../../../components/statistics-cards/StatisticsCardLine";
import analyticsData from "./analyticData.js";
const topicName = "alat:5ebe4cd46246ed22f9afc08f";

export default {
  data() {
    return {
      isMounted: false,
      analyticsData: analyticsData,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      popupActive: false,
      ws_stat: false,
      test_series: new Array,
      series:[0]
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    DataViewSidebar
  },
  computed: {
    list() {
      //   console.log(this.$store.state.dataAlat);
      this.foo(this.$store.state.dataAlat.alat);
      return this.$store.state.dataAlat.alat;
    },
  },
  created() {
    if (!moduleAlat.isRegistered) {
      this.$store.registerModule("dataAlat", moduleAlat);
      moduleAlat.isRegistered = true;
    }
    this.$store.dispatch("dataAlat/fetchDataAlat").catch(err => {
      console.error(err);
    });
    console.log(this.$ws.socket);
  },
  mounted() {
    this.isMounted = true;

    //ws
  },
  beforeDestroy() {
    //Remove listeners when component destroy
    // this.$ws.$off(`${topicName}|message`, this.handleAboutMessageEvent);
    // this.$ws.$off("message", this.handleAboutMessageEvent);
  },
  methods: {
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData(id) {
      this.$store.dispatch("dataAlat/removeItem", id).catch(err => {
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
    },
    navigate_to_detail_view(id) {
      this.$router
        .push({
          name: "parpin-detail-alat",
          params: { id: id }
        })
        .catch(() => {});
    },
    handleAboutMessageEvent(data) {
      // this.test_series[data.alat_id].supportTracker.series = [data.arus]
      // this.test_series[data.alat_id].supportTracker.analyticsData.meta.Status = data.status
      // console.log("handled in src/views/list_alat.vue", data);
    },
    sendHello() {
      this.$ws.$emitToServer(topicName, "message", { pesan: "haalllo" });
      this.handleAboutMessageEvent;
    },
    foo(item) {
      var i;
      for (i = 0; i < item.length; i++) {
        this.$store.commit("SET_ALAT_ID", item[i]);
        this.bar(item[i]._id);
        this.$set(this.test_series,item[i]._id,{
          supportTracker: {
            analyticsData: {
              openTickets: 163,
              meta: {
                Status: "offline",
                "Waktu Response": 0 + " detik"
              }
            },
            series: [this.$store.state.alat_id[item[i]._id].series],
            maxArus: item[i].max_arus
          }
        });
        // console.log(item[i]);
      }
      // console.log(this.test_series);
    },
    bar(id) {
      let subscription = this.$ws.socket.getSubscription("alat:" + id);
      if (!subscription) {
        subscription = this.$ws.subscribe("alat:" + id);
      }
      subscription.on("message", data => {
        var arus = (data.arus/500) * 100
        // var arus = (data.arus/(this.test_series[id].supportTracker.maxArus + 10)) * 100
        this.test_series[id].supportTracker.series = [arus.toFixed(2)];
        this.test_series[id].supportTracker.analyticsData.meta.Status = data.status
        // this.$ws.$on('alat:'|message', this.handleAboutMessageEvent);
        // console.log("Message subscribe with id " + id, this.test_series[id]);
        console.log(this.test_series[id].supportTracker.maxArus)
      });
    },
    // getSeriess(id) {
    //   // console.log(this.$store.state.alat_id[id]);
    //   // this.$ws.$on('|message', this.handleAboutMessageEvent);
    //   return [this.$store.state.alat_id[id].series];
    // }
  }
};
</script>
<style lang="scss">
#demo-card-analytics {
  .tasks-today-container {
    .tasks-today__task {
      transition: background 0.15s ease-out;
      .tasks-today__actions {
        display: none;
      }

      &:hover {
        background: rgba(var(--vs-primary), 0.04);
        .tasks-today__actions {
          display: flex;
        }
      }
    }
  }
}
</style>