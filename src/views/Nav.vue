<template>
  <v-container class="nav-bg">
    <v-row class="row-h">
      <v-col cols="12">
        <router-link :to="{ name: 'Painting' }" class="links"
          ><h3>PAINTING</h3></router-link
        >
        <router-link
          :to="{ name: 'Paints', params: { ctgr: 'paint' } }"
          class="links"
          ><p>Paints</p></router-link
        >
        <router-link
          :to="{ name: 'Paints', params: { ctgr: 'brush' } }"
          class="links"
          ><p>Brushes</p></router-link
        >
      </v-col>
      <v-col cols="12">
        <router-link :to="{ name: 'Drawing' }" class="links"
          ><h3>DRAWING</h3></router-link
        >
        <router-link
          :to="{ name: 'Paints', params: { ctgr: 'paint' } }"
          class="links"
          ><p>Paints</p></router-link
        >
        <router-link
          :to="{ name: 'Paints', params: { ctgr: 'brush' } }"
          class="links"
          ><p>Brushes</p></router-link
        >
      </v-col>
      <v-col cols="12">
        <router-link :to="{ name: 'Bundles' }" class="links"
          ><h3>BUNDLES</h3></router-link
        >
        <router-link
          :to="{ name: 'Paints', params: { ctgr: 'paint' } }"
          class="links"
          ><p>Paints</p></router-link
        >
        <router-link
          :to="{ name: 'Paints', params: { ctgr: 'brush' } }"
          class="links"
          ><p>Brushes</p></router-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav-bg {
  background-color: map-get($colorz, secondary);
}
.links {
  color: white;
  text-decoration: none;
}
.row-h {
  height: 100vh;
}
</style>
