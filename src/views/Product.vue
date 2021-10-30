<template>
  <div>
    <v-container fluid light class="pa-16" style="margin-top: 3.6rem;">
      <v-row class="background-box">
        <v-col class="pa-16">
          <div class="window-img"></div>
        </v-col>
        <v-col class="pa-16 o">
          <p>{{ productPainting }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Product",

  data() {
    return {};
  },
  computed: {
    productPainting() {
      return this.$store.state.paintingItems[this.$route.params.id];
    },
    serverPrefetch() {
      // return the Promise from the action
      // so that the component waits before rendering
      return this.fetchItem();
    },
  },
  mounted() {
    // If we didn't already do it on the server
    // we fetch the item (will first show the loading text)
    if (!this.productPainting) {
      this.fetchItem();
    }
  },
  methods: {
    fetchItem() {
      // return the Promise from the action
      return this.$store.dispatch("setPaintingItems", this.$route.params.id);
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
