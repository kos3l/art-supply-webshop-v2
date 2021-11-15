<template>
  <div class="product-page adminBG mt-lg-5">
    <v-container fluid class="pa-lg-16 mt-lg-5">
      <v-row>
        <v-col cols="0"> </v-col>
        <v-col cols="12" lg="4">
          <div class="login-container mt-lg-10 mt-16">
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
          <v-snackbar v-model="snackbarLogIn">
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="snackbarLogIn = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <v-snackbar v-model="snackbarError">
            {{ textError }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="snackbarError = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <v-snackbar v-model="snackbarOut">
            {{ textOut }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="snackbarOut = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-col>
        <v-col cols="0"></v-col>
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
      snackbarLogIn: false,
      snackbarError: false,
      snackbarOut: false,
      text: "Successfully logged in!",
      textError: "",
      textOut: "Logged out!",
    };
  },
  methods: {
    signIn() {
      console.log("Test user data", this.email, this.password);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.snackbarLogIn = true;
          setTimeout(() => {
            this.$router.push("/admin");
          }, 1000);
        })
        .catch((error) => {
          this.textError = error.message;
          this.snackbarError = true;
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.snackbarOut = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
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
