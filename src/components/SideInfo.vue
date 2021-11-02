<template>
  <div v-if="!loading" class="information-container">
    <div class="header-info">
      <h1>{{ Text.name }}</h1>
      <div class="line"></div>
    </div>
    <div class="info-body">
      <p>
        {{ Text.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideInfo",
  props: ["Text"],
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    if (this.Text == undefined) {
      return (this.loading = true);
    } else if (this.Text !== undefined) {
      return (this.loading = false);
    }
  },

  watch: {
    Text: function() {
      if (this.Text == undefined) {
        return (this.loading = true);
      } else if (this.Text !== undefined) {
        return (this.loading = false);
      }
    },
  },
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
