<template>
  <vx-card title="Notifikasi Alat">
    <p>You can add custom content to the item. It will be pushed to the right side</p>

    <div class="demo-alignment">
      <vs-list>
        <vs-list-header title="Group 1"></vs-list-header>

        <vs-list-item title="Snickerdoodle" subtitle="An excellent companion">
          <vs-button color="danger">One action</vs-button>
        </vs-list-item>

        <vs-list-item
          title="Sapporo Haru"
          subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"
        >
          <vs-checkbox color="danger" />
        </vs-list-item>

        <vs-list-header title="Group 2" color="success"></vs-list-header>
        <vs-list-item
          title="Enid's"
          subtitle="At night a bar, during the day a delicious brunch spot."
        >
          <vs-chip color="warning mr-0">Another component</vs-chip>
        </vs-list-item>

        <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">
          <vs-switch color="warning" v-model="val" />
        </vs-list-item>
      </vs-list>
    </div>
  </vx-card>
</template>
<script>
export default {
  data() {
    return {
      val: false
    };
  }
};
</script>