<template>
  <div id="demo-card-analytics">
    <data-view-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <div class="vx-row">
      <div class="vx-col">
        <!-- ADD NEW -->
        <vs-popup
          background-color="rgba(0,0,0,.7)"
          class
          title="Lorem ipsum dolor sit amet"
          :active.sync="popupActive"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </vs-popup>
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
                  <span class="flex items-center" @click="popupActive=true">
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
                  <span class="flex items-center">
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
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import analyticsData from "./analyticData.js";

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
        series: [100]
      },
      analyticsData: analyticsData,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      popupActive: false
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    DataViewSidebar
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
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    }
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
  },
  mounted() {
    this.isMounted = true;
    console.log(this.$store.state.dataAlat);
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