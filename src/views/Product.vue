<template>
  <div>
    <v-container fluid light class="pa-16" style="margin-top: 3.6rem;">
        <v-row class="background-box">
            <v-col class="pa-16">          
                <div class="window-img"></div>
            </v-col>
            <v-col class="pa-16">
                <div></div>
            </v-col>
        </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      
    };
  },
};
</script>
<style lang="scss">
.background-box{
    background-color: map-get($colorz, secondary);
}
</style>
