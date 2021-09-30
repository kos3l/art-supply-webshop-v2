<template>
  <v-container fluid class="secondary d-none d-md-block nav pa-0">
    <v-row class="height-fix">
      <v-col class="height-fix pa-0 pt-3 d-flex justify-center align-center">
        <p class="ma-0">ART SUPPLY STORE</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <router-link :to="{ name: 'Painting' }">
          <button
            class="current nav-box d-flex justify-center "
            style="border-right:0;"
            v-if="currentPage === '/painting'"
          >
            PAINTING - this is on Painting page
          </button>
          <button
            v-else
            class="nav-box d-flex justify-center"
            style="border-right:0;"
          >
            PAINTING
          </button>
        </router-link>
      </v-col>
      <v-col class="pa-0">
        <button class="nav-box d-flex justify-center" id="drawing">
          DRAWING
        </button>
      </v-col>
      <v-col class="pa-0">
        <button
          class="nav-box d-flex justify-center"
          style="border-left:0;"
          id="bundles"
        >
          BUNDLES
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Navigation",

  data() {
    return {
      currentPage: this.$router.currentRoute.path,
    };
  },
};
</script>

<style lang="scss">
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
    3px,
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
    3px,
    map-get($colorz, secondary),
    0.875rem,
    0,
    map-get($colorz, primary),
    map-get($colorz, secondary)
  );
}
.current {
  background-color: red;
}
button {
  width: 100%;
}
</style>
