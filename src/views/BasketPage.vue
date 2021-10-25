<template>
  <div class="product-page">
    <v-container fluid light class="pa-0" style="margin-top: 3.6rem;">
      <v-row class="pa-10">
        <v-col lg="12">
          <div class="line-dark"></div>
        </v-col>
        <v-col lg="12">
          <h1>YOUR BASKET</h1>
        </v-col>
        <v-col lg="12">

          <div class="basketItem d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <p class="ma-0 pl-5 900">Name brand</p>
            </div>
            <div class="d-flex align-center">
              <v-icon class="pr-5"> mdi-plus </v-icon>
              <v-icon class="pr-5"> mdi-minus </v-icon>
              <p class="ma-0 pr-5">ammount x price</p>
            </div>
          </div>

        </v-col>
      </v-row>
      <v-row class="pa-10">
        <v-col> 
          <div>
            <h1>CHOOSE SHIPPING</h1>
            <v-icon> mdi- </v-icon>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
    data() {
    return {

    };
    },
    computed:{
        basket() {
           // return this.$store.state.basketItems;
           return this.$store.getters.getBasketItems
        }
    }
}
</script>

<style lang="scss">
.pop{
    height: 100vh;

}
.line-dark{
  height: 1px;
  border-top: 2px solid map-get($colorz, secondary);
  width: auto;
}
.pop p{

    color:black
}
.basketItem{

  height: 4rem;
  border: 2px solid map-get($colorz, secondary );
  padding: 0.875rem;

}

</style>