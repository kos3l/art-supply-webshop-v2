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
          v-if="ctgr === 'paint'"
        >
          <ProductCardPainting
            v-for="paintingItem in paintsOnly"
            :paintingItem="paintingItem"
            :key="paintingItem.name"
          />
        </v-col>
        <v-col
          sm="12"
          md="8"
          lg="9"
          xl="10"
          class="pr-10 itemColumn d-flex flex-wrap justify-start align-start"
          v-if="ctgr === 'brush'"
        >
          <ProductCardPainting
            v-for="paintingItem in brushOnly"
            :paintingItem="paintingItem"
            :key="paintingItem.name"
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
import ProductCardPainting from "../components/ProductCardPainting.vue";

export default {
  name: "Paints",
  components: {
    ProductCardPainting,
  },
  props: ["ctgr"],

  data() {
    return {
      isHidden: true,
      geFilterfish: [],
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
    this.$store.dispatch("setPaintingItems");
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
    paintingItems() {
      return this.$store.getters.getPaintingItems;
    },
    paintsOnly() {
      return this.$store.state.paintingItems.filter(
        (paintfilter) => paintfilter.category === "paint"
      );
    },
    brushOnly() {
      return this.$store.state.paintingItems.filter(
        (paintfilter) => paintfilter.category === "brush"
      );
    },
  },
};
</script>
<style lang="scss"></style>
