<template>
  <div id="navbar">
    <div id="home" @click="home">LifeArray</div>
    <div
      id="burger"
      :class="{ active: isBurgerActive }"
      @click.prevent="toggle"
    >
      <slot>
        <button type="button" class="burger-button" title="Menu">
          <span class="burger-bar burger-bar--1"></span>
          <span class="burger-bar burger-bar--2"></span>
          <span class="burger-bar burger-bar--3"></span>
        </button>
      </slot>
      <!-- <div :class="{ 'active' : isBurgerActive }"  id="dropdownlist"> -->
      <transition name="fade">
        <div v-if="isBurgerActive" id="dropdownlist">
          <div class="menu_connector"></div>

          <ul>
            <li v-for="item in items" :key="item.name">
              <router-link class="menuEntry" :to="{ name: item.redirectTo }">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import menuEntries from '../staticdata/menuentries'

export default {
  computed: {
    items() {
      return [
        {
          title: 'Login',
          redirectTo: 'login',
          additionalinformation: ''
        },
        {
          title: 'About',
          redirectTo: 'login',
          additionalinformation: ''
        },
        {
          title: 'Sign up',
          redirectTo: 'login',
          additionalinformation: ''
        },
        {
          title: 'Sign in',
          redirectTo: 'login',
          additionalinformatio: ''
        }
      ]
    }
  },
  mounted() {},
  data() {
    return {
      MenuEntries: menuEntries,
      isBurgerActive: false
    }
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
    },
    home() {
      this.$router.push({ name: 'FirstPage' })
    }
  }
}
</script>

<style>
* {
  margin: 0 !important;
}
#navbar {
  position: fixed;
  /* background-color: rgba(128, 128, 128, 0.171); */
  width: 100%;
  height: 10vh;
}
#home {
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

li {
  list-style-type: none;
}
.menuEntry {
  text-decoration: none;
  color: black;
}
#dropdownlist {
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 150%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  transform-origin: top;
}
.menu_connector {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  transform: translateY(10px);
  transform: rotate(45deg);
  width: 55px;
  height: 55px;
  background-color: rgb(255, 255, 255);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#dropdownlist li {
  width: 200px;
  padding-top: 10px;
  transform: translateY(0);
}
.burger-button {
  position: absolute;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: 0px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 50% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

/* #burger.active .burger-button {
        transform: rotate(-180deg);
    } */
/*
#burger.active .burger-bar {
  background-color: green;
} */

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>
