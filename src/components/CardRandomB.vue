<template>
  <router-link :to="{ name: 'Product', params: { id: chosenItemB.id } }">
    <div class="outer-random d-flex flex-column ">
      <div class="picture-container">
        <img
          src="https://images.pexels.com/photos/1084406/pexels-photo-1084406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
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
};
</script>
