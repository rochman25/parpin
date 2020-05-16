<template>
  <div id="demo-card-analytics">
    <div class="vx-row">
      <!-- SUPPORT TRACKER CHART+- -->
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card title="Alat 1">
          <!-- CARD ACTION -->
          <template slot="actions">
            <!-- <change-time-duration-dropdown /> -->
          </template>

          <div slot="no-body" v-if="supportTracker.analyticsData">
            <div class="vx-row text-center">
              <!-- Chart -->
              <div
                class="vx-col w-full lg:w-5/5 md:w-full sm:w-5/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-6"
              >
                <vue-apex-charts
                  type="radialBar"
                  height="385"
                  :options="analyticsData.supportTrackerRadialBar.chartOptions"
                  :series="supportTracker.series"
                />
              </div>
            </div>
            <!-- Support Tracker Meta Data -->
            <div class="flex flex-row justify-between px-8 pb-10">
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
    </div>
  </div>
</template>
<script>
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
            "New Tickets": 30,
            "Open Tickets": 63,
            "Response Time": "1d"
          }
        },
        series: [10]
      },
      goalOverview: {
        analyticsData: {
          completed: 8000000,
          inProgress: 13561
        },
        series: [83]
      },
      analyticsData: analyticsData
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown
  },
  computed: {
    alat() {
      return this.$store.state.alat;
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