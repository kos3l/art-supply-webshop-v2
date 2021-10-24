<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10">
          <div class="window-img"></div>
        </v-col>
      </v-row>
      <v-row >
        <v-col sm="12" md="4" lg="3" xl="2"  class="pl-10 pt-7" >

          <div class="filter-wrap">
            <div class="filter-container">
              <h3>CATEGORY</h3>
              <v-btn
                icon
              >
                <v-icon v-on:click="isHidden = !isHidden" >
                  mdi-chevron-down 
                </v-icon>
              </v-btn>

            </div>
            <div class="dropdown-filters" v-if="!isHidden">
              <div class="filters-checkbox">
                
                <label for="paint">
                  <input type="checkbox" id="paint" value="Paint" v-model="checkedCategories" >
                  <span class="p">PAINT</span>
                </label>
              </div>

              <div class="filters-checkbox">
                <label for="brush" >
                  <input type="checkbox" id="brush" value="Brush" v-model="checkedCategories">
                  <span class="p">BRUSH</span>
                  
                </label>
              </div>
              <span>Checked categories: {{ checkedCategories }}</span>

            </div>
          </div>

        </v-col>
        <v-col sm="12" md="8" lg="9" xl="10" class="pr-10 itemColumn d-flex flex-wrap justify-start align-start">
            <ProductCardPainting  v-for="paintingItem in paintingItems" :paintingItem="paintingItem" :key="paintingItem.name"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
  </div>
</template>
<script>
import '@firebase/firestore';
//import { dbPaintingItemsList } from "/firebase"
import ProductCardPainting from "../components/ProductCardPainting.vue";

export default {
  name: "Painting",
  components: {
    ProductCardPainting
  },
  data() {
    return {
      isHidden: true,
    
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
    this.$store.dispatch('setPaintingItems')
  },
  
  computed: {
    checkedCategories: {
    get () {
      return this.$store.state.checkedCategories
    },
    set (value) {
      this.$store.commit('updateCategory', value)
    }
    },
    paintingItems() {
      return this.$store.getters.getPaintingItems
    },
  
  },
  
};
</script>
<style lang="scss">
.product-page {
  margin-top: 4.4rem;
  height: auto;
}
.window-img {
  height: 10rem;
  width: 100%;
  background-image: url("../assets/bowbow.jpg");
  background-size: cover;
  border: 2px solid map-get($colorz, secondary);
}
.itemColumn{
  height: auto;
}

.filter-container{
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
  border-bottom: 2px solid map-get($colorz, secondary );
  transition: 0.5s;
}
.filter-container:hover{
  text-shadow: 0px 1px 8px #7f7f88;
  transition: 0.5s;

}
.dropdown-filters{
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
.filters-checkbox{
  height: auto;
  width:100%;
}
.filters-checkbox label  {
  cursor: pointer;
}
.filters-checkbox input[type="checkbox"]{
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

.filters-checkbox input[type="checkbox"]:checked ~ span.p{
  background-color: map-get($colorz, secondary );
  color: map-get($colorz, primary );

}
</style>
