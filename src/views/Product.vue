<template>
  <div>
    <v-container fluid light class="pa-16" style="margin-top: 3.6rem;">
      <v-row class="background-box">
        <v-col class="pa-16">
          <div class="window-img"></div>
        </v-col>
        <v-col class="pa-16 o">
          <div v-if="!loading" class="loading">
            <p>{{ item }}</p>
          </div>

          <div v-if="loading" class="loading">
            Loading...
          </div>

          <div v-if="error" class="error">
            {{ error }}
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
      loading: false,
      post: null,
      error: null,
    };
  },
  computed: {
    item() {
      return this.$store.getters.productId(this.post);
    },
  },
  beforeCreate() {
    this.$store.dispatch("setPaintingItems");
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
      this.error = this.post = null;
      this.loading = true;
      const fetchedId = this.$route.params.id;
      // replace `getPost` with your data fetching util / API wrapper
      productId(fetchedId, (err, post) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.id !== fetchedId) return;
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.post = post;
        }
      });
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
