<template>
  <v-container class="nav-bg">
    <v-row class="row-h d-flex flex-column align-start justify-center">
      <div class="nav-col ml-10">
        <router-link :to="{ name: 'Home' }">
          <h3 class="ma-0 mb-10">HOME</h3>
        </router-link>
        <router-link :to="{ name: 'Painting' }" class="links"
          ><h3 class="mb-3">PAINTING</h3></router-link
        >
        <router-link
          :to="{ name: 'Paints', params: { ctgr: 'paint' } }"
          class="links"
          ><p class="mb-1">Paints</p></router-link
        >
        <router-link
          :to="{ name: 'Paints', params: { ctgr: 'brush' } }"
          class="links"
          ><p class="mb-1">Brushes</p></router-link
        >
      </div>
      <div class="nav-col ml-10 mt-5">
        <router-link :to="{ name: 'Drawing' }" class="links"
          ><h3 class="mb-3">DRAWING</h3></router-link
        >
        <router-link
          :to="{ name: 'Pencils', params: { ctgr: 'crayon' } }"
          class="links"
          ><p class="mb-1">Crayons</p></router-link
        >
        <router-link
          :to="{ name: 'Pencils', params: { ctgr: 'pencil' } }"
          class="links"
          ><p class="mb-1">Pencils</p></router-link
        >
      </div>
      <div class="nav-col ml-10 mt-5">
        <router-link :to="{ name: 'Bundles' }" class="links"
          ><h3 class="mb-3">BUNDLES</h3></router-link
        >
        <router-link
          :to="{ name: 'BundleCategory', params: { ctgr: 'forDrawers' } }"
          class="links"
          ><p class="mb-1">For Drawers</p></router-link
        >
        <router-link
          :to="{ name: 'BundleCategory', params: { ctgr: 'forPainters' } }"
          class="links"
          ><p class="mb-1">For Painters</p></router-link
        >
      </div>
      <div class=" d-flex align-center nav-col ml-10 mt-5">
        <router-link
          :to="{ name: 'Login' }"
          style="transition: opacity 0.3s ease-out; cursor:auto"
        >
          <v-icon large dense color="primary">
            mdi-account-circle-outline
          </v-icon>
        </router-link>
        <router-link
          :to="{ name: 'BasketPage' }"
          style="transition: opacity 0.3s ease-out; cursor:auto"
          class="ml-16"
        >
          <v-icon large dense color="primary">
            mdi-basket-outline
          </v-icon>
        </router-link>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.nav-bg {
  background-color: map-get($colorz, secondary);
  font-size: 1.5rem;
}
.links {
  color: white;
  text-decoration: none;
}
.row-h {
  height: 100vh;
}
.nav-col {
  height: auto;
}
@media screen and (max-width: 321px) {
.row-h {
  height: 100vh;
}
}
</style>
