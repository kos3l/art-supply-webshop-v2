<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10">
          <div class="window-img"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="4" lg="3" xl="2" class="pl-lg-10 pt-lg-7 px-10">
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
                <label for="Faber-Castell">
                  <input
                    type="checkbox"
                    id="Faber-Castell"
                    value="Faber-Castell"
                    v-model="checkedCategories"
                  />
                  <span class="p">Faber-Castell</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Cretacolor">
                  <input
                    type="checkbox"
                    id="Cretacolor"
                    value="Cretacolor"
                    v-model="checkedCategories"
                  />
                  <span class="p">Cretacolor</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Koh-i-Noor">
                  <input
                    type="checkbox"
                    id="Koh-i-Noor"
                    value="Koh-i-Noor"
                    v-model="checkedCategories"
                  />
                  <span class="p">Koh-i-Noor</span>
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
          class="pr-lg-10 itemColumn d-flex flex-wrap justify-lg-start justify-center align-start"
        >
          <ProductCardDrawing
            v-for="drawingItem in drawingAll"
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
import ProductCardDrawing from "../components/ProductCardDrawing.vue";
export default {
  name: "Drawing",
  components: {
    ProductCardDrawing,
  },
  data() {
    return {
      isHidden: true,
      isHiddenType: true,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setDrawingItemsAction");
  },

  computed: {
    drawingItems() {
      return this.$store.getters.getDrawingItems;
    },
    checkedCategories: {
      get() {
        return this.$store.state.checkedCategories;
      },
      set(value) {
        this.$store.commit("updateCategory", value);
      },
    },
    drawingAll() {
      if (this.checkedCategories == "") {
        return this.$store.getters.getDrawingItems;
      } else if (
        this.checkedCategories == "Koh-i-Noor" ||
        this.checkedCategories == "Cretacolor" ||
        this.checkedCategories == "Faber-Castell" ||
        this.checkedCategories == "Derwent"
      ) {
        return this.$store.state.drawingItems.filter(
          (drawingFilter) =>
            drawingFilter.brand === this.checkedCategories[0] ||
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
