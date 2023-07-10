const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const contas = [
  { numero: 12345, saldo: 1000, user: 'jorge', token: [] },
  { numero: 54321, saldo: 500, user: 'maria', token: [] },
  { numero: 98765, saldo: 2500, user: 'teresa', token: [] },
];

app.get('/', (_req, res) => {
  res.status(200).json(contas);
});

app.post('/contas', (req, res) => {
  const { numero, saldo, user } = req.body;

  if (!numero || !saldo || !user) {
    return res
      .status(400)
      .send('É necessário fornecer número, saldo e usuário.');
  }

  const existingAccount = contas.find((conta) => conta.user === user);

  if (existingAccount) {
    return res.status(409).send('Essa conta já está cadastrada.');
  }

  contas.push({ numero, saldo, user, token: [] });
  return res.sendStatus(200);
});

app.post('/auth', (req, res) => {
  const { user } = req.body;

  if (!user) return res.status(400).send('É necessário fornecer o usuário.');

  const account = contas.find((conta) => conta.user === user);

  if (!account) {
    return res.status(404).send('Conta não encontrada.');
  }

  account.token = 'TOKEN';
  return res.status(200).send('Autenticado com sucesso.');
});

app.post('/transfer', (req, res) => {
  const { origem, destino, valor } = req.body;
  const token = req.headers['authentication-headers'];

  if (!token) {
    return res.status(401).send('Token não fornecido.');
  }

  const contaOrigem = contas.find((conta) => conta.numero === origem);

  if (!contaOrigem || contaOrigem.token !== token) {
    return res.status(401).send('Token inválido.');
  }

  const contaDestino = contas.find((conta) => conta.numero === destino);

  if (!contaDestino) {
    return res.status(404).send('Conta de destino não encontrada.');
  }

  if (contaOrigem.saldo < valor) {
    return res.status(400).send('Saldo insuficiente.');
  }

  contaOrigem.saldo -= valor;
  contaDestino.saldo += valor;

  return res.status(200).send('Transferência realizada com sucesso.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
