<template>
  <div id="home">
    <v-container class="wrap">
      <v-row>
        <v-col></v-col>
        <v-col> </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["images"],
};
</script>
<style lang="scss">
#home {
  margin-top: 3.6rem;
  height: 100vh;
}
.wrap {
  background-image: url("/src/assets/bg.jpg");
  background-size: cover;
  height: 100vh;
}
</style>
