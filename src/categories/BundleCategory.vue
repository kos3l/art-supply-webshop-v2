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
          v-if="ctgr === 'forPainters'"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          class="pl-lg-10 pt-lg-7 px-10"
        >
          <SideInfo :Text="getTexts[5]" />
          /
        </v-col>
        <v-col
          v-if="ctgr === 'forDrawers'"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          class="pl-lg-10 pt-lg-7 px-10"
        >
          <SideInfo :Text="getTexts[2]" />
          /
        </v-col>
        <v-col
          sm="12"
          md="8"
          lg="8"
          xl="8"
          class="pr-lg-10  itemColumn d-flex flex-wrap justify-lg-start justify-center align-start"
          v-if="ctgr === 'forDrawers'"
        >
          <ProductCardBundles
            v-for="bundlesItem in drawersOnly"
            :bundlesItem="bundlesItem"
            :key="bundlesItem.name"
          />
        </v-col>
        <v-col
          sm="12"
          md="8"
          lg="8"
          xl="8"
          class="pr-lg-10  itemColumn d-flex flex-wrap justify-lg-start justify-center align-start"
          v-if="ctgr === 'forPainters'"
        >
          <ProductCardBundles
            v-for="bundlesItem in paintersOnly"
            :bundlesItem="bundlesItem"
            :key="bundlesItem.name"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>

<script>
import "@firebase/firestore";
import ProductCardBundles from "../components/ProductCardBundles.vue";
import SideInfo from "../components/SideInfo.vue";
export default {
  name: "BundleCategory",
  components: {
    ProductCardBundles,
    SideInfo,
  },
  props: ["ctgr"],
  data() {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch("setBundlesItemsAction");
    this.$store.dispatch("setTextContentItems");
  },

  computed: {
    bundlesItems() {
      return this.$store.getters.getBundlesItems;
    },
    drawersOnly() {
      return this.$store.state.bundlesItems.filter(
        (bundlesfilter) => bundlesfilter.category === "forDrawers"
      );
    },
    paintersOnly() {
      return this.$store.state.bundlesItems.filter(
        (bundlesfilter) => bundlesfilter.category === "forPainters"
      );
    },
    getTexts() {
      return this.$store.getters.getTextContentItems;
    },
  },
};
</script>
<style lang="scss"></style>
