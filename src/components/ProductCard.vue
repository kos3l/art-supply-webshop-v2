<template>
  <div class="outer d-flex flex-column ">
    <div class="picture-container">
      <img
        src="https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
    </div>
    <div class="bottom-bar dark">
      <p>Oil paint - 200ml</p>
      <p>Van Gogh</p>
      <p>100kr</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style lang="scss">
.outer {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  height: 400px;
  width: 300px;
}
.picture-container {
  height: 80%;
  width: 100%;
}
.picture-container img {
  height: 100%;
  width: 100%;
}
.bottom-bar {
  width: 100%;
  height: 20%;
  font-size: 0.8rem;
}
</style>
