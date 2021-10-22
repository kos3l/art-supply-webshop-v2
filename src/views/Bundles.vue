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
            <ProductCardBundles v-for="bundleItem in bundleItems" :bundleItem="bundleItem" :key="bundleItem.name"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>

<script>
import '@firebase/firestore';
import { dbBundlesItemsList } from "/firebase"
import ProductCardBundles from "../components/ProductCardBundles.vue";
export default {
  name: "Bundles",
  components: {
    ProductCardBundles
  },
  data() {
    return {
      bundleItems: [ /*
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
      */],
    };
  },
  created() {
    dbBundlesItemsList.get().then((querySnapshot) => {
      querySnapshot.forEach((doc => {
        console.log(doc.id, " => ", doc.data());
        var bundleItemData = doc.data();
        console.log(this.bundleItems);
        this.bundleItems.push({
          name:bundleItemData.name,
          id:doc.id,
          brand:bundleItemData.brand,
          price:bundleItemData.price,
          type:bundleItemData.type
        })
      }))
    })
  }
};
</script>
<style></style>
