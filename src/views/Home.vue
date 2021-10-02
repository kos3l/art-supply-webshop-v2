<template>
  <div id="home">
    <v-container class="wrap">
      <v-row class="top-row">
        <v-col></v-col>
        <v-col class="d-flex justify-center align-end">
          <div class="category-box">
            <img :src="brush" alt="" />
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center align-center">
          <div class="call-to-action">
            <h1>{{ callToAction }}</h1>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      callToAction: "CHOOSE YOUR PRODUCTS OF INTEREST",
      brush: require("../assets/ferdek.jpg"),
    };
  },
};
</script>
<style lang="scss">
#home {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-position: 50% 10%;
  margin-top: 3.6rem;
  height: 100vh;
}
.wrap {
  height: 100%;
}
.category-box {
  @include container_mixin(
    3px,
    map-get($colorz, secondary),
    0.875rem,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  height: 17rem;
}
.category-box img {
  width: 100%;
  height: 100%;
}
.category-box img {
  background-color: red;
}
.top-row {
  height: 65%;
}
</style>
