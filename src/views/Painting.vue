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
                <label for="Winsor&Newton">
                  <input
                    type="checkbox"
                    id="Winsor&Newton"
                    value="Winsor & Newton"
                    v-model="checkedCategories"
                  />
                  <span class="p">Winsor & Newton</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="LefrancArtist">
                  <input
                    type="checkbox"
                    id="LefrancArtist"
                    value="Lefranc Artist"
                    v-model="checkedCategories"
                  />
                  <span class="p">Lefranc Artist</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="alensAmesterdam">
                  <input
                    type="checkbox"
                    id="alensAmesterdam"
                    value="alens Amesterdam"
                    v-model="checkedCategories"
                  />
                  <span class="p">alens Amesterdam</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Raphael">
                  <input
                    type="checkbox"
                    id="Raphael"
                    value="Raphael"
                    v-model="checkedCategories"
                  />
                  <span class="p">Raphael</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Van Gogh">
                  <input
                    type="checkbox"
                    id="Van Gogh"
                    value="Van Gogh"
                    v-model="checkedCategories"
                  />
                  <span class="p">Van Gogh</span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter-wrap">
            <div class="filter-container">
              <h3>TYPE</h3>
              <v-btn icon>
                <v-icon v-on:click="isHiddenType = !isHiddenType">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div class="dropdown-filters" v-if="!isHiddenType">
              <div class="filters-checkbox">
                <label for="Flat">
                  <input
                    type="checkbox"
                    id="Flat"
                    value="Flat"
                    v-model="checkedCategories"
                  />
                  <span class="p">Flat</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Round">
                  <input
                    type="checkbox"
                    id="Round"
                    value="Round"
                    v-model="checkedCategories"
                  />
                  <span class="p">Round</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Acrylic">
                  <input
                    type="checkbox"
                    id="Acrylic"
                    value="Acrylic"
                    v-model="checkedCategories"
                  />
                  <span class="p">Acrylic</span>
                </label>
              </div>
              <div class="filters-checkbox">
                <label for="Oil">
                  <input
                    type="checkbox"
                    id="Oil"
                    value="Oil"
                    v-model="checkedCategories"
                  />
                  <span class="p">Oil</span>
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
          class="pr-lg-10  item-column d-flex flex-wrap justify-center justify-lg-start align-start"
        >
          <ProductCardPainting
            v-for="paintingItem in paintingAll"
            :paintingItem="paintingItem"
            :key="paintingItem.id"
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
  name: "Painting",
  components: {
    ProductCardPainting,
  },
  props: ["PaintingCat"],

  data() {
    return {
      isHidden: true,
      isHiddenType: true,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setPaintingItemsAction");
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
    paintingAll() {
      if (this.checkedCategories == "") {
        return this.$store.getters.getPaintingItems;
      } else if (
        this.checkedCategories == "Winsor & Newton" ||
        this.checkedCategories == "Lefranc Artist" ||
        this.checkedCategories == "alens Amesterdam" ||
        this.checkedCategories == "Raphael" ||
        this.checkedCategories == "Van Gogh"
      ) {
        return this.$store.state.paintingItems.filter(
          (paintfilter) =>
            paintfilter.brand === this.checkedCategories[0] ||
            this.checkedCategories[1] ||
            this.checkedCategories[2] ||
            this.checkedCategories[3] ||
            this.checkedCategories[4]
        );
      } else if (
        this.checkedCategories == "Flat" ||
        this.checkedCategories == "Round" ||
        this.checkedCategories == "Acrylic" ||
        this.checkedCategories == "Oil"
      ) {
        return this.$store.state.paintingItems.filter(
          (paintfilter) =>
            paintfilter.type === this.checkedCategories[0] ||
            this.checkedCategories[1] ||
            this.checkedCategories[2] ||
            this.checkedCategories[3]
        );
      } else {
        return [];
      }
    },
  },
};
</script>
<style lang="scss">
.product-page {
  margin-top: 4.4rem;
  min-height: 80vh;
  height: auto;
}
.window-img {
  height: 10rem;
  width: 100%;
  background-image: url("../assets/pexels-steve-johnson-1517076.jpg");
  background-size: cover;
  background-position: 50% 20%;
  border: 2px solid map-get($colorz, secondary);
}
.itemColumn {
  height: auto;
}
.filter-wrap {
  margin-bottom: 2rem;
}
.filter-container {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    1.5rem,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  border-bottom: 0;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid map-get($colorz, secondary);
  transition: 0.5s;
}
.filter-container:hover {
  text-shadow: 0px 1px 8px #7f7f88;
  transition: 0.5s;
}
.dropdown-filters {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  display: flex;
  flex-direction: column;
  border-top: 0;
}
.filters-checkbox {
  height: auto;
  width: 100%;
}
.filters-checkbox label {
  cursor: pointer;
}
.filters-checkbox input[type="checkbox"] {
  display: none;
}
.filters-checkbox label span {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  font-size: 1.2rem;
  border-bottom: solid 2px black;
  width: 100%;
  height: 2.5rem;
  transition: 0.5s;
  user-select: none;
  overflow: hidden;
}
.filters-checkbox:last-child label span {
  border-bottom: 0;
}

.filters-checkbox input[type="checkbox"]:checked ~ span.p {
  background-color: map-get($colorz, secondary);
  color: map-get($colorz, primary);
}
@media screen and (max-width: 800px) {
  .product-page {
    margin-top: 0rem;
  }
}
@media screen and (max-width: 600px) {
  .product-page {
    margin-top: 0rem;
  }
}
</style>
