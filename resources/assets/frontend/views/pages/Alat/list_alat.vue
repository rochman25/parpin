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
                  <span class="flex items-center" @click="sendHello()">
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

          <div slot="no-body" v-if="supportTracker.analyticsData">
            <div class="vx-row text-center">
              <!-- Chart -->
              <div
                class="vx-col w-full lg:w-5/5 md:w-full sm:w-5/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-3"
              >
                <vue-apex-charts
                  type="radialBar"
                  height="350"
                  :options="analyticsData.supportTrackerRadialBar.chartOptions"
                  :series="supportTracker.series"
                />
              </div>
            </div>
            <!-- Support Tracker Meta Data -->
            <div class="flex flex-row justify-between px-8 pb-5">
              <p
                class="text-center"
                v-for="(val, key) in supportTracker.analyticsData.meta"
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
const topicName = "alat:*";

export default {
  data() {
    return {
      isMounted: false,
      supportTracker: {
        analyticsData: {
          openTickets: 163,
          meta: {
            Status: "online",
            // "": 63,
            "Waktu Response": 0.23 + " detik"
          }
        },
        series: [0]
      },
      analyticsData: analyticsData,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      popupActive: false,
      ws_stat: false
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
      return this.$store.state.dataAlat.alat;
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
    // if (this.ws_stat == false) {
    // this.connect_ws();
    // }
  },
  mounted() {
    this.isMounted = true;
    // console.log(this.$store.state.dataAlat);
    //ws
    this.$ws.$on(`${topicName}|message`, this.handleAboutMessageEvent);
    // this.sendHello()
    this.$ws.$on("message", this.handleAboutMessageEvent);
  },
  beforeDestroy(){
    //Remove listeners when component destroy
    this.$ws.$off(`${topicName}|message`, this.handleAboutMessageEvent);
    this.$ws.$off('message', this.handleAboutMessageEvent);
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
    handleAboutMessageEvent(data){
        this.supportTracker.series = [((data.arus/5000) * 100).toFixed(2)]
        console.log("handled in src/views/list_alat.vue", data)
    },
    sendHello(){
      this.$ws.$emitToServer(topicName, 'message', {"pesan": "haalllo"})
      this.handleAboutMessageEvent
    }
    // connect_ws() {
    //   ws.connect();
    //   ws.on("open", () => {
    //     console.log("connected");
    //     // $(".connection-status").addClass("connected");
    //     this.subscribeToChannel();
    //     // this.ws_stat = true;
    //   });

    //   ws.on("error", () => {
    //     // $(".connection-status").removeClass("connected");
    //     console.log("not connected");
    //   });
    // },
    // subscribeToChannel() {
    //   // if(getSubscription())
    //   // if (!ws) {
    //     const chat = ws.subscribe("alat");
    //     // console.log(ws.getSubsription('alat'));
    //     chat.on("error", () => {
    //       // $(".connection-status").removeClass("connected");
    //       console.log("error");
    //     });

    //     chat.on("message", message => {
    //       //   $(".messages").append(`
    //       //   <div class="message"><h3> ${message.userId} </h3> <p> ${message.body} </p> </div>
    //       // `);
    //       arus = (message.arus/5000) * 100
    //       // this.arus.push(message.arus)
    //       this.supportTracker.series = [(message.arus/5000) * 100]
    //       console.log(this.supportTracker.series);
    //     });
    //   // }
    // }
  },
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