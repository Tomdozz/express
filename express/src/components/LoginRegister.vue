<template>
  <div>
    <div class="loginform">
      <h1>Login to Lifearray</h1>
    </div>
    <div class="registerform">
      <i>Not registered yet?, register here.</i>
      <div>
        <input type="email" name="email" placeholder="email" v-model="registerEmail" />
        <input type="password" name="password" placeholder="pass" v-model="registerPassword" />
        <button @click="register">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      registerEmail: "",
      registerPassword: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

@media screen and(max-width:480px){
  /*
    Egenskaper för mobiler
  */
}

@media screen and (min-width: 480px) and (max-width: 1024px){
  /*
    Egenskaper för tablets
  */
}

@media screen and (min-width: 1025px){
  /*
    Egenskaper för desktop
  */
}
</style>