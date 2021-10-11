<template>
  <div>
    <v-container fluid light class="pa-0" style="margin-top: 3.6rem;">
      <v-row>
        <v-col class="pa-10">
          <div class="window-img"></div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>

<script>
import '@firebase/firestore';
import { dbDrawingItemsList } from "/firebase"

export default {
  name: "Drawing",
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
