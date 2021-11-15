<template>
  <div v-if="!loading" class="outer-random d-flex flex-column ">
    <div class="picture-container">
      <v-btn
        @click="addProductToCart(chosenItem)"
        class="addItem"
        icon
        color="highlight"
      >
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
      <router-link :to="{ name: 'Product', params: { id: chosenItem.id } }">
        <img :src="chosenItem.image" alt="" />
      </router-link>
    </div>
    <div class="bottom-bar dark d-flex pa-3">
      <div class="details d-flex flex-column justify-center align-start">
        <p>{{ chosenItem.name }}</p>
        <p style="margin-top:0.5rem;">{{ chosenItem.brand }}</p>
      </div>
      <div class="price d-flex flex-column justify-center align-end">
        <p>{{ chosenItem.price }} DKK</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCardRandom",
  props: ["chosenItem"],
  data() {
    return {
      loading: true,
      //set to true if
    };
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },

  watch: {
    chosenItem: function() {
      if (this.chosenItem !== undefined) this.loading = false;
    },
  },
};
</script>
<style lang="scss">
.outer-random {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  margin: 1rem 0 1rem 1rem;

  height: 45vh;
  width: 20vw;
}
@media screen and (max-width: 1600px) {
  .outer-random {
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
}
</style>
