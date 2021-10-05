<template>
  <div>
    <v-container fluid light class="pa-0" style="margin-top: 3.6rem;">
      <v-row>
        <v-col class="pa-10">
          <div class="window-img"></div>
        </v-col>
      </v-row>
    </v-container>
    <v-containe fluid></v-containe>
  </div>
</template>

<script>
export default {
  name: "Bundles",
  data() {
    return {
      drawing: [
        {
          name: "Watercolor Paint kit 14 x 40ml",
          brand: "Talens Van Gogh",
          price: 1000,
          type: "For painters",
        },
        {
          name: "Watercolor Paint Irodori Kobako 6 colors",
          brand: "Kuretake",
          price: 200,
          type: "For painters",
        },
        {
          name: "Drawing Crayons Studio 72 colors",
          brand: "Derwent",
          price: 1200,
          type: "For drawers",
        },
        {
          name: "Oil Pastels Neopastel 96 colors",
          brand: "Caran d'Ache",
          price: 1600,
          type: "For drawers",
        },
      ],
    };
  },
};
</script>
<style></style>
