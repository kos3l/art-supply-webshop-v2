<template>
<div class="product-page">
    <v-container fluid light class="pa-0" style="margin-top: 3.6rem;">
      <v-row>
        <v-col class="pa-10">
          <div class="window-img"></div>
        </v-col>
      </v-row>
      <v-row >
        <v-col sm="12" md="4" lg="3" xl="2"  class="pl-10" style="background-color:red;">
          <p>meow</p>
        </v-col>
        <v-col sm="12" md="8" lg="9" xl="10" class="pr-10 itemColumn d-flex flex-wrap justify-start align-start">
            <ProductCardBundles v-for="bundlesItem in bundlesItems" :bundlesItem="bundlesItem" :key="bundlesItem.name"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>

<script>
import '@firebase/firestore';
import ProductCardBundles from "../components/ProductCardBundles.vue";
export default {
  name: "Bundles",
  components: {
    ProductCardBundles
  },
  data() {
    return {
     /* bundleItems: [ 
        {
          name: "Watercolor Paint kit 14 x 40ml",
          brand: "Talens Van Gogh",
          price: 1000,
          type: "For painters",
        },
        {
          name: "Watercolor Paint Irodori Kobako 6 colors",
          brand: "Kuretake",
          price: 200,
          type: "For painters",
        },
        {
          name: "Drawing Crayons Studio 72 colors",
          brand: "Derwent",
          price: 1200,
          type: "For drawers",
        },
        {
          name: "Oil Pastels Neopastel 96 colors",
          brand: "Caran d'Ache",
          price: 1600,
          type: "For drawers",
        },
      ],*/
    };
  },
  beforeCreate() {
    this.$store.dispatch('setBundlesItems')
  },
  
  computed: {
    bundlesItems() {
      return this.$store.getters.getBundlesItems
    }
  }
};
</script>
<style></style>
