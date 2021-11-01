<template>
  <router-link
    v-if="!loading"
    :to="{ name: 'Product', params: { id: chosenItemD.id } }"
  >
    <div class="outer-random d-flex flex-column ">
      <div class="picture-container">
        <img
          src="https://images.pexels.com/photos/1084406/pexels-photo-1084406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
      <div class="bottom-bar dark d-flex pa-3">
        <div class="details d-flex flex-column justify-center align-start">
          <p>{{ chosenItemD.name }}</p>
          <p style="margin-top:0.5rem;">{{ chosenItemD.brand }}</p>
        </div>
        <div class="price d-flex flex-column justify-center align-end">
          <p>{{ chosenItemD.price }} DKK</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardRandomD",
  props: ["chosenItemD"],
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    chosenItemD: function() {
      if (this.chosenItemD !== undefined) this.loading = false;
    },
  },
};
</script>
<style lang="scss">
.outer-random {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  margin: 1rem 0 1rem 1rem;

  height: 45vh;
  width: 20vw;
}
@media screen and (max-width: 1600px) {
  .outer-random {
    @include container_mixin(
      2px,
      map-get($colorz, secondary),
      0,
      0,
      map-get($colorz, secondary),
      map-get($colorz, primary)
    );
    margin: 1rem 0 1rem 1rem;

    height: 400px;
    width: 290px;
  }
}
</style>
