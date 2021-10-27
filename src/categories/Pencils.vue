<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10">
          <div class="window-img"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="4" lg="3" xl="2" class="pl-10 pt-7">
          <div class="filter-wrap">
            <div class="filter-container">
              <h3>CATEGORY</h3>
              <v-btn icon>
                <v-icon v-on:click="isHidden = !isHidden">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div class="dropdown-filters" v-if="!isHidden">
              <div class="filters-checkbox">
                <label for="paint">
                  <input
                    type="checkbox"
                    id="paint"
                    value="paint"
                    v-model="checkedCategories"
                  />
                  <span class="p">PAINT</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="brush">
                  <input
                    type="checkbox"
                    id="brush"
                    value="brush"
                    v-model="checkedCategories"
                  />
                  <span class="p">BRUSH</span>
                </label>
              </div>
            </div>
          </div>
        </v-col>

        <v-col
          sm="12"
          md="8"
          lg="9"
          xl="10"
          class="pr-10 itemColumn d-flex flex-wrap justify-start align-start"
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
          lg="9"
          xl="10"
          class="pr-10 itemColumn d-flex flex-wrap justify-start align-start"
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

export default {
  name: "Pencils",
  components: {
    ProductCardDrawing,
  },
  props: ["ctgr"],

  data() {
    return {
      isHidden: true,
      windowImg: require("../assets/bowbow.jpg"),
    };
  },
  beforeCreate() {
    this.$store.dispatch("setDrawingItems");
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
      console.log(this.drawingItems);
      return this.$store.state.drawingItems.filter(
        (drawingfilter) => drawingfilter.category === "pencil"
      );
    },
    crayonOnly() {
      return this.$store.state.drawingItems.filter(
        (drawingfilter) => drawingfilter.category === "crayon"
      );
    },
  },
};
</script>
<style lang="scss"></style>
