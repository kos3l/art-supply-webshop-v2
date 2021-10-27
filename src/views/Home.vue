<template>
  <div id="home">
    <v-container fluid class="wrap">
      <v-row class="top-row">
        <v-col class="pa-0 d-flex justify-center align-end">
          <div class="arrow left">
            <img :src="arrow" alt="" />
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-end pa-0">
          <div class="category-box">
            <img :src="brush" alt="" />
          </div>
        </v-col>
        <v-col class="pa-0 d-flex justify-center align-end">
          <div class="arrow right">
            <img :src="arrow" alt="" />
          </div>
        </v-col>
      </v-row>
      <v-row class="low-row">
        <v-col class="d-flex justify-center align-start">
          <div class="call-to-action dark">
            <h1>{{ callToAction }}</h1>
          </div>
        </v-col>
      </v-row>
      <v-row class="row-size">
        <v-col class="dark">
          <div class="middle-title d-flex justify-center align-center">
            <h1>{{ middleTitle }}</h1>
          </div></v-col
        >
      </v-row>
    </v-container>
    <v-container fluid class="light wrap-plain pa-0 ma-0 ">
      <v-row class="row-size ma-0 pt-10">
        <v-col class=" d-flex justify-center align-center pl-0">
          <ProductCardRandom :chosenItem="chosenItem" />
        </v-col>
        <v-col class=" d-flex justify-center align-center">
          <CardRandomD :chosenItemD="chosenItemD" />
        </v-col>
        <v-col class=" d-flex justify-center align-center ">
          <CardRandomB :chosenItemB="chosenItemB" />
        </v-col>
      </v-row>
      <v-row class="row-size ">
        <v-col>
          <div lg="8" class=" d-flex justify-start align-center pa-6 ">
            <h1 class="ml-16">DISCOVER DIFFERENT PRODUCTS</h1>
          </div>
        </v-col>
        <v-col lg="4" class=" d-flex justify-end align-center mr-16 mt-6 mb-16">
          <button class="refresh" @click="randomItems">
            <p>NEXT</p>
          </button>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="light wrap-plain pa-0 ma-0 ">
      <v-row class="row-last">
        <v-col class="poster pa-16"> </v-col>
        <v-col class="dark pa-16">
          <v-col>
            <div class="header d-flex justify-center align-center">
              <h1>INFORMATION SECTION</h1>
            </div>
          </v-col>
          <v-col>
            <div class="info-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>

              <p>
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit
              </p>
            </div>
          </v-col>
          <v-col class="btn-info d-flex justify-center align-center"> </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCardRandom from "../components/ProductCardRandom.vue";
import CardRandomD from "../components/CardRandomD.vue";
import CardRandomB from "../components/CardRandomB.vue";
export default {
  name: "Home",
  components: {
    ProductCardRandom,
    CardRandomD,
    CardRandomB,
  },
  data() {
    return {
      callToAction: "CHOOSE YOUR PRODUCTS OF INTEREST",
      middleTitle: "BEST QUALITY PRODUCTS SHIPPED WORLDWIDE",
      brush: require("../assets/ferdek.jpg"),
      arrow: require("../assets/arrow.png"),
      chosenItem: [],
      chosenItemD: [],
      chosenItemB: [],
    };
  },
  beforeCreate() {
    this.$store.dispatch("setPaintingItems");
    this.$store.dispatch("setDrawingItems");
    this.$store.dispatch("setBundlesItems");
  },

  methods: {
    randomItems() {
      var chosenNumber = Math.floor(Math.random() * this.paintingItems.length);
      var chosenNumberD = Math.floor(Math.random() * this.drawingItems.length);
      var chosenNumberB = Math.floor(Math.random() * this.bundlesItems.length);
      this.chosenItem = this.paintingItems[chosenNumber];
      this.chosenItemD = this.drawingItems[chosenNumberD];
      this.chosenItemB = this.bundlesItems[chosenNumberB];
    },
  },
  computed: {
    paintingItems() {
      return this.$store.getters.getPaintingItems;
    },
    drawingItems() {
      return this.$store.getters.getDrawingItems;
    },
    bundlesItems() {
      return this.$store.getters.getBundlesItems;
    },
  },
  mounted() {
    this.randomItems();
  },
};
</script>
<style lang="scss">
#home {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-position: 50% 40%;
  margin-top: 3.6rem;
  height: auto;
}
.wrap {
  height: auto;
  margin-left: 0;
  margin-right: 0;
}
.wrap-plain {
  height: auto;
}

.light {
  background-color: map-get($colorz, primary);
  color: map-get($colorz, secondary);
}
.dark {
  background-color: map-get($colorz, secondary);
  color: map-get($colorz, primary);
}
.category-box {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    2rem,
    3em,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  height: 50vh;
  width: 100%;
}
.category-box img {
  width: 100%;
  height: 100%;
}
.row-size {
  width: 100vw;
}
.row-last {
  width: 100%;
  height: 100vh;
  margin: 0;
}
.top-row {
  height: 70vh;
  width: 100vw;
}
.low-row {
  width: 100vw;
  height: 20vh;
}
.call-to-action {
  padding: 0 1rem 0 1rem;
}
.call-to-action h1 {
  font-size: 2rem;
  font-weight: 900;
}
.arrow {
  margin-bottom: 25vh;
}
.arrow img {
  width: 50px;
}
.left {
  transform: rotate(180deg);
}

.middle-title {
  height: 20vh;
}
.poster {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}
.header {
  border: 2px solid map-get($colorz, primary);
  width: 100%;
}
.btn-info {
  height: 40vh;
}

@media screen and (max-width: 600px) {
}
</style>
