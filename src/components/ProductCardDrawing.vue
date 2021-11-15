<template>
  <div class="outer d-flex flex-column ">
    <div class="picture-container">
      <v-btn
        @click="addProductToCart(drawingItem)"
        class="addItem"
        icon
        color="highlight"
      >
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
      <router-link
        :to="{ name: 'ProductDrawing', params: { id: drawingItem.id } }"
      >
        <img :src="drawingItem.image" alt="" />
      </router-link>
    </div>
    <div class="bottom-bar dark d-flex pa-3">
      <div class="details d-flex flex-column justify-center align-start">
        <p>{{ drawingItem.name }}</p>
        <p style="margin-top:0.5rem;">{{ drawingItem.brand }}</p>
      </div>
      <div class="price d-flex flex-column justify-center align-end">
        <p>{{ drawingItem.price }} DKK</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCardDrawing",
  props: ["drawingItem"],
  data() {
    return {};
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
};
</script>

<style lang="scss">
.outer {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  margin: 1rem 0 1rem 1rem;

  height: 400px;
  width: 290px;
}
.picture-container {
  height: 75%;
  width: 100%;
}
.picture-container img {
  height: 100%;
  width: 100%;
}
.bottom-bar {
  width: 100%;
  min-height: 25%;
  font-size: 0.9rem;
}
.details {
  width: 70%;
}
.details p {
  margin: 0;
}
.price {
  text-align: end;
  font-size: 1rem;
  font-weight: bold;
  width: 30%;
}
.price p {
  margin: 0;
}
@media screen and (max-width: 960px) {
  .outer {
    @include container_mixin(
      2px,
      map-get($colorz, secondary),
      0,
      0,
      map-get($colorz, secondary),
      map-get($colorz, primary)
    );
    margin: 1rem 0 1rem 2rem;
    height: 370px;
    width: 280px;
  }
}
</style>
