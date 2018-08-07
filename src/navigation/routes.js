import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from '../containers/DefaultLayout';

const Loader = require('react-spinkit');
function Loading() {
  return <Loader name='double-bounce' />;
}

const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: Loading,
});

const RegisteUser = Loadable({
  loader: () => import('../views/admin/Register'),
  loading: Loading,
})

const routes = [
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/', name: 'Home', component: DefaultLayout },
  { path: '/registerUser', name: 'Nuevo Usuario', component: RegisteUser }
];

export default routes;
