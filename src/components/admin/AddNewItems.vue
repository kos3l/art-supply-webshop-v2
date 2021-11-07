<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10 pb-0">
          <div class="line-dark"></div>
        </v-col>
      </v-row>
      <v-row class="pa-10 pt-5 pl-7">
        <v-col>
          <div class="add-container">
            <div class="add-banner dark d-flex justify-center align-center">
              <h3>ADD NEW ITEM</h3>
            </div>
            <div class="fields-container">
              <div class="input-container d-flex align-center ">
                <input
                  type="text"
                  placeholder="Name"
                  v-model="name"
                  class="pl-5"
                />
              </div>
              <div class="input-container d-flex align-center">
                <input
                  type="text"
                  placeholder="Brand"
                  v-model="brand"
                  class="pl-5"
                />
              </div>
              <div class="input-container d-flex align-center">
                <input
                  type="text"
                  placeholder="Price"
                  v-model="price"
                  class="pl-5"
                />
              </div>
              <div class="input-container d-flex align-center">
                <input
                  type="text"
                  placeholder="Category"
                  v-model="category"
                  class="pl-5"
                />
              </div>
              <div class="input-container d-flex align-center">
                <input
                  type="text"
                  placeholder="Type"
                  v-model="type"
                  class="pl-5"
                />
              </div>
              <div class="input-container d-flex align-center">
                <input
                  type="text"
                  placeholder="Description"
                  v-model="description"
                  class="pl-5"
                />
              </div>
              <div class="radio-collections d-flex align-center">
                <form class="d-flex flex-column ">
                  <div class="pl-5 mb-3">
                    <input
                      type="radio"
                      id="paintingCollection"
                      name="collection"
                      value="painting"
                      v-model="picked"
                      checked
                      class="mr-5"
                    />
                    <label for="paintingCollection">Painting collection</label>
                  </div>
                  <div class="pl-5 mb-3">
                    <input
                      type="radio"
                      id="drawingCollection"
                      name="collection"
                      value="drawing"
                      v-model="picked"
                      class="mr-5"
                    />
                    <label for="drawingCollection">Drawing collection</label>
                  </div>
                  <div class="pl-5 mb-3">
                    <input
                      type="radio"
                      id="bundlesCollection"
                      name="collection"
                      value="bundles"
                      v-model="picked"
                      class="mr-5"
                    />
                    <label for="bundlesCollection">Bundles collection</label>
                  </div>
                </form>
              </div>
            </div>
            <div class="d-flex">
              <div
                class="addBtn d-flex justify-center align-center"
                v-if="showPainting"
              >
                <button @click="addItemPainting"><h4>ADD ITEM</h4></button>
              </div>
              <div
                class="addBtn d-flex justify-center align-center"
                v-if="showDrawing"
              >
                <button @click="addItemDrawing"><h4>ADD ITEM</h4></button>
              </div>
              <div
                class="addBtn d-flex justify-center align-center"
                v-if="showBundles"
              >
                <button @click="addItemBundles"><h4>ADD ITEM</h4></button>
              </div>
              <div class="cancelBtn d-flex justify-center align-center">
                <button><h4>CANCEL</h4></button>
              </div>
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="add-container">
            <div class="add-banner dark d-flex justify-center align-center ">
              <h3>PREVIEW</h3>
            </div>
            <div class="preview-container d-flex pa-5">
              <div class="admin-item-info">
                <h3><span id="name-span"> name:</span> {{ name }}</h3>
                <span id="name-span">brand:</span> {{ brand }} /<span
                  id="name-span"
                >
                  price:</span
                >
                {{ price }} DKK /
                <span id="name-span"> category: {{ category }} </span> /
                <span id="name-span"> type: {{ type }} </span>
                <br />
                <p>
                  <span id="name-span">description: </span>{{ description }}
                </p>
              </div>
              <div class="admin-item-img">
                img
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { dbPaintingItemsList } from "/firebase";
import { dbDrawingItemsList } from "/firebase";
import { dbBundlesItemsList } from "/firebase";
export default {
  name: "AddNewItems",
  data() {
    return {
      name: "",
      brand: "",
      price: "",
      description: "",
      category: "",
      type: "",
      picked: "",
      showPainting: false,
      showDrawing: false,
      showBundles: false,
    };
  },
  methods: {
    addItemPainting() {
      dbPaintingItemsList
        .add({
          name: this.name,
          brand: this.brand,
          price: this.price,
          category: this.category,
          type: this.type,
          description: this.description,
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    addItemDrawing() {
      dbDrawingItemsList
        .add({
          name: this.name,
          brand: this.brand,
          price: this.price,
          category: this.category,
          description: this.description,
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    addItemBundles() {
      dbBundlesItemsList
        .add({
          name: this.name,
          brand: this.brand,
          price: this.price,
          category: this.category,
          description: this.description,
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
  },
  mounted() {
    this.picked = "painting";
  },
  updated() {
    if (this.picked == "painting") {
      console.log("painting");
      this.showPainting = true;
      this.showDrawing = false;
      this.showBundles = false;
    } else if (this.picked == "drawing") {
      console.log("drawing");
      this.showDrawing = true;
      this.showBundles = false;
      this.showPainting = false;
    } else if (this.picked == "bundles") {
      console.log("bundles");
      this.showBundles = true;
      this.showPainting = false;
      this.showDrawing = false;
    }
  },
};
</script>

<style lang="scss">
.add-container {
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
.add-banner {
  border-bottom: 2px solid map-get($colorz, secondary);
  height: 4rem;
}
#name-span {
  font-weight: normal;
  font-style: italic;
}
.addBtn {
  width: 50%;
  height: 4rem;
  border: 2px solid map-get($colorz, secondary);
  border-left: 0;
  border-bottom: 0;
  transition: 0.5s ease-in-out;
}
.addBtn:hover {
  background-color: map-get($colorz, highlight);
  transition: 0.5s ease-in-out;
}
.addBtn h4 {
  text-shadow: 0px 3px 20px map-get($colorz, highlight);
}
.cancelBtn {
  width: 50%;
  height: 4rem;
  border-top: 2px solid map-get($colorz, secondary);
  transition: 0.5s ease-in-out;
}
.cancelBtn:hover {
  background-color: map-get($colorz, secondary);
  color: map-get($colorz, primary);
}
.cancelBtn h4 {
  text-shadow: 0px 3px 20px map-get($colorz, secondary);
}
.input-container {
  height: 4rem;
}
.input-container input {
  width: 80%;
  border-bottom: 2px solid map-get($colorz, secondary);
}
</style>
