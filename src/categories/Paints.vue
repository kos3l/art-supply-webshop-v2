<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10">
          <div class="window-img"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="4" lg="4" xl="2" class="pl-10 pt-7">
          <div class="information-container">
            <div class="header-info">
              <h1>PAINTS</h1>
            </div>
            <div class="info-body">
              <p>
                Consider a Vue instance with the data property products,
                products is an array of product objects. A product object
              </p>
              <p>
                Hey, I’m Tushar, a full stack software engineer. I write about
                my acquired knowledge of web-development, the motive of this
                blog is to document my learnings and to help the viewers on the
                similar journey.
              </p>
            </div>
          </div>
        </v-col>
        <v-col
          sm="12"
          md="8"
          lg="8"
          xl="10"
          class="pr-10  itemColumn d-flex flex-wrap justify-start align-start"
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
          lg="8"
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
<style lang="scss">
.information-container {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    2rem,
    0,
    map-get($colorz, primary),
    map-get($colorz, secondary)
  );
  height: auto;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 3rem;
}
.header-indo {
  height: 30%;
}
.info-body {
  height: 70%;
}
</style>
