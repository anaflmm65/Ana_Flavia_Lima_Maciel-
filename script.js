function cadastroUsuario() {
    var emailCad = document.getElementById('cademail').value;
    var senhaCad = document.getElementById('cadsenha').value;
    var mensagemCad = document.getElementById('mensCad');

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var Existente = users.find(function(user) {
        return user.emailCad === emailCad;
    });

    if (Existente) {
        mensagemCad.innerHTML = 'Erro: Este usuário já está cadastrado.';
        mensagemCad.style.color = "red";
        return;
    }

    var novo = { emailCad: emailCad, senhaCad: senhaCad };
    users.push(novo);

    localStorage.setItem('users', JSON.stringify(users));

    mensagemCad.style.color = "green";
    mensagemCad.innerHTML = 'Cadastro realizado com sucesso!';
}

function Login() {
    var emailLogin = document.getElementById("email").value;
    var senhaLogin = document.getElementById("senha").value;
    var errorMessage = document.getElementById("error-message");
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var credenciasValidas = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].emailCad === emailLogin && users[i].senhaCad === senhaLogin) {
            credenciasValidas = true;
            break; 
        }
    }
    
    if (credenciasValidas) {
        errorMessage.textContent = "Login bem-sucedido!";
        errorMessage.style.color = "green";

    } else {
        errorMessage.textContent = "Credenciais inválidas. Tente novamente.";
        errorMessage.style.color = "red";
    }
}

