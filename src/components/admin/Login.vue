<template>
  <div class="product-page adminBG " style="margin-top: 3.6rem">
    <v-container fluid class="pa-16 " style="margin-top: 3.2rem;">
      <v-row>
        <v-col> </v-col>
        <v-col>
          <div class="login-container mt-10">
            <div class="log-banner dark pa-5">
              ADMINISTRATOR LOG IN
            </div>
            <div class="log-fields-container ">
              <div class="pa-5">
                <v-text-field
                  color="highlight"
                  v-model="email"
                  label="Email"
                  required
                >
                </v-text-field>
                <v-text-field
                  color="highlight"
                  v-model="password"
                  label="Password"
                  required
                >
                </v-text-field>
              </div>

              <div class="button-container d-flex">
                <div class="addBtn d-flex justify-center align-center">
                  <button @click.prevent="signIn()"><h4>LOG IN</h4></button>
                </div>
                <div class="cancelBtn d-flex justify-center align-center">
                  <button @click.prevent="signOut()">
                    <h4>SIGN OUT</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      console.log("Test user data", this.email, this.password);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/admin");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged Out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style lang="scss">
.login-container {
  @include container_mixin(
    2px,
    map-get($colorz, secondary),
    0,
    2rem,
    map-get($colorz, secondary),
    map-get($colorz, primary)
  );
  height: auto;
  box-shadow: 0px 5px 20px map-get($colorz, secondary);
}
.adminBG {
  background: url("../../assets/pexels-zaksheuskaya-1616403.jpg");
  background-size: cover;
  background-position: 40% 80%;
}
</style>
