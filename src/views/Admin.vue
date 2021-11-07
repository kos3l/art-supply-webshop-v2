<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10">
          <div class="line-dark"></div>
          <h2 class="mt-5 welcome-msg">
            Welcome at your Admin page
          </h2>
          <h3 class="font-weight-regular">
            Here you can preview your products and add / edit / delete them!
          </h3>
        </v-col>
      </v-row>
      <v-row class="pa-10">
        <v-col xl="8">
          <v-col class="editContainer">
            <div
              class="name-banner d-flex justify-space-between align-center px-5"
            >
              <h2>PAINTING</h2>
              <v-btn icon>
                <v-icon v-on:click="isHiddenType = !isHiddenType">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div
              class="dropDown-container pa-5"
              v-for="paintingItem in paintingItems"
              :key="paintingItem.id"
            >
              <div>
                {{ paintingItem.name }}
                {{ paintingItem.brand }}
                {{ paintingItem.price }}
                {{ paintingItem.category }}
                {{ paintingItem.type }}
                {{ paintingItem.description }}
              </div>
              <div>
                img
              </div>
            </div>
          </v-col>

          <v-col class="editContainer">
            <div
              class="name-banner d-flex justify-space-between align-center px-5"
            >
              <h2>DRAWING</h2>
              <v-btn icon>
                <v-icon v-on:click="isHiddenType = !isHiddenType">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col class="editContainer">
            <div
              class="name-banner d-flex justify-space-between align-center px-5"
            >
              <h2>BUNDLES</h2>
              <v-btn icon>
                <v-icon v-on:click="isHiddenType = !isHiddenType">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-col>
        <v-col xl="4">
          <p>
            add items
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setPaintingItemsAction");
  },

  computed: {
    paintingItems() {
      return this.$store.getters.getPaintingItems;
    },
  },
};
</script>

<style lang="scss">
.editContainer {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    3rem,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  height: auto;
}
#center {
  border-left: 0;
  border-right: 0;
}
.name-banner {
  width: 100%;
  height: 4rem;
}
.dropDown-container {
  border-top: 2px solid map-get($colorz, secondary);
  height: auto;
}
</style>
