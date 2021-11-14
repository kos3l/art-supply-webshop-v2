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
                <div class="admin-item-img"></div>
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
                          <th class="text-left px-2">Order nr.</th>
                          <th class="text-left px-2">QTY</th>
                          <th class="text-left px-2">Item</th>
                          <th class="text-left px-2">Price</th>
                          <th class="text-left px-2">Status</th>
                          <th class="text-left px-2">Archive Item</th>
                          <th class="text-left px-2">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{{ order.orderNumber }}</td>
                          <td>
                            <p
                              v-for="subitem in order.orderLines"
                              :key="subitem.id"
                            >
                              {{ subitem.quantity }}
                            </p>
                          </td>
                          <td>
                            <p
                              v-for="subitem in order.orderLines"
                              :key="subitem.id"
                            >
                              {{ subitem.name }}
                            </p>
                          </td>
                          <td>
                            <p
                              v-for="subitem in order.orderLines"
                              :key="subitem.id"
                            >
                              {{ subitem.price }}
                            </p>
                          </td>
                          <td>
                            <p>{{ order.status }}</p>
                          </td>
                          <td><v-icon> mdi-minus</v-icon></td>
                          <td><v-icon> mdi-delete</v-icon></td>
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
                <div class="admin-item-info"></div>
                <div class="admin-item-img"></div>
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
                <div class="admin-item-info"></div>
                <div class="admin-item-img"></div>
              </div>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
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
  },
};
</script>

<style lang="scss">
.admin-item-info {
  width: 100%;
  height: auto;
}
</style>
