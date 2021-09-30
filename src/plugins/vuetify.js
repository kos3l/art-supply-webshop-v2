import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#EAEAF2",
        secondary: "#04041A",
        highlight: "#EB188A",
      },
    },
  },
});
