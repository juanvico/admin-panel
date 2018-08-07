import React from 'react';
import Loadable from 'react-loadable'

const Loader = require('react-spinkit');
function Loading() {
  return <Loader name='double-bounce' />;
}

const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: Loading,
});

const RegisteUser = Loadable({
  loader: () => import('../views/admin/RegisterUser'),
  loading: Loading,
})

const Home = Loadable({
  loader: () => import('../views/Home'),
  loading: Loading,
})

const UsersInfo = Loadable({
  loader: () => import('../views/admin/UsersInfo'),
  loading: Loading,
})

const routes = [
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/registerUser', name: 'Nuevo Usuario', component: RegisteUser },
  { path: '/usersInfo', name: 'Usuarios', component: UsersInfo }
];

export default routes;
