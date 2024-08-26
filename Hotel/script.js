// Script para o formulário de cadastro
document.getElementById('hotelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const quarto = document.getElementById('quarto').value;

    // Verifica se todos os campos foram preenchidos
    if (nome && email && telefone && quarto) {
        // Exibe mensagem de sucesso
        document.getElementById('mensagem').textContent = `Cadastro realizado com sucesso! Nome: ${nome}, E-mail: ${email}, Quarto: ${quarto}.`;
    } else {
        document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos.';
    }
});

// Script para o formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Simulação de login
    const emailLogin = document.getElementById('emailLogin').value;
    const password = document.getElementById('password').value;

    if (emailLogin && password) {
        alert(`Bem-vindo, ${emailLogin}!`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Script para mostrar/ocultar texto com o botão "Mais"
document.getElementById("toggleButton").addEventListener("click", function(event) {
    event.preventDefault();  // Evita que o link redirecione a página
    var text = document.getElementById("toggleText");
    var icon = this.querySelector("i");
    
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        this.innerHTML = 'Menos <i class="fas fa-minus"></i>';
    } else {
        text.style.display = "none";
        this.innerHTML = 'Mais <i class="fas fa-plus"></i>';
    }
});
