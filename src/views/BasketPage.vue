<template>
  <div class="product-page">
    <v-container fluid light class="pa-0 mt-lg-10">
      <v-row class="pa-lg-10 pa-5">
        <v-col lg="12" cols="12">
          <div class="line-dark"></div>
        </v-col>
        <v-col lg="12" cols="12">
          <h1 id="bask">YOUR BASKET</h1>
        </v-col>
        <v-col lg="12" cols="12">
          <div class="font-upd">
            <div
              v-if="products == ''"
              class="basketItem temporary d-flex justify-space-between align-center mb-5"
            ></div>
            <div
              v-for="product in products"
              :key="product.id"
              class="basketItem d-flex justify-space-between align-center mb-5"
            >
              <div class="d-flex align-center">
                <h4 class="ma-0 pl-lg-5 pl-0 900">
                  {{ product.name }} / {{ product.brand }}
                </h4>
              </div>
              <div class="d-flex align-center">
                <v-btn class="mr-lg-5 mr-1" icon @click="increment(product)"
                  ><v-icon color="highlight">
                    mdi-plus
                  </v-icon></v-btn
                >
                <p class="ma-0 pr-lg-5">
                  {{ product.quantity }} x {{ product.price }} DKK
                </p>
                <v-btn icon @click="decrement(product)"
                  ><v-icon color="secondary"> mdi-minus </v-icon></v-btn
                >
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="pa-lg-10 pa-5">
        <v-col class="pt-5" cols="12">
          <div class="basket-drop-button">
            <h4>CHOOSE SHIPPING</h4>
            <v-icon color="secondary" v-on:click="isHidden = !isHidden">
              mdi-chevron-down
            </v-icon>
          </div>

          <div class="basket-drop-button">
            <h4>CHOOSE PAYMENT METHOD</h4>
            <v-icon color="secondary" v-on:click="isHidden = !isHidden">
              mdi-chevron-down
            </v-icon>
          </div>
        </v-col>
        <v-col
          class="d-flex flex-column align-lg-end align-center justify-lg-start  mb-5"
        >
          <div class="pb-lg-10 pb-5 ">
            <h1 class="text-center text-lg-left">
              TOTAL AMOUNT: {{ total }} DKK
            </h1>
          </div>
          <div>
            <button class="refresh-order" @click="addCheckoutItem()">
              <p>ORDER</p>
            </button>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
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
    addCheckoutItem() {
      this.$store.dispatch("setCheckoutItem");
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
.refresh-order {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  width: 250px;
  height: 60px;
  border-radius: 30px;
  transition: 0.3s ease-in-out;
  box-shadow: 2px 2px 8px map-get($colorz, highlight);
}
.refresh-order:hover {
  transition: 0.3s ease-in-out;
  box-shadow: 0px 0px 20px map-get($colorz, highlight);
}
.refresh-order p {
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 1.2rem;
}
.temporary {
  background-color: #b0b0b6;
}
#bask {
  text-shadow: 0px 0px 20px map-get($colorz, secondary);
}

@media screen and (max-width: 600px) {
  .font-upd {
    font-size: 0.8rem;
  }
}
</style>
