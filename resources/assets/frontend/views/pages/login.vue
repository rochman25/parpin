<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto" />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Login</h4>
                  <p>Selamat datang. Silahkan Login untuk melanjutkan.</p>
                </div>

                <div>
                  <vs-input
                    name="username"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Username"
                    v-model="username"
                    class="w-full"
                  />

                  <vs-input
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    label-placeholder="Password"
                    v-model="password"
                    class="w-full mt-6"
                  />

                  <div class="flex flex-wrap justify-between my-5">
                    <!-- <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox> -->
                    <!-- <router-link to="">Forgot Password?</router-link> -->
                  </div>
                  <!-- <vs-button type="border" @click="reset">Reset</vs-button> -->
                  <vs-button @click="loginJWT">Login</vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    checkLogin() {
      if (this.$store.state.auth.isUserLoggedIn()) {
        this.$vs.notify({
          title: "Login Info",
          text: "You are already logged in!",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning"
        });

        return false;
      }
      return true;
    },
    loginJWT() {
      if (!this.checkLogin()) return;

      this.$vs.loading();

      const payload = {
        userDetails: {
          username: this.username,
          password: this.password
        }
      };

      this.$store
        .dispatch("auth/loginJwt", payload)
        .then(() => {
          this.$vs.loading.close();
        })
        .catch(error => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger"
          });
          console.log(error);
        });
    },
    validateForm() {}
  }
};
</script>
<style lang="scss">
</style>