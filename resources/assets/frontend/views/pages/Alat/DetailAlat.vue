<template>
  <div id="item-detail-page">
    <!-- <vs-alert color="danger" title="Error Fetching Product Data" :active.sync="error_occured">
      <span>{{ error_msg }}.</span>
      <span>
        <span>Check</span>
        <router-link :to="{name:'ecommerce-shop'}" class="text-inherit underline">All Items</router-link>
      </span>
    </vs-alert>-->
    <vx-card>
      <template slot="no-body">
        <div class="item-content">
          <!-- Item Main Info -->
          <div class="product-details p-6">
            <div class="vx-row mt-6">
              <div class="vx-col md:w-2/5 w-full flex items-center justify-center">
                <div class="product-img-container w-3/5 mx-auto mb-10 md:mb-0">
                  <img
                    src="../../../assets/images/pages/eCommerce/Algolia-logo.png"
                    class="responsive"
                  />

                  <!--
                    UnComment Below line for true flow
                    <img :src="item_data.image" :alt="item_data.name" class="responsive">

                    Remove above img tag which is for demo purpose in actual flow
                  -->
                </div>
              </div>

              <!-- Item Content -->
              <div class="vx-col md:w-3/5 w-full">
                <h3>{{alat.nama}}</h3>

                <p class="my-2">
                  <span class="mr-2">id</span>
                  <span>{{alat._id}}</span>
                </p>
                <!-- <p class="flex items-center flex-wrap">
                  <span class="text-2xl leading-none font-medium text-primary mr-4 mt-2">harga</span>
                  <span
                    class="pl-4 mr-2 mt-2 border border-solid d-theme-border-grey-light border-t-0 border-b-0 border-r-0"
                  >
                    <star-rating :show-rating="false" :star-size="20" read-only />
                  </span>
                  <span class="cursor-pointer leading-none mt-2">424 ratings</span>
                </p>-->

                <vs-divider />

                <!-- <p>deskripsi</p> -->

                <vs-list class="product-sales-meta-list px-0 pt-4">
                  <vs-list-item
                    class="p-0 border-none"
                    title="Sensor"
                    icon-pack="feather"
                    icon="icon-truck"
                  ></vs-list-item>
                  <p>Nama Sensor : {{alat.sensor.nama}}</p>
                  <p>Model Sensor : {{alat.sensor.model}}</p>
                  <p>Working Range : {{alat.sensor.working_range}}</p>
                  <p>Water Pressure : {{alat.sensor.water_pressure}}</p>
                  <vs-list-item
                    class="p-0 border-none"
                    title="Microcontroller"
                    icon-pack="feather"
                    icon="icon-dollar-sign"
                  ></vs-list-item>
                  <p>Nama Microcontroller : {{alat.micro.nama}}</p>
                  <p>Model Microcontroller : {{alat.micro.model}}</p>
                  <p>Connection Type : {{alat.micro.connection_type}}</p>
                </vs-list>

                <vs-divider />

                <!-- <vs-divider /> -->

                <!-- Quantity -->
                <div class="vx-row">
                  <div class="vx-col w-full">
                    <p class="my-2">
                      <span>Status</span>
                      <span class="mx-2">-</span>
                      <span class="text-success">Online</span> OR
                      <span class="text-danger">Offline</span>
                    </p>
                  </div>

                  <div class="vx-col w-full"></div>
                </div>
                <!-- /Quantity -->
              </div>
            </div>
          </div>

          <!-- Product Feature/Meta Row -->
          <div class="py-24 mb-16 mt-10 text-center item-features">
            <div class="vx-row">
              <div class="vx-col md:w-1/1 w-full">
                <feather-icon
                  icon="PieChartIcon"
                  svgClasses="h-12 w-12 text-primary stroke-current"
                  class="block mb-4"
                />
                <span class="font-semibold text-lg">Statistik Alat</span>
              </div>
              <div class="vx-col md:w-1/2 w-full">
                <div class="w-full mx-auto mb-16 md:mb-0">
                  <div class="vx-row text-center">
                    <!-- LINE CHART -->
                    <div class="vx-col p-10 w-full md:mb-0 mb-16 mx-auto">
                      <vx-card title="Statistik Alat">
                        <template slot="actions">
                          <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                        </template>

                        <div slot="no-body" class="p-6 pb-0">
                          <!-- <div class="flex" v-if="revenueComparisonLine.analyticsData">
                            <div class="mr-6">
                              <p class="mb-1 font-semibold">This Month</p>
                              <p class="text-3xl text-success">
                                <sup class="text-base mr-1">$</sup>
                                {{ revenueComparisonLine.analyticsData.thisMonth.toLocaleString() }}
                              </p>
                            </div>
                            <div>
                              <p class="mb-1 font-semibold">Last Month</p>
                              <p class="text-3xl">
                                <sup class="text-base mr-1">$</sup>
                                {{ revenueComparisonLine.analyticsData.lastMonth.toLocaleString() }}
                              </p>
                            </div>
                          </div> -->

                          <vue-apex-charts
                            type="line"
                            height="300"
                            :options="analyticsData.revenueComparisonLine.chartOptions"
                            :series="revenueComparisonLine.series"
                          />
                        </div>
                      </vx-card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-1/2 w-full">
                <div class="w-full mx-auto mb-16 md:mb-0">
                  <div class="vx-row text-center"></div>
                  <div class="vx-col p-10 w-full md:mb-0 mb-16 mx-auto">
                    <vx-card :title="alat.nama">
                      <!-- CARD ACTION -->

                      <div slot="no-body" v-if="supportTracker.analyticsData">
                        <div class="vx-row text-center">
                          <!-- Chart -->
                          <div
                            class="vx-col w-full lg:w-5/5 md:w-full sm:w-5/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-3"
                          >
                            <vue-apex-charts
                              type="radialBar"
                              height="300"
                              :options="analyticsData.supportTrackerRadialBar.chartOptions"
                              :series="supportTracker.series"
                            />
                          </div>
                        </div>

                        <!-- Support Tracker Meta Data -->
                        <div class="flex flex-row justify-between px-8 pb-4 mt-0">
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
            </div>
            <div class="vx-row">
              <div class="vx-col md:w-1/1 w-full">
                <div class="w-full p-10 mx-auto mb-16 md:mb-0">
                  <feather-icon
                    icon="MapIcon"
                    svgClasses="h-12 w-12 text-primary stroke-current"
                    class="block mb-4"
                  />
                  <span class="font-semibold text-lg">Lokasi Alat</span>
                  <div id="extra-component-google-map-demo" class="mt-10">
                    <GmapMap
                      :center="center"
                      :zoom="7"
                      map-type-id="terrain"
                      style="width: 100%; height: 400px"
                    >
                      <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                      />
                    </GmapMap>
                  </div>
                  <!-- <span class="font-semibold text-lg">10 Day Replacement</span>
                  <p class="mt-2">Marshmallow biscuit donut dragée fruitcake wafer.</p>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </vx-card>
  </div>
