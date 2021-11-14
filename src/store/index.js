import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import "@firebase/firestore";
import {
  dbPaintingItemsList,
  dbDrawingItemsList,
  dbBundlesItemsList,
  dbOrderItems,
  dbTextContentList,
} from "/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,

    paintingItems: [],
    drawingItems: [],
    bundlesItems: [],
    checkedCategories: [],
    textContent: [],
    randomNumber: null,
    randomNumberDrawing: null,
    randomNumberBundles: null,
    cart: [],
    orderItems: [],
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
    setOrderItems: (state) => {
      let orderItems = [];

      dbOrderItems.onSnapshot((snapshotItems) => {
        orderItems = [];
        snapshotItems.forEach((doc) => {
          var orderItemData = doc.data();
          orderItems.push({
            ...orderItemData,
            id: doc.id,
          });
        });
        state.orderItems = orderItems;
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
    SET_USER: (state, user) => {
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null;
      }
    },
    setProducts(state, product) {
      // update products
      state.paintingItems = product;
    },
    setProductsDrawing(state, productD) {
      // update products
      state.drawingItems = productD;
    },
    setProductsBundles(state, productB) {
      // update products
      state.bundlesItems = productB;
    },

    pushProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1,
        name: product.name,
        price: product.price,
      });

      localStorage.setItem("cart", product);
    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    incrementItemQuantitys(state, cartItems) {
      cartItems.quantity++;
    },
    decrementItemQuantitys(state, cartItems) {
      if (cartItems.quantity > 0) {
        cartItems.quantity--;
      } else {
        state.cart.splice(0, 1);
      }
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    },
    addCheckoutItem: (state, cart) => {
      dbOrderItems.add({
        orderNumber: 2,
        status: "not started",
        orderLines: state.cart,
      });
      console.log(cart);
    },
  },
  actions: {
    setCheckoutItem: (context) => {
      context.commit("addCheckoutItem");
    },
    setOrderItems: (context) => {
      context.commit("setOrderItems");
    },
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
    setUser: (context, user) => {
      context.commit("SET_USER", user);
    },

    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(
          (item) => item.id === product.id
        );
        if (!cartItem) {
          context.commit("pushProductToCart", product);
        } else {
          context.commit("incrementItemQuantity", cartItem);
        }
        context.commit("decrementProductInventory", product);
      }
    },
    increment(context, product) {
      const cartItems = context.state.cart.find(
        (item) => item.id === product.id
      );
      console.log(cartItems);
      context.commit("incrementItemQuantitys", cartItems);
    },
    decrement(context, product) {
      const cartItems = context.state.cart.find(
        (item) => item.id === product.id
      );
      console.log(cartItems);

      context.commit("decrementItemQuantitys", cartItems);
    },
  },
  getters: {
    availableProducts(state) {
      return state.paintingItems.filter(
        (paintingItems) => paintingItems.inventory > 0
      );
    },
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
    getUser: (state) => state.currentUser,
    getCart: (state) => state.cart,

    cartProducts(state) {
      return state.cart.map((cartItem) => {
        const product =
          state.paintingItems.find(
            (paintingItems) => paintingItems.id === cartItem.id
          ) ||
          state.drawingItems.find(
            (drawingItems) => drawingItems.id === cartItem.id
          ) ||
          state.bundlesItems.find(
            (bundlesItems) => bundlesItems.id === cartItem.id
          );

        return {
          name: product.name,
          brand: product.brand,
          id: product.id,
          price: product.price,
          quantity: cartItem.quantity,
        };
      });
    },

    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    getOrderItems: (state) => state.orderItems,
  },
  plugins: [createPersistedState()],

  modules: {},
});
