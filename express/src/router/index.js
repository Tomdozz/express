import Vue from 'vue';
import Router from 'vue-router';
import FirstPage from '@/components/FirstPage';
import LoginRegister from '@/components/LoginRegister';
import AdminNav from '@/components/AdminNav/AdminNav';
import FirstPageEditor from '@/components/AdminNav/AdminNavEntires/FirstPageEditor';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      meta: {
        visible: false
      },
      component: FirstPage,
    },
    {
      path: '/login',
      name: 'login', meta: {
        visible: false
      },
      component: LoginRegister,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminNav,
      children: [{
        path: '/firstpageeditor',
        name: 'firstpageeditor',
        component: FirstPageEditor,
        meta: {
          visible: true
        }
      }]
    },
  ],
});
