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
            <ProductCardDrawing v-for="drawingItem in drawingItems" :drawingItem="drawingItem" :key="drawingItem.name"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>

<script>
import '@firebase/firestore';
import { dbDrawingItemsList } from "/firebase"
import ProductCardDrawing from "../components/ProductCardDrawing.vue";
export default {
  name: "Drawing",
  components:{
    ProductCardDrawing
  },
  data() {
    return {
      drawingItems: [ /*
        {
          name: "Technical Drawing Pencils kit",
          brand: "Koh-i-Noor",
          price: 60,
          type: "Pencil",
        },
        {
          name: "Pitt Graphite Matts Pencils",
          brand: "Faber-Castell",
          price: 20,
          type: "Pencil",
        },
        {
          name: "Drawing Crayons Artist kit",
          brand: "Derwent",
          price: 140,
          type: "Crayon",
        },
        {
          name: "Watercolor Crayons Marino kit",
          brand: "Cretacolor",
          price: 100,
          type: "Crayon",
        },
      */],
    };
  },
  created() {
    dbDrawingItemsList.get().then((querySnapshot) => {
      querySnapshot.forEach((doc => {
        console.log(doc.id, " => ", doc.data());
        var drawingItemData = doc.data();
        console.log(this.drawingItems);
        this.drawingItems.push({
          name:drawingItemData.name,
          id:doc.id,
          brand:drawingItemData.brand,
          price:drawingItemData.price,
          type:drawingItemData.type
        })
      }))
    })
  }
};
</script>
<style></style>
