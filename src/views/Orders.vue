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
                <div class="admin-item-info"></div>
              </div>
            </div>
          </v-col>
          <v-col class="editContainer">
            <div
              class="name-banner dark d-flex justify-space-between align-center px-5"
            >
              <h2>ORDERS</h2>
              <v-btn icon>
                <v-icon large color="primary" v-on:click="isHidden = !isHidden">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHidden">
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
                            <v-btn text @click="archiveItems(order.id)"
                              ><v-icon> mdi-archive</v-icon></v-btn
                            >
                          </td>
                          <td>
                            <v-btn
                              color="highlight"
                              text
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
                <v-icon large color="primary" v-on:click="isHidden = !isHidden">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHidden">
              <div class="dropDown-container pa-5 d-flex">
                <div class="admin-item-info">
                  <p>
                    Total Revenue: <span>{{ revenueTotal }}</span>
                  </p>
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
                <v-icon large color="primary" v-on:click="isHidden = !isHidden">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </div>
            <div v-if="isHidden">
              <div class="dropDown-container pa-5 d-flex">
                <div class="admin-item-info">
                  <div>
                    <p id="totalOrders">
                      Total orders: <span>{{ getOrderItems.length }}</span>
                    </p>
                  </div>
                  <div
                    id="revenueList"
                    v-for="item in getOrderItems"
                    :key="item.name"
                  >
                    <div v-if="item.archive == true">
                      <p>
                        Order number: {{ item.orderNumber }}
                        <v-btn text @click="deleteOrderItems(item.id)">
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
</style>
