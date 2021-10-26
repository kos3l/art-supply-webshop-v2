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
        <v-col sm="12" md="8" lg="9" xl="10" class="pr-10 itemColumn d-flex flex-wrap justify-start align-start" v-if="ctgr === 'forDrawers'">
            <ProductCardBundles v-for="bundlesItem in drawersOnly" :bundlesItem="bundlesItem" :key="bundlesItem.name"/>
        </v-col>
        <v-col sm="12" md="8" lg="9" xl="10" class="pr-10 itemColumn d-flex flex-wrap justify-start align-start" v-if="ctgr === 'forPainters'">
            <ProductCardBundles v-for="bundlesItem in paintersOnly" :bundlesItem="bundlesItem" :key="bundlesItem.name"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>

<script>
import '@firebase/firestore';
import ProductCardBundles from "../components/ProductCardBundles.vue";
export default {
  name: "BundleCategory",
  components: {
    ProductCardBundles
  },
  props:['ctgr'],
  data() {
    return {
     
    };
  },
  beforeCreate() {
    this.$store.dispatch('setBundlesItems')
  },
  
  computed: {
    bundlesItems() {
      return this.$store.getters.getBundlesItems
    },
    drawersOnly() {
        return this.$store.state.bundlesItems.filter(bundlesfilter => bundlesfilter.category === "forDrawers" )
    },
    paintersOnly() {
          return this.$store.state.bundlesItems.filter(bundlesfilter => bundlesfilter.category === "forPainters" )
    }
  }
};
</script>
<style lang="scss"></style>