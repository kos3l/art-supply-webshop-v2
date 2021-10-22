<template>
  <div class="product-page">
    <v-container fluid light class="pa-0" style="margin-top: 3.6rem;">
      <v-row>
        <v-col class="pop">
            <div  v-for="item in basket" :key="item.name">
                <p>{{ item.name }}</p>
                <p>{{ item.brand }}</p>
            </div>
            <p>meow </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid></v-container>
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
.pop p{

    color:black
}
</style>