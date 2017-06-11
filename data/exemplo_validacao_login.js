yield nightmare
  .useragent('Mozilla/5.0')
  .goto('http://apsweb.senacrs.com.br/modulos/aluno')
  .wait('a')
  .click('a')
  .wait(100)
  .wait('body')
  .evaluate(function(){
    oAjax.requester.map(function(el){ el.abort() });
  })
  .select('#lstUnidades', unidade)
  .type('#usr', user)
  .type('[name=passwd]', password)
  .click('#btnEntrar')
  .wait(function(){
    var textFailed = document.querySelector('span[style="color:red"]');
    var loginFailed   = textFailed ? textFailed.innerHTML.trim() !== '': false;
    var loginSuccess  = document.querySelectorAll('iframe').length;
    return loginFailed || loginSuccess;
  });



  
