<template>
  <div>
    <v-container fluid light class="pa-16" style="margin-top: 3.6rem;">
      <v-row class="background-box">
        <v-col class="pa-16">
          <img v-if="getItem" :src="getItem.image" class="product-image" />
        </v-col>
        <v-col class="pa-16 pl-0 info-column">
          <div
            v-if="getItem"
            class="detailsContainter d-flex flex-column justify-space-around"
          >
            <div>
              <h2 class="text-uppercase">{{ this.getItem.name }}</h2>
              <div class="line mb-lg-6"></div>
              <div class=" d-flex justify-space-between mb-lg-3 ">
                <p class="font-weight-bold">BRAND:</p>
                <p>{{ this.getItem.brand }}</p>
              </div>
              <div class=" d-flex justify-space-between mb-3">
                <p class="font-weight-bold">PRICE:</p>
                <p>{{ this.getItem.price }} DKK</p>
              </div>
              <div class=" d-flex flex-column mb-3">
                <p class="font-weight-bold mb-1">DESCRIPTION:</p>
                <p class="describ">{{ this.getItem.description }}</p>
              </div>
            </div>
            <div class="add-to-cart d-flex align-end justify-end">
              <button class="addCartButton">
                <p>ADD TO CART</p>
              </button>
            </div>
            <!-- add description and color if u have the time-->
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
    return {};
  },

  computed: {
    getItem: {
      get() {
        return this.$store.getters.productIdDrawing(this.id);
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
