<template>
  <v-app id="app">
    <v-main>
      <v-container fluid class="secondary d-none d-md-block nav pa-0">
        <v-row class="height-fix" style="width:100%">
          <v-col></v-col>
          <v-col
            class="height-fix pa-0 pt-3 d-flex justify-center align-center"
          >
            <router-link :to="{ name: 'Home' }">
              <p class="ma-0">ART SUPPLY STORE</p>
            </router-link>
          </v-col>
          <v-col
            class="height-fix pa-0 pt-4 pr-4 d-flex justify-end align-center"
          >
            <router-link
              :to="{ name: 'Login' }"
              v-if="!currentUser"
              style="transition: opacity 0.3s ease-out; cursor:auto"
            >
              <v-icon dense color="primary">
                mdi-account-circle-outline
              </v-icon>
            </router-link>
            <router-link
              v-if="currentUser"
              :to="{ name: 'Login' }"
              style="transition: opacity 0.3s ease-out; cursor:auto"
            >
              <v-icon dense color="highlight">
                mdi-account-circle-outline
              </v-icon>
            </router-link>
            <router-link
              :to="{ name: 'BasketPage' }"
              style="transition: opacity 0.3s ease-out; cursor:auto"
            >
              <v-icon dense color="primary" class="ml-6">
                mdi-basket-outline
              </v-icon>
            </router-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0  ">
            <router-link
              :to="{ name: 'Painting' }"
              style="transition: opacity 0.3s ease-out; cursor:auto"
            >
              <button
                class="nav-box d-flex justify-center"
                :class="currentPage === '/painting' ? 'current' : 'inactive'"
                id="painting"
              >
                PAINTING
              </button>
            </router-link>

            <v-col class="dark hover-col pa-0 ma-0 ">
              <div class="dropdown d-flex justify-space-around align-center ">
                <router-link
                  :to="{ name: 'Paints', params: { ctgr: 'paint' } }"
                  style="transition: opacity 0.3s ease-out; cursor:auto"
                >
                  <p class="ma-0 ">PAINTS</p>
                </router-link>

                <router-link
                  :to="{ name: 'Paints', params: { ctgr: 'brush' } }"
                  style="transition: opacity 0.3s ease-out; cursor:auto"
                >
                  <p class="ma-0 ">BRUSHES</p>
                </router-link>
              </div>
            </v-col>
          </v-col>
          <v-col class="pa-0">
            <router-link :to="{ name: 'Drawing' }">
              <button
                class="nav-box d-flex justify-center"
                id="drawing"
                :class="currentPage === '/drawing' ? 'current' : 'inactive'"
              >
                DRAWING
              </button>
            </router-link>
            <v-col class="dark hover-col pa-0 ma-0 ">
              <div class="dropdown d-flex justify-space-around align-center">
                <router-link
                  :to="{ name: 'Pencils', params: { ctgr: 'crayon' } }"
                  style="transition: opacity 0.3s ease-out; cursor:auto"
                >
                  <p class="ma-0 ">CRAYONS</p>
                </router-link>
                <router-link
                  :to="{ name: 'Pencils', params: { ctgr: 'pencil' } }"
                  style="transition: opacity 0.3s ease-out; cursor:auto"
                >
                  <p class="ma-0 ">PENCILS</p>
                </router-link>
              </div>
            </v-col>
          </v-col>
          <v-col class="pa-0">
            <router-link :to="{ name: 'Bundles' }">
              <button
                class="nav-box d-flex justify-center "
                id="bundles"
                :class="currentPage === '/bundles' ? 'current' : 'inactive'"
              >
                BUNDLES
              </button>
            </router-link>
            <v-col class="dark hover-col pa-0 ma-0 ">
              <div class="dropdown d-flex justify-space-around align-center">
                <router-link
                  :to="{
                    name: 'BundleCategory',
                    params: { ctgr: 'forDrawers' },
                  }"
                  style="transition: opacity 0.3s ease-out; cursor:auto"
                >
                  <p class="ma-0 ">FOR DRAWERS</p>
                </router-link>
                <router-link
                  :to="{
                    name: 'BundleCategory',
                    params: { ctgr: 'forPainters' },
                  }"
                  style="transition: opacity 0.3s ease-out; cursor:auto"
                >
                  <p class="ma-0 ">FOR PAINTERS</p>
                </router-link>
              </div>
            </v-col>
          </v-col>
        </v-row>
      </v-container>

      <router-view />

      <v-container fluid class="dark footer pa-0">
        <v-row class="ma-0 pa-0 row-size">
          <v-col class="line-container pa-10">
            <div class="line"></div>
          </v-col>
        </v-row>
        <v-row class="ma-0 pr-7 pl-8">
          <v-col class="d-flex justify-center flex-column align-center">
            <p class="mb-1">CONTACT:</p>
            <p class="mb-1">{{ email }}</p>
            <p class="mb-1">{{ phone }}</p>
          </v-col>
          <v-col>
            <router-link :to="{ name: 'Admin' }" class="d-flex justify-center">
              <p>
                ADMIN SECTION
              </p>
            </router-link>
          </v-col>
          <v-col class="d-flex justify-center align-center flex-column"
            ><p class="mb-2">SOCIAL MEDIA</p>
            <v-btn icon class="mb-2"
              ><v-icon large color="highlight">mdi-facebook</v-icon></v-btn
            ></v-col
          >
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import "@firebase/firestore";
import { fb } from "/firebase";
import store from "../src/store/index.js";

fb.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});
export default {
  name: "App",
  components: {},

  data() {
    return {
      currentPage: window.location.pathname,
      phone: 20943812,
      email: "artSupply@gmail.com",
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    },
  },
  updated() {
    this.currentPage = this.$router.currentRoute.path;
    console.info(this.currentPage);
    console.log(this.currentUser);
  },
};
</script>
<style lang="scss">
#app {
  background-color: map-get($colorz, primary);
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.1rem;
}

.nav {
  height: 2.5rem;
  font-weight: bold;
}
.nav p {
  color: map-get($colorz, primary);
  font-style: italic;
  font-size: 0.9rem;
}
.v-icon {
  cursor: pointer;
}

.height-fix {
  height: 100%;
}
.nav-box {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0.875rem,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  border-left: 1px solid map-get($colorz, secondary);
  border-right: 1px solid map-get($colorz, secondary);
  font-size: 1.1rem;
}

.nav-box:hover {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0.875rem,
    0,
    map-get($colorz, primary),
    map-get($colorz, secondary)
  );
  transition: 0.5s;
}

.current {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0.875rem,
    0,
    map-get($colorz, primary),
    map-get($colorz, secondary)
  );
}

.inactive {
  background-color: map-get($colorz, primary);
  transition: 0.5s;
}
button {
  width: 100%;
  text-decoration: none;
}

a:-webkit-any-link {
  text-decoration: none;
}

.footer {
  height: 30vh;
}
.line {
  height: 1px;
  border-top: 2px solid map-get($colorz, primary);
  width: auto;
}

a:hover + .hover-col,
.hover-col:hover {
  display: flex;
}

.hover-col {
  display: none;
  width: 100%;
  height: 10vh;
  z-index: 100;
  position: absolute;
  left: 0rem;
  box-shadow: 0px 2px 5px map-get($colorz, secondary);
}

.dropdown {
  height: 100%;
  width: 100%;
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0.875rem,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  border-top: none;
  border-left: 0;
  border-right: 0;
}
.dropdown p {
  color: map-get($colorz, secondary);
}
</style>
