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
      <h4>{{ Object.entries(this.data).length === 0 ? "TAMBAH" : "UPDATE" }} ALAT</h4>
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
        <vs-input label="Nama Alat" v-model="dataNama" class="mt-5 w-full" name="item-name" />
        <!-- v-validate="'required'" -->
        <!-- <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span> -->
        <!-- SENSOR -->
        <label for class="vs-select--label mt-5 w-full">Tipe Sensor</label>
        <v-select label="nama" :options="listSensor" class :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="dataSensor_" />
        <!-- MICROCONTROLLER -->
        <label for class="vs-select--label mt-5">Tipe Microcontroller</label>
        <v-select label="nama" :options="listMicro" class :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="dataMicro_" />
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
import vSelect from "vue-select";
import moduleSensor from "./../../../store/sensor/moduleSensor.js";
import moduleMicro from "./../../../store/micro/moduleMicro.js";

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
        let {
          nama,
          _id,
          img,
          model,
          working_range,
          water_pressure
        } = JSON.parse(JSON.stringify(this.data));
        console.log(this.data);
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
      dataMicro_: null,
      dataImg: null,
      dataSensor_: null,

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
          this.initValues();
        }
      }
    },
    isFormValid() {
      //   return !this.errors.any() && this.dataName && this.dataCategory && (this.dataPrice > 0)
    },
    listSensor() {
      //   console.log(this.$store.state.dataAlat);
      return this.$store.state.dataSensor.sensor;
    },
    listMicro() {
      //   console.log(this.$store.state.dataAlat);
      return this.$store.state.dataMicro.micro;
    }
  },
  methods: {
    initValues() {
      if (this.data._id) return;
      this.dataId = null;
      this.dataNama = "";
      this.dataSensor_ = null;
      this.dataMicro_ = null;
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
          sensor_id: this.dataSensor_._id,
          micro_id: this.dataMicro_._id,
        };
        // console.log(obj);

        if (this.dataId !== null) {
          this.$store.dispatch("dataAlat/updateItem", obj).catch(err => {
            console.error(err);
          });
        } else {
          delete obj.id;
          obj.popularity = 0;
          this.$store.dispatch("dataAlat/addItem", obj).catch(err => {
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
    VuePerfectScrollbar,
    "v-select": vSelect
  },
  created() {
    if (!moduleSensor.isRegistered) {
      this.$store.registerModule("dataSensor", moduleSensor);
      moduleSensor.isRegistered = true;
    }
    this.$store.dispatch("dataSensor/fetchDataSensor").catch(err => {
      console.error(err);
    });
    if (!moduleMicro.isRegistered) {
      this.$store.registerModule("dataMicro", moduleMicro);
      moduleMicro.isRegistered = true;
    }
    this.$store.dispatch("dataMicro/fetchDataMicro").catch(err => {
      console.error(err);
    });
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
