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
          <!-- painting item list -->
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
                    <v-btn
                      icon
                      @click.stop="dialog = true"
                      @click="editItem(paintingItem)"
                    >
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
                    <v-btn icon @click="deletePaintingItem(paintingItem.id)">
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
          <!-- drawing item list -->
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
                    <v-btn
                      icon
                      @click.stop="dialogDrawing = true"
                      @click="editItemDrawing(drawingItem)"
                    >
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
                    <v-btn icon @click="deleteDrawingItem(drawingItem.id)">
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
          <!-- bundles item list -->
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
                    <v-btn
                      icon
                      @click.stop="dialogBundles = true"
                      @click="editItemBundles(bundlesItem)"
                    >
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
                    <v-btn icon @click="deleteBundlesItem(bundlesItem.id)">
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
          <h1 class="mt-5 welcome-msg text-center">
            Welcome at your Admin page
          </h1>

          <h3 class="font-weight-regular text-center">
            Here you can preview your products and add / edit / delete them!
            Remember when you create a new object to select in which main
            category you would like it to be, like painting, drawing or bundles.
          </h3>
          <div class="d-flex justify-center">
            <router-link :to="{ name: 'addNew' }">
              <button class="add mr-xl-8 mt-5 ">
                <p>ADD NEW</p>
              </button>
            </router-link>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <!-- paintingItems edit card -->
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600">
              <v-card class="card-container">
                <div class="add-container mb-0">
                  <div
                    class="add-banner dark d-flex justify-center align-center"
                  >
                    <h3>EDIT ITEM</h3>
                  </div>
                  <div class="fields-container pt-10">
                    <div class="input-container d-flex align-center ">
                      <input
                        type="text"
                        placeholder="Name"
                        v-model="paintingItem.name"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Brand"
                        v-model="paintingItem.brand"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="number"
                        placeholder="Price"
                        v-model.number="paintingItem.price"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Category"
                        v-model="paintingItem.category"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Type"
                        v-model="paintingItem.type"
                        class="pl-5"
                      />
                    </div>
                    <div
                      class="input-container d-flex align-center mb-10 pt-10 "
                    >
                      <textarea
                        type="text"
                        placeholder="Description"
                        v-model="paintingItem.description"
                        class="pl-5"
                      >
                      </textarea>
                    </div>
                    <div
                      class="input-container d-flex align-center mb-10 "
                      style="width:80%"
                    >
                      <v-file-input
                        label="Add image"
                        color="highlight"
                        @change="uploadImage"
                      ></v-file-input>
                    </div>
                    <div class="d-flex">
                      <div class="addBtn d-flex justify-center align-center">
                        <button
                          @click="updateItem()"
                          @click.stop="dialog = false"
                        >
                          <h4>PUBLISH CHANGES</h4>
                        </button>
                      </div>
                      <div class="cancelBtn d-flex justify-center align-center">
                        <button @click.stop="dialog = false">
                          <h4>CLOSE</h4>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-dialog>
            <v-snackbar v-model="snackbar">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-row>
        </template>
      </v-row>
      <!-- drawingItems edit card -->
      <v-row>
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialogDrawing" persistent max-width="600">
              <v-card class="card-container">
                <div class="add-container mb-0">
                  <div
                    class="add-banner dark d-flex justify-center align-center"
                  >
                    <h3>EDIT ITEM</h3>
                  </div>
                  <div class="fields-container pt-10">
                    <div class="input-container d-flex align-center ">
                      <input
                        type="text"
                        placeholder="Name"
                        v-model="drawingItem.name"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Brand"
                        v-model="drawingItem.brand"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="number"
                        placeholder="Price"
                        v-model.number="drawingItem.price"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Category"
                        v-model="drawingItem.category"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Type"
                        v-model="drawingItem.type"
                        class="pl-5"
                      />
                    </div>
                    <div
                      class="input-container d-flex align-center mb-16 pt-10"
                    >
                      <textarea
                        type="text"
                        placeholder="Description"
                        v-model="drawingItem.description"
                        class="pl-5"
                      >
                      </textarea>
                    </div>
                    <div
                      class="input-container d-flex align-center mb-10 "
                      style="width:80%"
                    >
                      <v-file-input
                        label="Add image"
                        color="highlight"
                        @change="uploadImage"
                      ></v-file-input>
                    </div>
                    <div class="d-flex">
                      <div class="addBtn d-flex justify-center align-center">
                        <button
                          @click="updateItemDrawing()"
                          @click.stop="dialogDrawing = false"
                        >
                          <h4>PUBLISH CHANGES</h4>
                        </button>
                      </div>
                      <div class="cancelBtn d-flex justify-center align-center">
                        <button @click.stop="dialogDrawing = false">
                          <h4>CLOSE</h4>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-dialog>
            <v-snackbar v-model="snackbarDrawing">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbarDrawing = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-row>
        </template>
      </v-row>

      <!-- bundlesItems edit card -->
      <v-row>
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialogBundles" persistent max-width="600">
              <v-card class="card-container">
                <div class="add-container mb-0">
                  <div
                    class="add-banner dark d-flex justify-center align-center"
                  >
                    <h3>EDIT ITEM</h3>
                  </div>
                  <div class="fields-container pt-10">
                    <div class="input-container d-flex align-center ">
                      <input
                        type="text"
                        placeholder="Name"
                        v-model="bundlesItem.name"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Brand"
                        v-model="bundlesItem.brand"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="number"
                        placeholder="Price"
                        v-model.number="bundlesItem.price"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Category"
                        v-model="bundlesItem.category"
                        class="pl-5"
                      />
                    </div>
                    <div class="input-container d-flex align-center">
                      <input
                        type="text"
                        placeholder="Type"
                        v-model="bundlesItem.type"
                        class="pl-5"
                      />
                    </div>
                    <div
                      class="input-container d-flex align-center mb-16 pt-10"
                    >
                      <textarea
                        type="text"
                        placeholder="Description"
                        v-model="bundlesItem.description"
                        class="pl-5"
                      >
                      </textarea>
                    </div>
                    <div
                      class="input-container d-flex align-center mb-10 "
                      style="width:80%"
                    >
                      <v-file-input
                        label="Add image"
                        color="highlight"
                        @change="uploadImage"
                      ></v-file-input>
                    </div>
                    <div class="d-flex">
                      <div class="addBtn d-flex justify-center align-center">
                        <button
                          @click="updateItemBundles()"
                          @click.stop="dialogBundles = false"
                        >
                          <h4>PUBLISH CHANGES</h4>
                        </button>
                      </div>
                      <div class="cancelBtn d-flex justify-center align-center">
                        <button @click.stop="dialogBundles = false">
                          <h4>CLOSE</h4>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-dialog>
            <v-snackbar v-model="snackbarBundles">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbarBundles = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-row>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  dbPaintingItemsList,
  fb,
  dbDrawingItemsList,
  dbBundlesItemsList,
} from "/firebase";
export default {
  name: "Admin",
  data() {
    return {
      isHidden: false,
      isHiddenBundles: false,
      isHiddenDrawing: false,
      dialog: false,
      dialogDrawing: false,
      dialogBundles: false,
      paintingItem: [],
      drawingItem: [],
      bundlesItem: [],
      activatedEditItem: null,
      activatedEditItemDrawing: null,
      activatedEditItemBundles: null,
      snackbar: false,
      snackbarDrawing: false,
      snackbarBundles: false,
      text: `Your changes have been published!`,
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
    deletePaintingItem(id) {
      dbPaintingItemsList
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    deleteDrawingItem(id) {
      dbDrawingItemsList
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    deleteBundlesItem(id) {
      dbBundlesItemsList
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    editItem(paintingItem) {
      this.paintingItem = paintingItem;
      this.activatedEditItem = paintingItem.id;
    },
    editItemDrawing(drawingItem) {
      this.drawingItem = drawingItem;
      this.activatedEditItemDrawing = drawingItem.id;
    },
    editItemBundles(bundlesItem) {
      this.bundlesItem = bundlesItem;
      this.activatedEditItemBundles = bundlesItem.id;
    },

    updateItem() {
      dbPaintingItemsList
        .doc(this.activatedEditItem)
        .update(this.paintingItem)
        .then(() => {
          console.log("document updated");
          this.snackbar = true;
        })
        .catch((error) => {
          console.error("Error updating document", error);
        });
    },
    updateItemDrawing() {
      dbDrawingItemsList
        .doc(this.activatedEditItemDrawing)
        .update(this.drawingItem)
        .then(() => {
          console.log("document updated");
          this.snackbarDrawing = true;
        })
        .catch((error) => {
          console.error("Error updating document", error);
        });
    },
    updateItemBundles() {
      dbBundlesItemsList
        .doc(this.activatedEditItemBundles)
        .update(this.bundlesItem)
        .then(() => {
          console.log("document updated");
          this.snackbarBundles = true;
        })
        .catch((error) => {
          console.error("Error updating document", error);
        });
    },
    uploadImage(e) {
      let file = e;
      console.log(file);
      var storageRef = fb.storage().ref("painting/" + file.name);

      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case fb.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case fb.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
          }
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
.card-container {
  height: 100%;
}
.fields-container {
  height: 100%;
}
</style>
