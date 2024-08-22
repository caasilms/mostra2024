document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Aqui você pode adicionar a lógica de autenticação real
        // Redireciona para a página de pós-login
        window.location.href = 'post-login.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
