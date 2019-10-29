import Vue from 'vue';
import Router from 'vue-router';
import FirstPage from '@/components/FirstPage';
import LoginRegister from '@/components/LoginRegister';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginRegister,
    },
  ],
});
