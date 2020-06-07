<template>
  <vx-card title="Notifikasi Alat">
    <p>Berikut daftar notifikasi alat yang terbagi menjadi 2 (Bocor dan Waspada):</p>

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
            :icon="icons[ntf.status]"
            color="success"
            :title="ntf.title"
            :subtitle="ntf.msg"
          >
            <vs-row>
              <vs-col vs-type="flex" vs-w="6">
                <vs-chip v-if="ntf.status == 1" color="#C5C1C1"></vs-chip>
                <vs-chip v-if="ntf.status == 0" color="primary"></vs-chip>
              </vs-col>
              <vs-col vs-type="flex" vs-w="6">
                <vs-button
                  size="small"
                  color="primary"
                  type="border"
                  icon-pack="feather"
                  icon="icon-eye"
                  @click="navigate_to_detail_alat(ntf._id,ntf.alat._id)"
                >lihat</vs-button>
              </vs-col>
            </vs-row>
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
            :icon="icons[ntf.status]"
            color="success"
            :title="ntf.title"
            :subtitle="ntf.msg"
          >
            <vs-row>
              <vs-col vs-type="flex" vs-w="6">
                <vs-chip v-if="ntf.status == 1" color="#C5C1C1"></vs-chip>
                <vs-chip v-if="ntf.status == 0" color="primary"></vs-chip>
              </vs-col>
              <vs-col vs-type="flex" vs-w="6">
                <vs-button
                  size="small"
                  color="primary"
                  type="border"
                  icon-pack="feather"
                  icon="icon-eye"
                  @click="navigate_to_detail_alat(ntf._id,ntf.alat._id)"
                >lihat</vs-button>
              </vs-col>
            </vs-row>
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
      isMounted: false,
      icons: ["icon-alert-octagon","icon-check-circle"]
    };
  },
  computed: {
    notifikasi() {
      return this.$store.state.dataNotifikasi.notifikasi;
    }
  },
  methods: {
    navigate_to_detail_alat(id, id_alat) {
      this.$store.dispatch("dataNotifikasi/updateItem", id).catch(err => {
        console.error(err);
      });
      this.$router
        .push({
          name: "parpin-detail-alat",
          params: { id: id_alat }
        })
        .catch(() => {});
    }
  },
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