<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10 pb-0">
          <div class="line-dark"></div>
        </v-col>
      </v-row>
      <v-row class="pa-10 pt-5 pl-7">
        <v-col xl="8">
          <v-col class="editContainer">
            <div
              class="name-banner dark d-flex justify-space-between align-center px-5"
            >
              <h2>PAINTING</h2>
              <v-btn icon>
                <v-icon large color="primary" v-on:click="isHidden = !isHidden">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHidden">
              <div
                class="dropDown-container pa-5 d-flex"
                v-for="paintingItem in paintingItems"
                :key="paintingItem.id"
              >
                <div class="admin-item-info">
                  <h3>{{ paintingItem.name }}</h3>
                  {{ paintingItem.brand }} / {{ paintingItem.price }} DKK /
                  {{ paintingItem.category }} / {{ paintingItem.type }}
                  <br />
                  <p>{{ paintingItem.description }}</p>
                  <div class="d-flex align-center options">
                    <p class="pr-3 font-weight-medium" style="font-size:1.1rem">
                      EDIT:
                    </p>
                    <v-btn icon>
                      <v-icon color="highlight">
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                    <p
                      class="pr-3 ml-10 font-weight-medium"
                      style="font-size:1.1rem"
                    >
                      DELETE:
                    </p>
                    <v-btn icon>
                      <v-icon color="highlight">
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </div>
                <div class="admin-item-img">
                  img
                </div>
              </div>
            </div>
          </v-col>

          <v-col class="editContainer">
            <div
              class="name-banner dark d-flex justify-space-between align-center px-5"
            >
              <h2>DRAWING</h2>
              <v-btn icon>
                <v-icon
                  large
                  color="primary"
                  v-on:click="isHiddenDrawing = !isHiddenDrawing"
                >
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHiddenDrawing">
              <div
                class="dropDown-container pa-5 d-flex"
                v-for="drawingItem in drawingItems"
                :key="drawingItem.id"
              >
                <div class="admin-item-info">
                  <h3>{{ drawingItem.name }}</h3>
                  {{ drawingItem.brand }} / {{ drawingItem.price }} DKK /
                  {{ drawingItem.category }}
                  <br />
                  <p>{{ drawingItem.description }}</p>
                  <div class="d-flex align-center options">
                    <p class="pr-3 font-weight-medium" style="font-size:1.1rem">
                      EDIT:
                    </p>
                    <v-btn icon>
                      <v-icon color="highlight">
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                    <p
                      class="pr-3 ml-10 font-weight-medium"
                      style="font-size:1.1rem"
                    >
                      DELETE:
                    </p>
                    <v-btn icon>
                      <v-icon color="highlight">
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </div>
                <div class="admin-item-img">
                  img
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="editContainer">
            <div
              class="name-banner dark d-flex justify-space-between align-center px-5"
            >
              <h2>BUNDLES</h2>
              <v-btn icon>
                <v-icon
                  large
                  color="primary"
                  v-on:click="isHiddenBundles = !isHiddenBundles"
                >
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHiddenBundles">
              <div
                class="dropDown-container pa-5 d-flex"
                v-for="bundlesItem in bundlesItems"
                :key="bundlesItem.id"
              >
                <div class="admin-item-info">
                  <h3>{{ bundlesItem.name }}</h3>
                  {{ bundlesItem.brand }} / {{ bundlesItem.price }} DKK /
                  {{ bundlesItem.category }}
                  <br />
                  <p>{{ bundlesItem.description }}</p>
                  <div class="d-flex align-center options">
                    <p class="pr-3 font-weight-medium" style="font-size:1.1rem">
                      EDIT:
                    </p>
                    <v-btn icon>
                      <v-icon color="highlight">
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                    <p
                      class="pr-3 ml-10 font-weight-medium"
                      style="font-size:1.1rem"
                    >
                      DELETE:
                    </p>
                    <v-btn icon @click="deletePaintingItem()">
                      <v-icon color="highlight">
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </div>
                <div class="admin-item-img">
                  img
                </div>
              </div>
            </div>
          </v-col>
        </v-col>
        <v-col xl="4" class="pl-10">
          <h1 class="mt-5 welcome-msg">
            Welcome at your Admin page
          </h1>
          <h3 class="font-weight-regular">
            Here you can preview your products and add / edit / delete them!
            Remember when you create a new object to select in which main
            category you would like it to be, like painting, drawing or bundles.
          </h3>
          <div class="d-flex justify-center">
            <router-link :to="{ name: 'addNew' }">
              <button class="add mr-xl-8 mt-14 ">
                <p>ADD NEW</p>
              </button>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { dbPaintingItemsList } from "/firebase";
export default {
  name: "Admin",
  data() {
    return {
      isHidden: false,
      isHiddenBundles: false,
      isHiddenDrawing: false,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setPaintingItemsAction");
    this.$store.dispatch("setDrawingItemsAction");
    this.$store.dispatch("setBundlesItemsAction");
  },

  computed: {
    paintingItems() {
      return this.$store.getters.getPaintingItems;
    },
    bundlesItems() {
      return this.$store.getters.getBundlesItems;
    },
    drawingItems() {
      return this.$store.getters.getDrawingItems;
    },
  },
  methods: {
    deletePaintingItem() {
      dbPaintingItemsList
        .doc(this.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
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
.name-banner button {
  color: white;
}
.dropDown-container {
  border-top: 2px solid map-get($colorz, secondary);
  height: auto;
}
.admin-item-info {
  width: 60%;
  height: auto;
}
.admin-item-img {
  width: 40%;
  background-color: red;
}
.admin-item-info p {
  letter-spacing: 0;
  padding-right: 2rem;
  margin-top: 1rem;
  height: auto;
}
.welcome-msg {
  text-shadow: 0px 1px 8px #7f7f88;
}
.add {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  width: 300px;
  height: 60px;
  border-radius: 30px;
  box-shadow: 2px 2px 8px map-get($colorz, highlight);
}
.add p {
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 1.2rem;
}
</style>
