<template>
  <vx-card title="Notifikasi Alat">
    <!-- <p>You can add custom content to the item. It will be pushed to the right side</p> -->

    <div class="demo-alignment">
      <vs-list>
        <vs-list-header
          icon-pack="feather"
          icon="icon-alert-octagon"
          title="Notifikasi Bocor"
          color="danger"
        ></vs-list-header>
        <vs-list v-for="ntf in notifikasi" :key="ntf.index">
          <vs-list-item
            v-if="ntf.category == 'danger'"
            icon-pack="feather"
            icon="icon-alert-octagon"
            color="success"
            :title="ntf.title"
            :subtitle="ntf.msg"
          >
            <vs-button
              size="small"
              color="primary"
              type="border"
              icon-pack="feather"
              icon="icon-eye"
            >detail</vs-button>
          </vs-list-item>
        </vs-list>
        <vs-list-header
          icon-pack="feather"
          icon="icon-alert-octagon"
          title="Notifikasi Waspada"
          color="warning"
        ></vs-list-header>
        <vs-list v-for="ntf in notifikasi" :key="ntf.index">
          <vs-list-item
            v-if="ntf.category == 'warning'"
            icon-pack="feather"
            icon="icon-alert-octagon"
            color="success"
            :title="ntf.title"
            :subtitle="ntf.msg"
          >
            <vs-button
              size="small"
              color="primary"
              type="border"
              icon-pack="feather"
              icon="icon-eye"
            >detail</vs-button>
          </vs-list-item>
        </vs-list>
      </vs-list>
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