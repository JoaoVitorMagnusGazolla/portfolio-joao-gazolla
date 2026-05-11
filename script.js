// Seleciona o formulário de contato e o local onde a mensagem será exibida
const formulario = document.getElementById("form-contato");
const mensagemRetorno = document.getElementById("mensagem-retorno");

// Evento executado quando o usuário tenta enviar o formulário
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Expressão regular simples para verificar se o e-mail possui formato válido
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {
        mensagemRetorno.textContent = "Por favor, preencha todos os campos.";
        mensagemRetorno.style.color = "#ef4444";
        return;
    }

    // Verifica se o e-mail informado é válido
    if (!emailValido.test(email)) {
        mensagemRetorno.textContent = "Por favor, informe um e-mail válido.";
        mensagemRetorno.style.color = "#ef4444";
        return;
    }

    // Simula o envio da mensagem
    mensagemRetorno.textContent = "Obrigado pelo contato! Sua mensagem foi registrada com sucesso.";
    mensagemRetorno.style.color = "#22c55e";

    // Limpa os campos após o envio
    formulario.reset();
});