import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketItems: [
      {
        name: "Caat",
        brand: "orange",
        price: 200,
        type: "Oil",
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});

