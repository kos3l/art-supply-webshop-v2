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
          v-if="ctgr === 'paint'"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          class="pl-10 pt-7"
        >
          <SideInfo :Text="getTexts[3]" />
        </v-col>
        <v-col
          v-if="ctgr === 'brush'"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          class="pl-10 pt-7"
        >
          <SideInfo :Text="getTexts[4]" />
        </v-col>
        <v-col
          sm="12"
          md="8"
          lg="8"
          xl="8"
          class="pr-10  itemColumn d-flex flex-wrap justify-start align-start"
          v-if="ctgr === 'paint'"
        >
          <ProductCardPainting
            v-for="paintingItem in paintsOnly"
            :paintingItem="paintingItem"
            :key="paintingItem.name"
            :productPainting="productPainting"
          />
        </v-col>
        <v-col
          sm="12"
          md="8"
          lg="8"
          xl="8"
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
import SideInfo from "../components/SideInfo.vue";
export default {
  name: "Paints",
  components: {
    ProductCardPainting,
    SideInfo,
  },
  props: ["ctgr"],

  data() {
    return {
      isHidden: true,
      geFilterfish: [],
      windowImg: require("../assets/bowbow.jpg"),
    };
  },
  beforeCreate() {
    this.$store.dispatch("setPaintingItems");
    this.$store.dispatch("setTextContentItems");
  },
  computed: {
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
    getTexts() {
      return this.$store.getters.getTextContentItems;
    },
    productPainting() {
      return this.$store.getters.product(this.$route.params.id);
    },
  },
};
</script>
<style lang="scss"></style>
