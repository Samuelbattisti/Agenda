import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './assets/css/style.css';

import Login from'./modules/login'

const login = new Login('.formLogin')
const cadastro = new Login('.formCadatro')
  
login.init();
cadastro.init()

