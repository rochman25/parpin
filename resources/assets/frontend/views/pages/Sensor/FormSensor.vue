<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? "TAMBAH" : "UPDATE" }} SENSOR</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6">
        <!-- Product Image -->
        <template v-if="dataImg">
          <!-- Image Container -->
          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img :src="dataImg" alt="img" class="responsive" />
          </div>

          <!-- Image upload Buttons -->
          <div class="modify-img flex justify-between mt-5">
            <input
              type="file"
              class="hidden"
              ref="updateImgInput"
              @change="updateCurrImg"
              accept="image/*"
            />
            <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Update Image</vs-button>
            <vs-button type="flat" color="#999" @click="dataImg = null">Remove Image</vs-button>
          </div>
        </template>

        <!-- NAME -->
        <vs-input label="Nama Sensor" v-model="dataNama" class="mt-5 w-full" name="item-name" />
        <!-- v-validate="'required'" -->
        <!-- <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span> -->
        <!-- Model -->
        <vs-input label="Model Sensor" v-model="dataModel" class="mt-5 w-full" name="item-model" />
        <!-- <span class="text-danger text-sm" v-show="errors.has('item-category')">{{ errors.first('item-category') }}</span> -->
        <!-- working range -->
        <vs-input label="Working Range" v-model="dataWr" class="mt-5 w-full" name="item-wr" />
        <!-- <span class="text-danger text-sm" v-show="errors.has('item-category')">{{ errors.first('item-category') }}</span> -->
        <!-- water pressure -->
        <vs-input label="Water Pressure" v-model="dataWp" class="mt-5 w-full" name="item-wp" />
        <!-- <span class="text-danger text-sm" v-show="errors.has('item-category')">{{ errors.first('item-category') }}</span> -->

        <!-- Upload -->
        <!-- <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" /> -->

        <div class="upload-img mt-5" v-if="!dataImg">
          <input
            type="file"
            class="hidden"
            ref="uploadImgInput"
            @change="updateCurrImg"
            accept="image/*"
          />
          <vs-button @click="$refs.uploadImgInput.click()">Upload Image</vs-button>
        </div>
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitData">Submit</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    isSidebarActive(val) {
      if (!val) return;
      if (Object.entries(this.data)._id === null) {
        this.initValues();
        // this.$validator.reset();
      } else {
        // console.log(this.data)
        let { nama, _id, img, model, working_range, water_pressure } = JSON.parse(
          JSON.stringify(this.data)
        );
        console.log(this.data)
        this.dataId = _id;
        this.dataModel = model;
        this.dataImg = img;
        this.dataNama = nama;
        this.dataWr = working_range;
        this.dataWp = water_pressure;
        this.initValues();
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  data() {
    return {
      dataId: null,
      dataNama: "",
      dataModel: null,
      dataImg: null,
      dataWr: null,
      dataWp: null,

      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          // this.$validator.reset()
          this.initValues()
        }
      }
    },
    isFormValid() {
      //   return !this.errors.any() && this.dataName && this.dataCategory && (this.dataPrice > 0)
    }
  },
  methods: {
    initValues() {
      if (this.data._id) return;
      this.dataId = null;
      this.dataNama = "";
      this.dataModel = null;
      this.dataWr = null;
      this.dataWp = null;
      this.dataImg = null;
    },
    submitData() {
      let result = true;
      // this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            nama: this.dataNama,
            img: this.dataImg,
            model: this.dataModel,
            work_range: this.dataWr,
            water_pressure: this.dataWp
          };

          if (this.dataId !== null) {
            this.$store.dispatch("dataSensor/updateItem", obj).catch(err => {
              console.error(err);
            });
          } else {
            delete obj.id;
            obj.popularity = 0;
            this.$store.dispatch("dataSensor/addItem", obj).catch(err => {
              console.error(err);
            });
          }

          this.$emit("closeSidebar");
          this.initValues();
        }
      // });
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.dataImg = e.target.result;
        };
        reader.readAsDataURL(input.target.files[0]);
      }
    }
  },
  components: {
    VuePerfectScrollbar
  }
};
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
