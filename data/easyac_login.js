const Easyac = require('easyac-crawler');

const user = '631420378';
const password = 'senha';
const unidade = 63;

Easyac.login(user, password, unidade)
.then(cookie => {
  // usuário autenticado
})
.catch(err => {
  // erro ao logar
});
