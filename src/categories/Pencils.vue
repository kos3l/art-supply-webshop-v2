<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10">
          <div class="window-img"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-if="ctgr === 'pencil'"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          class="pl-lg-10 pt-lg-7 px-10"
        >
          <SideInfo :Text="getTexts[1]" />
        </v-col>
        <v-col
          v-if="ctgr === 'crayon'"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          class="pl-lg-10 pt-lg-7 px-10"
        >
          <SideInfo :Text="getTexts[0]" />
        </v-col>
        <v-col
          sm="12"
          md="8"
          lg="8"
          xl="8"
          class="pr-lg-10  itemColumn d-flex flex-wrap  justify-lg-start justify-center align-start"
          v-if="ctgr === 'pencil'"
        >
          <ProductCardDrawing
            v-for="drawingItem in pencilOnly"
            :drawingItem="drawingItem"
            :key="drawingItem.name"
          />
        </v-col>
        <v-col
          sm="12"
          md="8"
          lg="8"
          xl="8"
          class="pr-lg-10 itemColumn d-flex flex-wrap  justify-lg-start justify-center align-start"
          v-if="ctgr === 'crayon'"
        >
          <ProductCardDrawing
            v-for="drawingItem in crayonOnly"
            :drawingItem="drawingItem"
            :key="drawingItem.name"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>
<script>
import "@firebase/firestore";
//import { dbPaintingItemsList } from "/firebase"
import ProductCardDrawing from "../components/ProductCardDrawing.vue";
import SideInfo from "../components/SideInfo.vue";
export default {
  name: "Pencils",
  components: {
    ProductCardDrawing,
    SideInfo,
  },
  props: ["ctgr"],

  data() {
    return {
      isHidden: true,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setDrawingItemsAction");
    this.$store.dispatch("setTextContentItems");
  },

  computed: {
    //console.log(this.checkedCategories)
    checkedCategories: {
      get() {
        return this.$store.state.checkedCategories;
      },
      set(value) {
        this.$store.commit("updateCategory", value);
      },
    },
    drawingItems() {
      return this.$store.getters.getDrawingItems;
    },
    pencilOnly() {
      return this.$store.state.drawingItems.filter(
        (drawingfilter) => drawingfilter.category === "pencil"
      );
    },
    crayonOnly() {
      return this.$store.state.drawingItems.filter(
        (drawingfilter) => drawingfilter.category === "crayon"
      );
    },
    getTexts() {
      return this.$store.getters.getTextContentItems;
    },
  },
};
</script>
<style lang="scss"></style>
