<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10 pb-0">
          <div class="line-dark"></div>
        </v-col>
      </v-row>
      <v-row class="pa-lg-10 pa-5 pt-5 pl-lg-7">
        <v-col lg="6" cols="12">
          <div class="add-container">
            <div class="add-banner dark d-flex justify-center align-center">
              <h3>ADD NEW ITEM</h3>
            </div>
            <div class="fields-container pt-5">
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
                  type="number"
                  placeholder="Price"
                  v-model.number="price"
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
                  placeholder="Inventory"
                  v-model="inventory"
                  class="pl-5"
                />
              </div>
              <div class="input-container d-flex align-center">
                <textarea
                  type="text"
                  placeholder="Description"
                  v-model="description"
                  class="pl-5"
                >
                </textarea>
              </div>

              <div class="radio-collections d-flex align-center pt-5 pb-5">
                <form class="d-flex flex-column ">
                  <div class="pl-5 mb-3 paintSelect">
                    <label
                      for="paintingCollection"
                      class=" d-flex align-center"
                    >
                      <input
                        type="radio"
                        id="paintingCollection"
                        name="collection"
                        value="painting"
                        v-model="picked"
                        checked
                        class="mr-5"
                      />
                      <div class="checkmark"></div>
                      Painting collection</label
                    >
                  </div>
                  <div class="pl-5 mb-3 drawSelect">
                    <label for="drawingCollection" class=" d-flex align-center">
                      <input
                        type="radio"
                        id="drawingCollection"
                        name="collection"
                        value="drawing"
                        v-model="picked"
                        class="mr-5"
                      />
                      <div class="checkmark"></div>
                      Drawing collection</label
                    >
                  </div>
                  <div class="pl-5 mb-3 bundleSelect">
                    <label for="bundlesCollection" class=" d-flex align-center">
                      <input
                        type="radio"
                        id="bundlesCollection"
                        name="collection"
                        value="bundles"
                        v-model="picked"
                        class="mr-5"
                      />
                      <div class="checkmark"></div>
                      Bundles collection</label
                    >
                  </div>
                </form>
              </div>
            </div>
            <div class="d-flex">
              <div
                class="addBtn d-flex justify-center align-center"
                v-if="showPainting"
                @click="
                  addItemPainting();
                  snackbar = true;
                "
              >
                <v-btn plain text :disabled="btnDisable">
                  <h4>ADD ITEM</h4>
                </v-btn>
              </div>
              <div
                class="addBtn d-flex justify-center align-center"
                v-if="showDrawing"
                @click="
                  addItemDrawing();
                  snackbar = true;
                "
              >
                <v-btn plain text :disabled="btnDisable">
                  <h4>ADD ITEM</h4>
                </v-btn>
              </div>

              <div
                class="addBtn d-flex justify-center align-center"
                v-if="showBundles"
                @click="
                  addItemBundles();
                  snackbar = true;
                "
              >
                <v-btn plain text :disabled="btnDisable">
                  <h4>ADD ITEM</h4>
                </v-btn>
              </div>
              <div class="cancelBtn d-flex justify-center align-center">
                <button @click="emptyFields">
                  <h4>RESET ALL FIELDS</h4>
                </button>
              </div>
            </div>
          </div>
        </v-col>
        <v-col lg="6" cols="12">
          <div class="add-container">
            <div class="add-banner dark d-flex justify-center align-center ">
              <h3>PREVIEW</h3>
            </div>
            <div class="preview-container d-flex pa-5">
              <div class="admin-item-info">
                <h3 class="pb-5">Status: {{ status }}</h3>
                <span id="name-span"> name:</span> {{ name }}
                <span id="name-span">brand:</span> {{ brand }} /<span
                  id="name-span"
                >
                  price:</span
                >
                {{ price }} DKK / <span id="name-span"> category: </span>
                {{ category }}/ <span id="name-span"> type: </span>{{ type }} /
                <span id="name-span"> inventory: </span>{{ inventory }}
                <br />

                <span id="desc"> description:</span>
                <p style="white-space: pre-line;" class="mt-0">
                  {{ description }}
                </p>
              </div>
              <div class="admin-item-img">
                <img :src="this.image" />
              </div>
            </div>
          </div>
          <v-file-input
            label="Add image"
            color="highlight"
            @change="uploadImage"
          ></v-file-input>
        </v-col>
        <v-snackbar v-model="snackbar">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  dbPaintingItemsList,
  dbDrawingItemsList,
  dbBundlesItemsList,
} from "/firebase";
import firebase from "@firebase/app";

