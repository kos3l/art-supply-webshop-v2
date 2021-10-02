<template>
  <div id="home">
    <v-container class="wrap">
      <v-row class="top-row">
        <v-col class="pa-0"></v-col>
        <v-col class="d-flex justify-center align-end pa-0">
          <div class="category-box">
            <img :src="brush" alt="" />
          </div>
        </v-col>
        <v-col class="pa-0"></v-col>
      </v-row>
      <v-row class="low-row">
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

  margin-left: 0;
  margin-right: 0;
}
.category-box {
  @include container_mixin(
    3px,
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

.top-row {
  height: 70%;
  width: 100vw;
}
.low-row {
  width: 100vw;
}
.call-to-action {
  background-color: map-get($colorz, secondary);
  color: map-get($colorz, primary);
  padding: 0 1rem 0 1rem;
}
.call-to-action h1 {
  font-size: 2rem;
  font-weight: 900;
}
</style>
