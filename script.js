var arrayCadastro = [
    {email: "ana", senha: "123"},
    {email: "lucas", senha: "abc"}
];

function Login() {
    var emailLogin = document.getElementById("email").value;
    var senhaLogin = document.getElementById("senha").value;
    var errorMessage = document.getElementById("error-message");
    var credenciasValidas = false;

    for(var i = 0; i < arrayCadastro.length ; i++){
        if(arrayCadastro[i].email === emailLogin && arrayCadastro[i].senha === senhaLogin  ){
            credenciasValidas = true;
            break
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