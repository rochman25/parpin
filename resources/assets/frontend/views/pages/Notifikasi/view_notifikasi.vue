<template>
  <vx-card title="Notifikasi Alat">
    <!-- <p>You can add custom content to the item. It will be pushed to the right side</p> -->

    <div class="demo-alignment">
      <vs-list-header title="Notifikasi Bocor" color="danger"></vs-list-header>
      <vs-list v-for="ntf in notifikasi" :key="ntf.index">
        <vs-list-item
          icon-pack="feather"
          icon="icon-alert-octagon"
          color="success"
          :title="ntf.title"
          :subtitle="ntf.msg"
        >
          <!-- <feather-icon
            icon="AlertOctagonIcon"
            :svgClasses="[`text-${ntf.category}`, 'stroke-current mr-1 h-6 w-6']"
          ></feather-icon>-->
          <!-- <vs-checkbox color="danger" /> -->
        </vs-list-item>
      </vs-list>
      <vs-list-header title="Notifikasi Waspada" color="warning"></vs-list-header>
    </div>
  </vx-card>
</template>
<script>
import moduleNotifikasi from "././../../../store/notifikasi/moduleNotifikasi.js";
export default {
  data() {
    return {
      val: false,
      isMounted: false
    };
  },
  computed: {
    notifikasi() {
      return this.$store.state.dataNotifikasi.notifikasi;
    }
  },
  methods() {},
  created() {
    if (!moduleNotifikasi.isRegistered) {
      this.$store.registerModule("dataNotifikasi", moduleNotifikasi);
      moduleNotifikasi.isRegistered = true;
    }
    this.$store.dispatch("dataNotifikasi/fetchDataNotifikasi").catch(err => {
      console.error(err);
    });
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>