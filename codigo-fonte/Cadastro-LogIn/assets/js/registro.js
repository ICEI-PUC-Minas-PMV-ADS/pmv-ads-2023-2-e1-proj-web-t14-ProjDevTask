const senhaInput = document.getElementById('senha');
const tipoInput = document.getElementById('tipo');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const categoriasInput = document.getElementById('categorias');
const descricaoInput = document.getElementById('catStyle');
const empty = document.getElementById('empty');
const senhaErrada = document.getElementById('senhaErrada');
const submitButton = document.getElementById('submitButton');
tipoInput.addEventListener('change', function () {
    if (tipoInput.value === 'mentor') { 
        categoriasInput.style.display = 'block';
        descricaoInput.style.display = 'block'; 
    } else {
        categoriasInput.style.display = 'none'; 
        descricaoInput.style.display = 'none'; 
}});

const togglePasswordButton = document.querySelector('.toggle-password'); 

togglePasswordButton.addEventListener('click', function () {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }
});

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) {
        return false;
    }

    // Validação do CPF
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

const cpfInput = document.getElementById('cpfField');
cpfInput.addEventListener('blur', function () {
    const cpf = cpfInput.value;
    if (!validarCPF(cpf)) {
        empty.innerHTML = 'CPF inválido. Por favor, digite um CPF válido.';
        cpfInput.value = ''; 
        cpfInput.focus();
    } else {
        empty.innerHTML = '';
    }
});

nomeInput.addEventListener('input', function () {
    const nome = nomeInput.value;
    const regex = /[0-9]/g; 
    if (regex.test(nome)) {
        nomeInput.value = nome.replace(regex, ''); 
    }
});

senhaInput.addEventListener('input', function () {
    const senha = senhaInput.value;
    if (senha.length < 8) {
        senhaErrada.innerHTML = 'A senha deve ter pelo menos 8 dígitos.';
        submitButton.disabled = true;
    } else {
        senhaErrada.innerHTML = ''; 
        submitButton.disabled = false;
    }
});