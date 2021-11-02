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
    paintingItems: [],
    drawingItems: [],
    bundlesItems: [],
    checkedCategories: [],
    textContent: [],
    randomNumber: null,
    randomNumberDrawing: null,
    randomNumberBundles: null,
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
    randomizeNumber: (state) => {
      state.randomNumber = Math.floor(
        Math.random() * state.paintingItems.length
      );
    },
    randomizeNumberDrawing: (state) => {
      state.randomNumberDrawing = Math.floor(
        Math.random() * state.drawingItems.length
      );
    },
    randomizeNumberBundles: (state) => {
      state.randomNumberBundles = Math.floor(
        Math.random() * state.bundlesItems.length
      );
    },
  },
  actions: {
    setPaintingItemsAction: (context) => {
      context.commit("setPaintingItems");
    },
    setDrawingItemsAction: (context) => {
      context.commit("setDrawingItems");
    },
    setBundlesItemsAction: (context) => {
      context.commit("setBundlesItems");
    },
    setTextContentItems: (context) => {
      context.commit("setTextContentItems");
    },
    setRandomPainting: (context) => {
      context.commit("randomizeNumber");
    },
    setRandomDrawing: (context) => {
      context.commit("randomizeNumberDrawing");
    },
    setRandomBundles: (context) => {
      context.commit("randomizeNumberBundles");
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
    productIdDrawing: (state) => (id) => {
      return state.drawingItems.find((p) => p.id == id);
    },
    productIdBundles: (state) => (id) => {
      return state.bundlesItems.find((p) => p.id == id);
    },

    getRandomItems: (state) => {
      return state.paintingItems[state.randomNumber];
    },
    getRandomItemsDrawing: (state) => {
      return state.drawingItems[state.randomNumberDrawing];
    },
    getRandomItemsBundles: (state) => {
      return state.bundlesItems[state.randomNumberBundles];
    },
  },
  modules: {},
});