</template>

<script>
import moduleAlat from "./../../../store/alat/moduleAlat.js";
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "./../../../components/statistics-cards/StatisticsCardLine";
import analyticsData from "./analyticData.js";
export default {
  data() {
    return {
      isMounted: false,
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        { position: { lat: 10.0, lng: 10.0 } },
        { position: { lat: 11.0, lng: 11.0 } }
      ],
      goalOverview: {},
      revenueComparisonLine: {
        analyticsData: {
          thisMonth: 86589,
          lastMonth: 73683
        },
        series: [
          {
            name: "This Month",
            data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
          },
          {
            name: "Last Month",
            data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
          }
        ]
      },
      supportTracker: {
        analyticsData: {
          openTickets: 163,
          meta: {
            Status: "offline",
            "Waktu Response": 0 + " detik"
          }
        },
        series: [83]
      },
      analyticsData: analyticsData,
      item_data: null,
      error_occured: false,
      error_msg: "",
      available_item_colors: [
        "#7367F0",
        "#28C76F",
        "#EA5455",
        "#FF9F43",
        "#1E1E1E"
      ],
      opt_color: "#7367F0"
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine
  },
  computed: {
    alat() {
      return this.$store.state.dataAlat.alat;
    }
  },
  methods: {
    toggleItemInWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    toggleItemInCart(item) {
      this.$store.dispatch("eCommerce/toggleItemInCart", item);
    },
    fetch_item_details(id) {
      //   this.algolia_index.getObject(id, (err, content) => {
      //     if (err) {
      //       this.error_occured = true;
      //       this.error_msg = err.message;
      //       console.error(err);
      //     } else {
      //       this.item_data = content;
      //     }
      //   });
    }
  },
  created() {
    if (!moduleAlat.isRegistered) {
      this.$store.registerModule("dataAlat", moduleAlat);
      moduleAlat.isRegistered = true;
    }
    this.$store
      .dispatch("dataAlat/fetchDetailAlat", this.$route.params.id)
      .catch(err => {
        console.error(err);
      });
    // console.log(this.$store.state.dataAlat)
    // this.fetch_item_details(this.$route.params.item_id);
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/vuexy/_variables.scss";

#item-detail-page {
  .color-radio {
    height: 2.28rem;
    width: 2.28rem;

    > div {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .item-features {
    background-color: #f7f7f7;

    .theme-dark & {
      background-color: $theme-dark-secondary-bg;
    }
  }

  .product-sales-meta-list {
    .vs-list--icon {
      padding-left: 0;
    }
  }

  .related-product-swiper {
    // padding-right: 2rem;
    // padding-left: 2rem;

    .swiper-wrapper {
      padding-bottom: 2rem;

      > .swiper-slide {
        background-color: #f7f7f7;
        box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.1),
          0 5px 12px 0 rgba(0, 0, 0, 0.08) !important;

        .theme-dark & {
          background-color: $theme-light-dark-bg;
        }
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      transform: scale(0.5);
      filter: hue-rotate(40deg);
    }

    .swiper-button-next {
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
    }
  }
}
</style>