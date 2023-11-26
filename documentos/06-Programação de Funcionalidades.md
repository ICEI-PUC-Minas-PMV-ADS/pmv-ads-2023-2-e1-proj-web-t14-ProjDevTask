# Programação de Funcionalidades

Nesta seção serão apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema, especificadas durante os Requisitos Funcionais.

## Registro e Login de Usuários (RF-01, RF-02)

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t14-ProjDevTask/assets/94735704/cab11cb0-a2cf-47f6-8df1-c17ec9e33408

### Responsável

- Tomaz Martins Pereira Pontes

### Requisito atendido

- [RF-01: Registro de Usuários]
- [RF-02: Login de Usuários]

### Artefatos da funcionalidade

- login.html
- registro.html
- login.js
- registro.js

### Estrutura de Dados

- **Objetos de Usuário:**
Os dados do usuário, como nome, email, CPF e senha, são armazenados em um objeto JavaScript. 

```
const userData = {
    tipo: tipoInput.value,
    nome: nomeInput.value,
    cpf: cpfInput.value,
    email: emailInput.value,
    senha: senhaInput.value
};
```

- **LocalStorage:** Estamos usando o LocalStorage para armazenar algumas informações, como a flag lembrar, que indica se o usuário deseja permanecer conectado, e os dados do usuário em JSON.
```
localStorage.setItem('lembrar', 'true');
localStorage.removeItem('lembrar'); 
```
```
const storedData = JSON.parse(localStorage.getItem('userData'));
```

- **Eventos de Formulário:** Estamos usando eventos JavaScript, como submit e change, para lidar com ações do usuário, como envio de formulário e alterações no estado do checkbox lembrar-me.
- **Exibição de Mensagens de Erro:** Estamos usando elementos HTML, como < div id="senhaErrada" >, para exibir mensagens de erro caso o usuário insira informações incorretas.
- **Controle do Campo de Senha:** Usuário tem um botão para alternar a exibição da senha (texto ou senha).

#### Instruções de acesso

- **REGISTRO:** https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t14-ProjDevTask/codigo-fonte/Cadastro-LogIn/registro.html
- **LOGIN:** https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t14-ProjDevTask/codigo-fonte/Cadastro-LogIn/login.html

## Validação de Usuário (RF-03)

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t14-ProjDevTask/assets/94735704/074513b6-1bf0-4969-b54f-4d1d7a1d0299

### Responsável

- Tomaz Martins Pereira Pontes

### Requisito atendido

- [RF-03: Validação de Login]

### Artefatos da funcionalidade

- login.html
- dashboard.html
- dashboard.js

### Estrutura de Dados

- **Validação com base no LocalStorage:** Verificamos se o usuário fez o login no site para poder visualizar o dashboard, caso não tenha feito, é redirecionado a página de login. Utilizamos window.onload para que essa verificação seja feita no momento em que a página é carregada.

```
function verificarLogin() { 
  const storedData = JSON.parse(localStorage.getItem('userData'));
  if (storedData && (storedData.tipo === 'empregador' || storedData.tipo === 'gestor' || storedData.tipo === 'programador')) {
    console.log('Usuário logado');
} else {
  console.log('Usuário não logado');
    window.location.href = 'login.html';
}
}

window.onload = verificarLogin;
```

## Tarefas (RF-04, RF-05, RF-06, RF-07, RF-08)

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t14-ProjDevTask/assets/94735704/3b6d224f-d1ed-4440-abbb-bb17ff567133



### Responsável

- Tomaz Martins Pereira Pontes

### Requisito atendido

- [RF-04: Feed de Tarefas]
- [RF-05: Adicionar Tarefa]
- [RF-06: Empregador delega tarefas]
- [RF-07: Programador receber tarefas do Empregador]
- [RF-08: Programadores marcam tarefas finalizadas]

### Artefatos da funcionalidade

- dashboard.html
- dashboard.js

