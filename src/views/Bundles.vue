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
              <h3>BRAND</h3>
              <v-btn icon>
                <v-icon v-on:click="isHidden = !isHidden">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div class="dropdown-filters" v-if="!isHidden">
              <div class="filters-checkbox">
                <label for="Derwent">
                  <input
                    type="checkbox"
                    id="Derwent"
                    value="Derwent"
                    v-model="checkedCategories"
                  />
                  <span class="p">Derwent</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Talens Van Gogh">
                  <input
                    type="checkbox"
                    id="Talens Van Gogh"
                    value="Talens Van Gogh"
                    v-model="checkedCategories"
                  />
                  <span class="p">Talens Van Gogh</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Kuretake">
                  <input
                    type="checkbox"
                    id="Kuretake"
                    value="Kuretake"
                    v-model="checkedCategories"
                  />
                  <span class="p">Kuretake</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Caran d'Ache">
                  <input
                    type="checkbox"
                    id="Caran d'Ache"
                    value="Caran d'Ache"
                    v-model="checkedCategories"
                  />
                  <span class="p">Caran d'Ache</span>
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
        >
          <ProductCardBundles
            v-for="bundlesItem in bundlesAll"
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
export default {
  name: "Bundles",
  components: {
    ProductCardBundles,
  },
  data() {
    return {
      isHidden: true,
      isHiddenType: true,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setBundlesItemsAction");
  },

  computed: {
    bundlesItems() {
      return this.$store.getters.getBundlesItems;
    },
    checkedCategories: {
      get() {
        return this.$store.state.checkedCategories;
      },
      set(value) {
        this.$store.commit("updateCategory", value);
      },
    },
    bundlesAll() {
      if (this.checkedCategories == "") {
        return this.$store.getters.getBundlesItems;
      } else if (
        this.checkedCategories == "Caran d'Ache" ||
        this.checkedCategories == "Kuretake" ||
        this.checkedCategories == "Talens Van Gogh" ||
        this.checkedCategories == "Derwent"
      ) {
        return this.$store.state.bundlesItems.filter(
          (bundlesFilter) =>
            bundlesFilter.brand === this.checkedCategories[0] ||
            this.checkedCategories[1] ||
            this.checkedCategories[2] ||
            this.checkedCategories[3] ||
            this.checkedCategories[4]
        );
      } else {
        return [];
      }
    },
  },
};
</script>
<style></style>
