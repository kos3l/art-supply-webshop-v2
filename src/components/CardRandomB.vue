<template>
  <div v-if="!loading" class="outer-random d-flex flex-column ">
    <div class="picture-container">
      <v-btn
        @click="addProductToCart(chosenItemB)"
        class="addItem"
        icon
        color="highlight"
      >
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
      <router-link
        :to="{ name: 'ProductBundles', params: { id: chosenItemB.id } }"
      >
        <img :src="chosenItemB.image" alt="" />
      </router-link>
    </div>
    <div class="bottom-bar dark d-flex pa-3">
      <div class="details d-flex flex-column justify-center align-start">
        <p>{{ chosenItemB.name }}</p>
        <p style="margin-top:0.5rem;">{{ chosenItemB.brand }}</p>
      </div>
      <div class="price d-flex flex-column justify-center align-end">
        <p>{{ chosenItemB.price }} DKK</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardRandomB",
  props: ["chosenItemB"],
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    chosenItemB: function() {
      if (this.chosenItemB !== undefined) this.loading = false;
    },
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
};
</script>
