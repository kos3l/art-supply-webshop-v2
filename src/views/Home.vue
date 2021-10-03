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
      <v-row class="row-size">
        <v-col>
          <div class=" d-flex justify-start align-center pa-6 pt-16">
            <h1 class="ml-16">{{ middleTitle }}</h1>
          </div>
        </v-col>
      </v-row>
      <v-row class="row-size ma-0">
        <v-col class=" d-flex justify-center align-center">
          <ProductCard />
        </v-col>
        <v-col class=" d-flex justify-center align-center">
          <ProductCard />
        </v-col>
        <v-col class=" d-flex justify-center align-center">
          <ProductCard />
        </v-col>
      </v-row>
      <v-row class="row-size">
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Home",
  components: {
    ProductCard,
  },
  data() {
    return {
      callToAction: "CHOOSE YOUR PRODUCTS OF INTEREST",
      middleTitle: "BEST QUALITY PRODUCTS SHIPPED WORLDWIDE",
      brush: require("../assets/ferdek.jpg"),
      arrow: require("../assets/arrow.png"),
    };
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
  height: 20rem;
  width: 100%;
}
.category-box img {
  width: 100%;
  height: 100%;
}
.row-size {
  width: 100vw;
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
  margin-bottom: 8rem;
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
</style>
