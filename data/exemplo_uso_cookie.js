Api.getCodigoAluno = function getCodigoAluno(cookie) {
  return new Promise((resolve, reject) => {
    const url = 'http://apsweb.senacrs.com.br/modulos/aluno/index.php5';

    baseRequest({
      url,
      method: 'GET',
      headers: {
        Cookie: `PHPSESSID=${cookie};`,
      },
    }, (err, data, body) => {
      if (err) {
        debug('Api.getCodigoAluno err: %o', err);
        reject(err);
      }
      const parsedBody = Parser.dadosAluno.parse(body);
      debug('Api.getCodigoAluno resolve: %o', parsedBody);
      resolve(parsedBody);
    });
  });
};
