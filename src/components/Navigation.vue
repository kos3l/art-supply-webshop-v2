<template>
  <v-container fluid class="secondary d-none d-md-block nav pa-0">
    <v-row class="height-fix">
      <v-col class="height-fix pa-0 pt-3 d-flex justify-center align-center">
        <p class="ma-0">ART SUPPLY STORE</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <div
          class="nav-box d-flex justify-center"
          style="border-right:0;"
          id="home"
        >
          PAINTING - this is on Painting page
        </div>

        <div
          class="nav-box d-flex justify-center"
          style="border-right:0;"
          id="home"
        >
          PAINTING
        </div>
      </v-col>
      <v-col class="pa-0">
        <div class="nav-box d-flex justify-center" id="drawing">
          DRAWING
        </div>
      </v-col>
      <v-col class="pa-0">
        <div
          class="nav-box d-flex justify-center"
          style="border-left:0;"
          id="bundles"
        >
          BUNDLES
        </div>
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

      //home: document.getElementById("home"),
    };
  },
  computed: {
    isPainting() {
      return this.$route.name === "Painting";
    },
  },
  mounted: {
    currentPageStyle: function() {
      if (this.currentPage == "/painting") {
        return this.home.classList.add("current");
      }
    },
  },
};
</script>

<style lang="scss">
.nav {
  height: 2.5rem;
  font-weight: bold;
}

.height-fix {
  height: 100%;
}

.current {
  background-color: red;
}
</style>
