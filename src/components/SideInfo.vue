<template>
  <div class="information-container">
    <div class="header-info">
      <h1>PAINTS</h1>
      <div class="line"></div>
    </div>
    <div class="info-body">
      <p>
        Consider a Vue instance with the data property products, products is an
        array of product objects. A product object
      </p>
      <p>
        Hey, I’m Tushar, a full stack software engineer. I write about my
        acquired knowledge of web-development, the motive of this blog is to
        document my learnings and to help the viewers on the similar journey.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideInfo",
};
</script>

<style lang="scss">
.information-container {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    2rem,
    0,
    map-get($colorz, primary),
    map-get($colorz, secondary)
  );
  height: auto;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 3rem;
  box-shadow: 0px 3px 7px map-get($colorz, secondary);
}
.header-info {
  margin-bottom: 1rem;
}
.header-info h1 {
  margin-bottom: 0.5rem;
  letter-spacing: 0.2rem;
  font-style: italic;
}
.info-body {
  letter-spacing: 0.1rem;
}
</style>