export default {
  name: "AddNewItems",
  data() {
    return {
      name: "",
      brand: "",
      price: null,
      description: "",
      category: "",
      type: "",
      inventory: null,
      image: null,
      picked: "",
      showPainting: false,
      showDrawing: false,
      showBundles: false,
      status: "empty",
      snackbar: false,
      text: `Your item has been published!`,
      btnDisable: true,
    };
  },
  methods: {
    uploadImage(e) {
      let file = e;
      console.log(file);

      var storageRef = firebase.storage().ref();

      let uploadTask = storageRef.child("painting/" + file.name).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.image = downloadURL;
            this.btnDisable = false;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
    addItemPainting() {
      if (this.image != null) {
        dbPaintingItemsList
          .add({
            name: this.name,
            brand: this.brand,
            price: this.price,
            category: this.category,
            type: this.type,
            description: this.description,
            image: this.image,
            inventory: this.inventory,
          })
          .then(() => {
            this.status = "Published! ";
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else console.log("oof");
    },
    addItemDrawing() {
      dbDrawingItemsList
        .add({
          name: this.name,
          brand: this.brand,
          price: this.price,
          type: this.type,
          image: this.image,
          category: this.category,
          description: this.description,
          inventory: this.inventory,
        })
        .then(() => {
          this.status = "Published! ";
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
          type: this.type,
          image: this.image,
          category: this.category,
          description: this.description,
          inventory: this.inventory,
        })
        .then(() => {
          this.status = "Published! ";
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    emptyFields() {
      (this.name = ""),
        (this.brand = ""),
        (this.price = null),
        (this.category = ""),
        (this.description = ""),
        (this.type = "");
      this.inventory = null;
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
    console.log(this.image);
  },
  watch: {
    name: function() {
      if (this.name !== "") this.status = "In progress..";
    },
    brand: function() {
      if (this.brand !== "") this.status = "In progress..";
    },
    price: function() {
      if (this.price !== "") this.status = "In progress..";
    },
    category: function() {
      if (this.category !== "") this.status = "In progress..";
    },
    type: function() {
      if (this.type !== "") this.status = "In progress..";
    },
    description: function() {
      if (this.description !== "") this.status = "In progress..";
    },
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
  font-weight: bold;
  font-style: italic;
}
#desc {
  font-weight: bold;
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
.v-btn {
  height: 100%;
}
.addBtn h4 {
  text-shadow: 0px 3px 20px map-get($colorz, highlight);
  color: map-get($colorz, secondary);
}
.cancelBtn {
  width: 50%;
  height: 4rem;
  border-top: 2px solid map-get($colorz, secondary);
  transition: 0.5s ease-in-out;
}
.cancelBtn button {
  height: 100%;
  transition: 0.5s ease-in-out;
}
.cancelBtn button:hover {
  transition: 0.5s ease-in-out;
  height: 100%;
  background-color: map-get($colorz, secondary);
}
.cancelBtn button:hover h4 {
  color: map-get($colorz, primary);
}
.cancelBtn h4 {
  text-shadow: 0px 3px 20px map-get($colorz, secondary);
  color: map-get($colorz, secondary);
  transition: 0.5s ease-in-out;
}
.input-container {
  height: 4rem;
}
.input-container input {
  width: 80%;
  border-bottom: 2px solid map-get($colorz, secondary);
}
.input-container textarea {
  width: 80%;
  border-bottom: 2px solid map-get($colorz, secondary);
}
.input-container input:focus-visible {
  outline: none;
  box-shadow: none;
}
.input-container textarea:focus-visible {
  outline: none;
  box-shadow: none;
}
.radio-collections input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid map-get($colorz, secondary);
  margin-right: 1rem;
  transition: 0.3s ease-in-out;
}
.paintSelect:hover input ~ .checkmark {
  box-shadow: 1px 2px 5px map-get($colorz, highlight);
  transition: 0.3s ease-in-out;
}
.drawSelect:hover input ~ .checkmark {
  box-shadow: 1px 2px 5px map-get($colorz, highlight);
  transition: 0.3s ease-in-out;
}
.bundleSelect:hover input ~ .checkmark {
  box-shadow: 1px 2px 5px map-get($colorz, highlight);
  transition: 0.3s ease-in-out;
}
.paintSelect input:checked ~ .checkmark {
  background-color: map-get($colorz, secondary);
}
.drawSelect input:checked ~ .checkmark {
  background-color: map-get($colorz, secondary);
}
.bundleSelect input:checked ~ .checkmark {
  background-color: map-get($colorz, secondary);
}
.preview-container {
  height: auto;
}
@media screen and (max-width: 600px) {
  .preview-container {
    flex-direction: column;
  }
  .admin-item-img {
    width: 100%;
    min-height: 100%;
  }
}
</style>
