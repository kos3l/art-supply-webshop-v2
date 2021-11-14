<template>
  <div class="product-page">
    <v-container fluid light class="pa-0" style="margin-top: 3.6rem;">
      <v-row class="pa-10">
        <v-col lg="12">
          <div class="line-dark"></div>
        </v-col>
        <v-col lg="12">
          <h1>YOUR BASKET</h1>
        </v-col>
        <v-col lg="12">
          <div>
            <div
              v-for="product in products"
              :key="product.id"
              class="basketItem d-flex justify-space-between align-center mb-5"
            >
              <div class="d-flex align-center">
                <h4 class="ma-0 pl-5 900">
                  {{ product.name }} {{ product.brand }}
                  <v-btn @click="increment(product)"
                    ><v-icon class="pr-5">
                      mdi-plus
                    </v-icon></v-btn
                  >
                </h4>
              </div>
              <div class="d-flex align-center">
                <v-btn @click="decrement(product)"
                  ><v-icon class="pr-5"> mdi-minus </v-icon></v-btn
                >

                <p class="ma-0 pr-5">
                  {{ product.quantity }} x {{ product.price }}
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="pa-10">
        <v-col class="pt-5">
          <div class="basket-drop-button">
            <h4>CHOOSE SHIPPING</h4>
            <v-icon v-on:click="isHidden = !isHidden">
              mdi-chevron-down
            </v-icon>
          </div>
          <div class="basket-drop-button">
            <h4>CHOOSE PAYMENT METHOD</h4>
            <v-icon v-on:click="isHidden = !isHidden">
              mdi-chevron-down
            </v-icon>
          </div>
        </v-col>
        <v-col class="d-flex flex-column align-end justify-start">
          <div class="pb-10">
            <h1>TOTAL AMOUNT: {{ total }} DKK</h1>
          </div>
          <div>
            <ButtonRefresh />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ButtonRefresh from "../components/ButtonRefresh.vue";
export default {
  components: { ButtonRefresh },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
    cart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {
    increment(product) {
      this.$store.dispatch("increment", product);
    },
    decrement(product) {
      this.$store.dispatch("decrement", product);
    },
  },
  mounted() {
    console.log(this.cart);
  },
};
</script>

<style lang="scss">
.pop {
  height: 100vh;
}
.line-dark {
  height: 1px;
  border-top: 2px solid map-get($colorz, secondary);
  width: auto;
}
.pop p {
  color: black;
}
.basketItem {
  height: 4rem;
  border: 2px solid map-get($colorz, secondary);
  padding: 0.875rem;
}
.basket-drop-button {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0.875rem,
    2rem,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  display: flex;
  justify-content: space-between;
}
.basket-drop-button .v-icon {
  width: 10%;
}
</style>
