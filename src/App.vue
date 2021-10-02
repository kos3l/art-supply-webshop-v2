<template>
  <v-app id="app">
    <v-main>
      <v-container fluid class="secondary d-none d-md-block nav pa-0">
        <v-row class="height-fix">
          <v-col
            class="height-fix pa-0 pt-3 d-flex justify-center align-center"
          >
            <router-link :to="{ name: 'Home' }">
              <p class="ma-0">ART SUPPLY STORE</p>
            </router-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0">
            <router-link
              :to="{ name: 'Painting' }"
              style="transition: opacity 0.3s ease-out; cursor:auto"
            >
              <button
                class="nav-box d-flex justify-center  "
                style="border-right:0;"
                :class="currentPage === '/painting' ? 'current' : 'inactive'"
              >
                PAINTING
              </button>
            </router-link>
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
          </v-col>
          <v-col class="pa-0">
            <router-link :to="{ name: 'Bundles' }">
              <button
                class="nav-box d-flex justify-center "
                style="border-left:0;"
                id="bundles"
                :class="currentPage === '/bundles' ? 'current' : 'inactive'"
              >
                BUNDLES
              </button>
            </router-link>
          </v-col>
        </v-row>
      </v-container>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      currentPage: window.location.pathname,
    };
  },
  updated() {
    this.currentPage = this.$router.currentRoute.path;
    console.info(this.currentPage);
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
  transition: 0.3s ease-in-out;
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
}
button {
  width: 100%;
  text-decoration: none;
}

a:-webkit-any-link {
  text-decoration: none;
}
</style>
