import Vue from 'vue';
import Router from 'vue-router';
import FirstPage from '@/components/FirstPage';
import LoginRegister from '@/components/LoginRegister';
import AdminNav from '@/components/AdminNav/AdminNav';
// import FirstPageEditor from '@/components/AdminNav/AdminNavEntires/FirstPageEditor';



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
    {
      path: '/admin',
      name: 'admin',
      component: AdminNav,
      // children: {
      //   path: '/firstpageeditor',
      //   name: 'firstpageeditor',
      //   component: FirstPageEditor,
      //   meta: {
      //     visible: true
      //   }
      // }
    },
  ],
});
