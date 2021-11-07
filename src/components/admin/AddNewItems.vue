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
              <div class="name">
                <input type="text" placeholder="Name" v-model="name" />
              </div>
              <div class="brand">
                <input type="text" placeholder="Brand" v-model="brand" />
              </div>
              <div class="prices">
                <input type="text" placeholder="Price" v-model="price" />
              </div>
              <div class="category">
                <input type="text" placeholder="Category" v-model="category" />
              </div>
              <div class="type">
                <input type="text" placeholder="Type" v-model="type" />
              </div>
              <div class="description">
                <input
                  type="text"
                  placeholder="Description"
                  v-model="description"
                />
              </div>
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="add-container">
            <div class="add-banner dark d-flex justify-center align-center">
              <h3>PREVIEW</h3>
            </div>
            <div class="preview-container d-flex">
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
    };
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
</style>
