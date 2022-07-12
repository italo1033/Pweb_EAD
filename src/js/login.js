function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if(email.value == "is8@aluno.ifal.edu.br" && password.value == "Italo123")
    {
        window.location.href='../../index.html';
    }
    else{
        alert("email ou senha incorretos!")
    }
}