<template>
  <div v-if="!loading" class="outer-random d-flex flex-column ">
    <div class="picture-container">
      <v-btn
        @click="addProductToCart(chosenItemD)"
        class="addItem"
        icon
        color="highlight"
      >
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
      <router-link
        :to="{ name: 'ProductDrawing', params: { id: chosenItemD.id } }"
      >
        <img :src="chosenItemD.image" alt="" />
      </router-link>
    </div>
    <div class="bottom-bar dark d-flex pa-3">
      <div class="details d-flex flex-column justify-center align-start">
        <p>{{ chosenItemD.name }}</p>
        <p style="margin-top:0.5rem;">{{ chosenItemD.brand }}</p>
      </div>
      <div class="price d-flex flex-column justify-center align-end">
        <p>{{ chosenItemD.price }} DKK</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardRandomD",
  props: ["chosenItemD"],
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    chosenItemD: function() {
      if (this.chosenItemD !== undefined) this.loading = false;
    },
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
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
@media screen and (max-width: 600px) {
  .outer-random {
    margin: 0;
  }
}
</style>
