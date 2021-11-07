<template>
  <div>
    <v-container fluid light class="pa-16" style="margin-top: 3.6rem;">
      <v-row class="background-box">
        <v-col class="pa-16">
          <img :src="getItem.image" class="product-image" />
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
  name: "Product",
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
        return this.$store.getters.productId(this.id);
      },
      set(post) {
        return post;
      },
    },
  },

  serverPrefetch() {
    // return the Promise from the action
    // so that the component waits before rendering
    return this.setPaintingItemsAction();
  },
  mounted() {
    if (!this.getItem) {
      this.$store.dispatch("setPaintingItemsAction");
    }
  },
};
</script>
<style lang="scss">
.background-box {
  background-color: map-get($colorz, secondary);
}
.info-column p,
.info-column h2 {
  color: map-get($colorz, primary);
}
.describ {
  letter-spacing: 0;
}
.info-column h2 {
  margin-bottom: 0.5rem;
}
.detailsContainter {
  width: 100%;
  height: 100%;
}
.product-image {
  width: 100%;
  height: 100%;
}
.add-to-cart {
  width: 100%;
  height: auto;
}
.add-to-cart button {
  width: 50%;
}
.addCartButton {
  @include container_mixin(
    2px,
    map-get($colorz, primary),
    0,
    0,
    map-get($colorz, primary),
    map-get($colorz, secondary)
  );

  height: 4rem;
  border-radius: 30px;
  box-shadow: 2px 2px 8px map-get($colorz, highlight);
}
.addCartButton p {
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.2rem;
}
</style>
