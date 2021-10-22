<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
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
            <ProductCardPainting  v-for="paintingItem in paintingItems" :paintingItem="paintingItem" :key="paintingItem.name"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>
<script>
import '@firebase/firestore';
//import { dbPaintingItemsList } from "/firebase"
import ProductCardPainting from "../components/ProductCardPainting.vue";
export default {
  name: "Painting",
  components: {
    ProductCardPainting
  },
  data() {
    return {
     /*paintingItems: [
        {
          name: "Oil Paint - 200ml",
          brand: "Van Gogh",
          price: 200,
          type: "Oil",
        },
        {
          name: "Oil Paint - 40ml",
          brand: "Lefranc Artist",
          price: 150,
          type: "Oil",
        },
        {
          name: "Acrylic Paint - 250ml",
          brand: "Talens Amesterdam",
          price: 220,
          type: "Acrylic",
        },
        {
          name: "Acrylic Paint - 118ml",
          brand: "Liquitex",
          price: 240,
          type: "Acrylic",
        },
        {
          name: "Brush Precision 8930 nr 24",
          brand: "Raphael",
          price: 120,
          type: "Flat",
        },
        {
          name: "Brush One Stroke Professional nr 1/2",
          brand: "Winsor & Newton",
          price: 100,
          type: "Flat",
        },
        {
          name: "Brush Kolinsky 8402 nr 10",
          brand: "Raphael",
          price: 100,
          type: "Round",
        },
        {
          name: "Brush Pointed Round Professional nr 8",
          brand: "Winsor & Newton",
          price: 200,
          type: "Round",
        },
      ],*/
      windowImg: require("../assets/bowbow.jpg"),
    };
    
  },
  beforeCreate() {
    this.$store.dispatch('setPaintingItems')
  },
  
  computed: {
    paintingItems() {
      return this.$store.getters.getPaintingItems
    }
  }
  


 

};
</script>
<style lang="scss">
.product-page {
  margin-top: 4.4rem;
  height: auto;
}
.window-img {
  height: 10rem;
  width: 100%;
  background-image: url("../assets/bowbow.jpg");
  background-size: cover;
  border: 2px solid map-get($colorz, secondary);
}
.itemColumn{
  height: auto;
}
</style>
