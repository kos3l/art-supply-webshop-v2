import Vue from "vue";
import Vuex from "vuex";

import "@firebase/firestore";
import { dbPaintingItemsList } from "/firebase";
import { dbDrawingItemsList } from "/firebase";
import { dbBundlesItemsList } from "/firebase";
import { dbTextContentList } from "/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketItems: [
      {
        /*
        name: "Caat",
        brand: "orange",
        price: 200,
        type: "Oil",
        */
      },
    ],
    paintingItems: [],
    drawingItems: [],
    bundlesItems: [],
    checkedCategories: [],
    textContent: [],
  },
  mutations: {
    setPaintingItems: (state) => {
      let paintingItems = [];

      dbPaintingItemsList.onSnapshot((snapshotItems) => {
        paintingItems = [];
        snapshotItems.forEach((doc) => {
          var paintingItemData = doc.data();
          paintingItems.push({
            ...paintingItemData,
            id: doc.id,
          });
        });
        state.paintingItems = paintingItems;
      });
    },
    setDrawingItems: (state) => {
      let drawingItems = [];

      dbDrawingItemsList.onSnapshot((snapshotItems) => {
        drawingItems = [];
        snapshotItems.forEach((doc) => {
          var drawingItemData = doc.data();
          drawingItems.push({
            ...drawingItemData,
            id: doc.id,
          });
        });
        state.drawingItems = drawingItems;
      });
    },
    setBundlesItems: (state) => {
      let bundlesItems = [];

      dbBundlesItemsList.onSnapshot((snapshotItems) => {
        bundlesItems = [];
        snapshotItems.forEach((doc) => {
          var bundlesItemData = doc.data();
          bundlesItems.push({
            ...bundlesItemData,
            id: doc.id,
          });
        });
        state.bundlesItems = bundlesItems;
      });
    },
    setTextContentItems: (state) => {
      let textContent = [];

      dbTextContentList.onSnapshot((snapshotItems) => {
        textContent = [];
        snapshotItems.forEach((doc) => {
          var textContentData = doc.data();
          textContent.push({
            ...textContentData,
            id: doc.id,
          });
        });
        state.textContent = textContent;
      });
    },
    updateCategory(state, checkedCategories) {
      state.checkedCategories = checkedCategories;
    },
  },
  actions: {
    setPaintingItems: (context) => {
      context.commit("setPaintingItems");
    },
    setDrawingItems: (context) => {
      context.commit("setDrawingItems");
    },
    setBundlesItems: (context) => {
      context.commit("setBundlesItems");
    },
    setTextContentItems: (context) => {
      context.commit("setTextContentItems");
    },
  },
  getters: {
    getBasketItems: (state) => state.basketItems,
    getPaintingItems: (state) => state.paintingItems,
    getDrawingItems: (state) => state.drawingItems,
    getBundlesItems: (state) => state.bundlesItems,
    getTextContentItems: (state) => state.textContent,
    productId: (state) => (id) => {
      return state.paintingItems.find((p) => p.id == id);
    },
  },
  modules: {},
});
