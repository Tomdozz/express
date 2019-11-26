<template>
  <div>
    <Navigation></Navigation>
    <div class="maincontent">
      <div class="loginform" v-if="isLogin">
        <h1>Login to Lifearray</h1>
        <p>
          Not registered yet?
          <a @click="displayRegister">Register here</a>
        </p>
        <div class="inputs">
          <input
            class="standard-input"
            type="email"
            name="loginEmail"
            placeholder="ex. yourname@gmail.com"
            v-model="loginEmail"
          />
          <p v-if="!loginEmailIsValid" class="error-messag">
            Enter a valid emailaddress
          </p>
        </div>
        <div class="inputs">
          <input
            class="standard-input"
            type="password"
            name="loginPassword"
            placeholder="***"
            v-model="loginPassword"
          />
          <p v-if="!loginPasswordIsValid" class="error-messag">
            Wrong password
          </p>
        </div>
        <button class="button" @click="login">Login</button>
        <p class="forgotPassword">
          Forgot your password? No worries, we will help you!
        </p>
      </div>
      <div class="registerform" v-if="!isLogin">
        <h1>Create account</h1>
        <div class="inputs">
          <input
            class="standard-input"
            type="name"
            name="firstName"
            placeholder="FirstName"
            v-model="registerFirstName"
          />
        </div>
        <div class="inputs">
          <input
            class="standard-input"
            type="password"
            name="lastName"
            placeholder="LastName"
            v-model="registerLastName"
          />
        </div>
        <div class="inputs">
          <input
            class="standard-input"
            type="email"
            name="email"
            placeholder="Email Address"
            v-model="registerEmail"
          />
        </div>
        <div class="inputs">
          <input
            class="standard-input"
            type="password"
            name="password"
            placeholder="Password"
            v-model="registerPassword"
          />
        </div>
        <div class="error" v-html="error" />
        <button class="button" @click="register">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      registerEmail: '',
      registerPassword: '',
      loginEmail: '',
      loginPassword: '',
      registerFirstName: '',
      registerLastName: '',
      isLogin: true,
      error: null
    }
  },
  computed: {
    loginEmailIsValid() {
      var re = /\S+@\S+\.\S+/
      return re.test(this.loginEmail)
    },
    loginPasswordIsValid() {
      //add logic to check if password is correct
      return true
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.registerEmail,
          password: this.registerPassword
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async login() {
      //add logic to login
    },
    displayRegister() {
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.maincontent {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.inputs {
  padding-top: 1em;
  padding-bottom: 1em;
}
.standard-input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
}

.button {
  background-color: grey;
  border: none;
  color: white;
  padding: 10px 50px;
  font-size: 12px;
}
p {
  opacity: 0.4;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}

.forgotPassword {
  font-size: 12px;
}

.error-messag {
  font-size: 10px;
  color: crimson;
  opacity: 0.5;
}

.error {
  color: crimson;
  opacity: 0.5;
}
@media screen and(max-width:480px) {
  /* center main content */
  /*
    Egenskaper för mobiler
  */
}

@media screen and (min-width: 480px) and (max-width: 1024px) {
  /*
    Egenskaper för tablets
  */
}

@media screen and (min-width: 1025px) {
  /*
    Egenskaper för desktop
  */
}
</style>
