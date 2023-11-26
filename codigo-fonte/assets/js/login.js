console.log(JSON.parse(localStorage.getItem('userData')));
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const senhaErrada = document.getElementById('senhaErrada');
    const lembrarCheckbox = document.getElementById('lembrar');
    const loginForm = document.getElementById('login-form');

    if (submitButton && emailInput && senhaInput && senhaErrada && lembrarCheckbox && loginForm) {
        lembrarCheckbox.addEventListener('change', function () {
            if (this.checked) {
                localStorage.setItem('lembrar', 'true');
            } else {
                localStorage.removeItem('lembrar');
            }
        });

        const lembrarValor = localStorage.getItem('lembrar');
        if (lembrarValor === 'true') {
            lembrarCheckbox.checked = true;
        }

        const togglePasswordButton = document.querySelector('.toggle-password');
        togglePasswordButton.addEventListener('click', function () {
            if (senhaInput.type === 'password') {
                senhaInput.type = 'text';
            } else {
                senhaInput.type = 'password';
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

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const storedData = JSON.parse(localStorage.getItem('userData'));
            const enteredEmail = emailInput.value;

            if (storedData && storedData.email === enteredEmail) {
                const storedSenha = storedData.senha;
                if (senhaInput.value === storedSenha) {
                    const tipoDoUsuario = storedData.tipo;
                    if (tipoDoUsuario === 'empregador' || tipoDoUsuario === 'gestor') {
                        window.location.href = 'dashboard.html';
                    } else if (tipoDoUsuario === 'programador') {
                        window.location.href = 'dashboardprogramador.html';
                    } else {
                    }
                } else {
                    alert('Login falhou. Verifique suas credenciais.');
                }
            } else {
                alert('Não há dados de usuário registrados.');
            }
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados.');
    }
});
