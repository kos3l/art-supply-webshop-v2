<template>
  <button class="refresh" >
    <p>NEXT</p>
  </button>
</template>

<script>
export default {
  name: "ButtonRefresh",

};
</script>

<style lang="scss">
.refresh {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    0,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  width: 150px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 2px 2px 8px map-get($colorz, highlight);
}
.refresh p {
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 1.2rem;
}
</style>
