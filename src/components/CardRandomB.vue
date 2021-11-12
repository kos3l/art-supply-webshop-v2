<template>
  <router-link
    v-if="!loading"
    :to="{ name: 'ProductBundles', params: { id: chosenItemB.id } }"
  >
    <div class="outer-random d-flex flex-column ">
      <div class="picture-container">
        <img :src="chosenItemB.image" alt="" />
      </div>
      <div class="bottom-bar dark d-flex pa-3">
        <div class="details d-flex flex-column justify-center align-start">
          <p>{{ chosenItemB.name }}</p>
          <p style="margin-top:0.5rem;">{{ chosenItemB.brand }}</p>
        </div>
        <div class="price d-flex flex-column justify-center align-end">
          <p>{{ chosenItemB.price }} DKK</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardRandomB",
  props: ["chosenItemB"],
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    chosenItemB: function() {
      if (this.chosenItemB !== undefined) this.loading = false;
    },
  },
};
</script>
