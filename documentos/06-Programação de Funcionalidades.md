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

