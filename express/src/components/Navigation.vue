<template>
  <div>
     <div id="burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
        <slot>
            <button type="button" class="burger-button" title="Menu">
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
            </button>
        </slot>
    <div :class="{ 'hidden' : !isBurgerActive }"
    class="dropdownlist">
      <ul>
        <li v-for="item in items" :key="item.name">
          <router-link :to="{ name: item.redirectTo}">{{item.title}}</router-link>
        </li>
    <!-- <li v-for="m in MenuEntries" :key="m.name"></li> -->
      </ul>
    </div>
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
        },
      ];
    }
  },
    mounted() {
      console.log(this.$options.name + ' component succesfully mounted');
    },
    data() {
      return {
        MenuEntries: menuEntries,
        isBurgerActive: false
      }
    },
    methods: {
      toggle() {
        this.isBurgerActive = !this.isBurgerActive
      }
    },
}
</script>

<style>
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

    .dropdownlist{
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .burger-button {
        position: relative;
        height: 30px;
        width: 32px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        left: 50%;
        top: 2%;
        transform: translate(-50%, -50%);
        transition: transform .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar {
        background-color: #130f40;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 2px;
        width: auto;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }

    .burger-bar--2 {
        transform-origin: 50% 50%;
        transform: scaleX(.8);
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

    #burger.active .burger-bar {
        background-color: green;
    }

    #burger.active .burger-bar--1 {
        transform: rotate(45deg)
    }

    #burger.active .burger-bar--2 {
        opacity: 0;
    }

    #burger.active .burger-bar--3 {
        transform: rotate(-45deg)
    }
</style>