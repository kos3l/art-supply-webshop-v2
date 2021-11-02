<template>
  <div>
    <v-container fluid light class="pa-16" style="margin-top: 3.6rem;">
      <v-row class="background-box">
        <v-col class="pa-16">
          <div class="window-img"></div>
        </v-col>
        <v-col class="pa-16 o">
          <div v-if="getItem" class="loading">
            <p>{{ this.getItem.name }}</p>
            <p>{{ this.getItem.brand }}</p>
            <p>{{ this.getItem.price }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProductDrawing",
  props: {
    id: {
      default: 0,
    },
  },

  data() {
    return {
      post: "",
    };
  },

  computed: {
    getItem: {
      get() {
        return this.$store.getters.productIdDrawing(this.id);
      },
      set(post) {
        return post;
      },
    },
  },

  serverPrefetch() {
    // return the Promise from the action
    // so that the component waits before rendering
    return this.setDrawingItemsAction();
  },
  mounted() {
    if (!this.getItem) {
      this.$store.dispatch("setDrawingItemsAction");
    }
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
