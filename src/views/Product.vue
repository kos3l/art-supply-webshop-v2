<template>
  <div>
    <v-container fluid light class="pa-16" style="margin-top: 3.6rem;">
      <v-row class="background-box">
        <v-col class="pa-16">
          <div class="window-img"></div>
        </v-col>
        <v-col class="pa-16 o">
          <div class="loading">
            <p>{{ this.item }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Product",

  data() {
    return {
      post: "",
    };
  },
  computed: {
    item() {
      return this.$store.getters.productId(this.$route.params.id);
    },
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
    console.log(this.post);
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      console.log(this.item);
      this.item = this.post;
    },
  },
};
</script>
<style lang="scss">
.background-box {
  background-color: map-get($colorz, secondary);
}
.o p {
  color: white;
}
</style>
