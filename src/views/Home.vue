<template>
  <div id="home">
    <v-container fluid class="wrap">
      <v-row class="top-row">
        <v-col
          class="pa-0 d-flex justify-center align-end"
          cols="2"
          sm="2"
          lg="4"
        >
        </v-col>
        <v-col
          class=" center-col d-flex justify-center  pa-0"
          cols="8"
          sm="8"
          lg="4"
        >
          <div class="category-box pa-0">
            <img :src="main" alt="" />
          </div>
        </v-col>
        <v-col
          class="pa-0 d-flex justify-center align-end"
          cols="2"
          sm="2"
          lg="4"
        >
        </v-col>
      </v-row>
      <v-row class="low-row">
        <v-col class="d-flex justify-center align-start ">
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
      <v-row class="row-size ma-0 pt-xl-15 pt-lg-10 pt-md-10">
        <v-col
          class=" d-flex justify-center align-center pl-lg-0 pb-lg-0  pt-lg-0  pb-5 pt-10"
        >
          <ProductCardRandom :chosenItem="randomItemsVuex" />
        </v-col>

        <v-col
          class=" d-flex justify-center align-center pl-lg-0 pb-lg-0  pt-lg-0  pb-5 pt-5"
        >
          <CardRandomD :chosenItemD="randomItemsVuexDrawing" />
        </v-col>
        <v-col
          class=" d-flex justify-center align-center pl-lg-0 pb-lg-0  pt-lg-0  pb-10 pt-5"
        >
          <CardRandomB :chosenItemB="randomItemsVuexBundles" />
        </v-col>
      </v-row>
      <v-row class="row-size mt-lg-10 pb-16">
        <v-col>
          <div
            lg="9"
            xl="7"
            class="mobileRandom d-flex justify-space-between align-center  px-xl-16 px-lg-16"
          >
            <h1 id="randomHead" class="ml-xl-15 ml-lg-5 pl-5 pl-lg-0">
              OUR WIDE SELECTION OF TOOLS
            </h1>

            <button
              class="refresh-home mr-xl-8 mt-5 mt-lg-0"
              @click="updateData"
            >
              <p>MORE</p>
            </button>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="light wrap-plain pa-0 ma-0 ">
      <v-row class="row-last ">
        <v-col class="poster pa-lg-16" cols="12" lg="6"> </v-col>
        <v-col class="dark pa-lg-16 pb-0">
          <v-col>
            <div class="header d-flex justify-center align-center">
              <h1>ABOUT US</h1>
            </div>
          </v-col>
          <v-col class="pb-0">
            <div class="info-text ">
              <p>
                Art Supply Store was founded in 2019 in Poland, Wrocław.
                Initially as a small store on plac solny square, with time it
                grew and became Wroclaw's artist's favourite. The idea was to
                offer a unique mix of pencils and artist materials, at good
                prices, with a large customer focus and fast deliveries. Always
                with a high finish (because you customers are just like
                ourselves, aestheticians).
              </p>

              <p>
                Over the years, the ambition has been sharpened and has come to
                include a wide range of of goods and products for creativity. We
                think we have come a long way, but we are far from finished. A
                number of years ago, we adopted the slogan "Tools for
                Creativity". This is how we look at our role, to provide what
                you need for your creating, no matter how you get an outlet for
                your own creativity. We will always have great prices, fast
                deliveries and excellent customer service.
              </p>
            </div>
          </v-col>
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
      callToAction: "EVERY MASTERPIECE STARTS HERE",
      middleTitle: "BEST QUALITY PRODUCTS SHIPPED WORLDWIDE",
      main: require("../assets/canvas.jpeg"),
    };
  },
  computed: {
    randomItemsVuex() {
      return this.$store.getters.getRandomItems;
    },
    randomItemsVuexDrawing() {
      return this.$store.getters.getRandomItemsDrawing;
    },
    randomItemsVuexBundles() {
      return this.$store.getters.getRandomItemsBundles;
    },
  },
  methods: {
    updateData() {
      this.$store.dispatch("setRandomPainting");
      this.$store.dispatch("setRandomDrawing");
      this.$store.dispatch("setRandomBundles");
    },
  },

  beforeCreate() {
    this.$store.dispatch("setDrawingItemsAction");
    this.$store.dispatch("setBundlesItemsAction");
    this.$store.dispatch("setPaintingItemsAction");
  },

  mounted() {
    this.updateData();
  },
};
</script>
<style lang="scss">
#home {
  background-image: url("../assets/pexels-irina-iriser-1005711.jpg");
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
[v-cloak] {
  display: none;
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
#randomHead {
  text-shadow: 0px 0px 20px map-get($colorz, secondary);
}
.middle-title {
  height: 20vh;
}
.poster {
  background-image: url("../assets/pexels-nick-collins-1293120.jpg");
  background-size: cover;
}
.header {
  border: 2px solid map-get($colorz, primary);
  width: 100%;
}
.btn-info {
  height: 40vh;
}
.refresh-home {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  width: 200px;
  height: 60px;
  transition: 0.3s ease-in-out;
  border-radius: 30px;
  box-shadow: 2px 2px 10px map-get($colorz, highlight);
}
.refresh-home:hover {
  transition: 0.3s ease-in-out;
  box-shadow: 0px 0px 20px map-get($colorz, highlight);
}
.refresh-home p {
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 1.2rem;
}
.center-col {
  align-items: end;
}
@media screen and (max-width: 800px) {
  #home {
    margin: 0;
    background-position: 90% 90%;
  }
  .call-to-action {
    text-align: center;
  }
  .middle-title h1 {
    text-align: center;
  }
}
@media screen and (max-width: 600px) {
  #home {
    margin: 0;

    background-position: 90% 90%;
  }
  .top-row {
    height: 55vh;
  }
  .center-col {
    align-items: start;
    margin-top: 4rem;
  }
  .category-box {
    height: 40vh;
  }
  .call-to-action h1 {
    font-size: 1.2rem;
  }
  .call-to-action {
    margin: 0 1rem 0 1rem;
    padding: 1rem;
    text-align: center;
  }
  .middle-title h1 {
    font-size: 1.2rem;
    text-align: center;
    padding: 0 1rem 0 1rem;
  }
  .middle-title {
    margin: 0 1rem 0 1rem;
  }
  .mobileRandom {
    flex-direction: column;
  }
  .mobileRandom h1 {
    text-align: center;
  }
  .poster {
    height: 20vh;
  }
  .row-last {
    height: auto;
  }
}
</style>
