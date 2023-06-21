function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário por padrão

    try {
        const nome = document.getElementById('nome').value.trim();
        const endereco = document.getElementById('ende').value.trim();
        const pedido = document.getElementById('pedido').value.trim();
        const formaPagamento = document.getElementById('buy').value;

        if (nome === '' || nome.length < 3 || !/^[a-zA-Z]+$/.test(nome)) {
            throw new Error('Por favor, preencha o campo Nome.');
        }

        if (endereco === '') {
            throw new Error('Por favor, preencha o campo Endereço.');
        }

        if (pedido === '') {
            throw new Error('Por favor, preencha o campo Pedido.');
        }

        if (formaPagamento === '') {
            throw new Error('Por favor, selecione uma Forma de Pagamento.');
        }

        // Se tudo estiver válido, você pode prosseguir com o envio do formulário
        console.log('Formulário válido. Enviando...');

        // Aqui você pode adicionar a lógica para enviar o formulário para o servidor

    } catch (error) {
        // Trate o erro aqui exibindo uma mensagem de erro para o usuário
        alert(error.message);
    }
}