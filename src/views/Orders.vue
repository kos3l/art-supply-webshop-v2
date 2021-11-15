<template>
  <div class="product-page">
    <v-container fluid light class="pa-0">
      <v-row>
        <v-col class="pa-10 pb-0">
          <div class="line-dark"></div>
        </v-col>
      </v-row>
      <v-row class="pa-10 pt-5 pl-7">
        <v-col xl="8" lg="8">
          <v-col class="editContainer">
            <div
              class="name-banner dark d-flex justify-space-between align-center px-5"
            >
              <h2>INFO</h2>
              <v-btn icon>
                <v-icon large color="primary" v-on:click="isHidden = !isHidden">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHidden">
              <div class="dropDown-container pa-5 d-flex">
                <div class="admin-item-info">
                  <h3 id="admin-header">Welcome to your orders overview!</h3>
                  <p class="mt-1">
                    To manage orders you simply have to set wether if the order
                    is incomplete, in progress or completed by clicking the
                    highlighted text below status. Next is simply to archive
                    them after completeing, this way you can keep a history and
                    see your earned revenue! You are also able to delete an
                    order by clicking on an icon under remove in orders tab
                  </p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="editContainer">
            <div
              class="name-banner dark d-flex justify-space-between align-center px-5"
            >
              <h2>ORDERS</h2>
              <v-btn icon>
                <v-icon
                  large
                  color="primary"
                  v-on:click="isHiddenOrders = !isHiddenOrders"
                >
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHiddenOrders">
              <div
                class="dropDown-container pa-5 "
                v-for="order in getOrderItems"
                :key="order.id"
              >
                <div class="admin-order-info" style="width:100%">
                  <v-simple-table>
                    <template>
                      <thead style="width:100%">
                        <tr>
                          <th class="text-left px-2 pl-5">
                            Order nr.
                          </th>
                          <th class="text-left px-2 ">QTY</th>
                          <th class="text-left px-2 pl-5">Item</th>
                          <th class="text-left px-2 ">Price</th>
                          <th class="text-left px-2 pl-5">Status</th>
                          <th class="text-left px-2 ">Archive Item</th>
                          <th class="text-left px-2 pl-5">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="order.storeOrder == false">
                          <td class="pl-8">{{ order.orderNumber }}</td>
                          <td class="pt-5">
                            <p
                              v-for="subitem in order.orderLines"
                              :key="subitem.id"
                            >
                              {{ subitem.quantity }}
                            </p>
                          </td>
                          <td class="pt-5">
                            <p
                              v-for="subitem in order.orderLines"
                              :key="subitem.id"
                            >
                              {{ subitem.name }}
                            </p>
                          </td>
                          <td class="pt-5">
                            <p
                              v-for="subitem in order.orderLines"
                              :key="subitem.id"
                            >
                              {{ subitem.price }}
                            </p>
                          </td>
                          <td
                            class="pt-5"
                            id="status_box"
                            :class="order.status"
                            @click="switchStage(order.id)"
                          >
                            <p>{{ order.status }}</p>
                          </td>
                          <td>
                            <v-btn text icon @click="archiveItems(order.id)"
                              ><v-icon> mdi-archive</v-icon></v-btn
                            >
                          </td>
                          <td>
                            <v-btn
                              color="highlight"
                              text
                              icon
                              @click="deleteOrderItems(order.id)"
                              ><v-icon> mdi-delete</v-icon></v-btn
                            >
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </div>
            </div>
          </v-col>
        </v-col>
        <v-col xl="4" lg="4" class="pl-10">
          <v-col class="editContainer">
            <div
              class="name-banner dark d-flex justify-space-between align-center px-5"
            >
              <h2>REVENUE</h2>
              <v-btn icon>
                <v-icon
                  large
                  color="primary"
                  v-on:click="isHiddenRev = !isHiddenRev"
                >
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHiddenRev">
              <div class="dropDown-container pa-5 d-flex">
                <div class="admin-item-info">
                  <h3>
                    Total Revenue:
                    <span class="highlight-bg">{{ revenueTotal }} DKK</span>
                  </h3>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="editContainer">
            <div
              class="name-banner dark d-flex justify-space-between align-center px-5"
            >
              <h2>ARCHIVED ORDERS</h2>
              <v-btn icon>
                <v-icon
                  large
                  color="primary"
                  v-on:click="isHiddenArchive = !isHiddenArchive"
                >
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHiddenArchive">
              <div class="dropDown-container pa-5 d-flex">
                <div
                  class="admin-item-info d-flex flex-column justify-space-between"
                >
                  <div>
                    <h3 class="font-weight-bold mb-2">
                      Total orders: <span>{{ getOrderItems.length }}</span>
                    </h3>
                    <div class="line-dark"></div>
                  </div>
                  <div
                    id="revenueList"
                    v-for="item in getOrderItems"
                    :key="item.name"
                  >
                    <div v-if="item.archive == true">
                      <p class="font-weight-medium mb-0">
                        Order number: {{ item.orderNumber }}
                        <v-btn
                          text
                          icon
                          color="highlight"
                          @click="deleteOrderItems(item.id)"
                        >
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { dbOrderItems } from "/firebase";

export default {
  data() {
    return {
      isHidden: true,
      isHiddenOrders: true,
      isHiddenRev: true,
      isHiddenArchive: true,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  },
  computed: {
    getOrderItems() {
      return this.$store.getters.getOrderItems;
    },
    revenueTotal() {
      var revenueIncome = 0;
      this.getOrderItems.forEach((element) => {
        if (element.archive == true) {
          element.orderLines.forEach((subElement) => {
            revenueIncome += subElement.price * subElement.quantity;
          });
        }
      });
      return revenueIncome;
    },
  },
  methods: {
    switchStage(id) {
      let selectedOrderItem = this.getOrderItems.filter(
        (item) => item.id === id
      )[0];
      if (selectedOrderItem.status === "inprogress") {
        dbOrderItems
          .doc(id)
          .update({ status: "complete" })
          .then(() => {});
      } else if (selectedOrderItem.status === "incomplete") {
        dbOrderItems
          .doc(id)
          .update({ status: "inprogress" })
          .then(() => {});
      } else if (selectedOrderItem.status === "complete") {
        dbOrderItems
          .doc(id)
          .update({ status: "incomplete" })
          .then(() => {});
      }
    },
    archiveItems(id) {
      dbOrderItems
        .doc(id)
        .update({ archive: true, storeOrder: true })
        .then(() => {});
    },
    deleteOrderItems(id) {
      dbOrderItems
        .doc(id)
        .delete()
        .then(() => {
          console.log("deleted");
        });
    },
  },
};
</script>

<style lang="scss">
.admin-item-info {
  width: 100%;
  height: auto;
}
#admin-header {
  text-shadow: 0px 0px 10px map-get($colorz, secondary);
}
.admin-item-info p {
  letter-spacing: 0;
}
#status_box {
  text-shadow: 0px 0px 10px map-get($colorz, highlight);
}
.highlight-bg {
  color: map-get($colorz, highlight);
}
</style>
