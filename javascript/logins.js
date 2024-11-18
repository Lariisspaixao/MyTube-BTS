// Função para carregar os usuários do localStorage
function loadUsers() {
    const users = localStorage.getItem("validUsers");
    if (users) {
        return JSON.parse(users); // Converte a string em array
    } else {
        // Se não houver nenhum usuário salvo, cria um array inicial
        return [
            { username: "allan", password: "1234" },
            { username: "kaue", password: "1234" },
            { username: "larissa", password: "1234" },
            { username: "matheus", password: "1234" },
            { username: "yasmin", password: "1234" }
        ];
    }
}

// Salva os usuários no localStorage
function saveUsers(users) {
    localStorage.setItem("validUsers", JSON.stringify(users));
}

// Função para validar login
function validateLogin() {
    const validUsers = loadUsers(); // Carrega os usuários registrados

    // Obter os valores dos campos de entrada
    const username = document.getElementById("id").value.trim();
    const password = document.getElementById("senha").value.trim();

    // Verificar se os campos estão preenchidos
    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Procurar um usuário válido na lista
    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login bem-sucedido!");
        // Redirecionar para outra página
        window.location.href = "logout.html";
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}

// Função para registrar um novo usuário
function registerUser() {
    const validUsers = loadUsers(); // Carrega os usuários registrados

    const newUsername = document.getElementById("id").value.trim();  // O mesmo ID do login
    const newPassword = document.getElementById("senha").value.trim();  // O mesmo ID da senha

    // Verificar se os campos estão preenchidos
    if (!newUsername || !newPassword) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verificar se o nome de usuário já existe
    const userExists = validUsers.some(user => user.username === newUsername);
    if (userExists) {
        alert("Nome de usuário já está em uso.");
        return;
    }

    // Adicionar novo usuário à lista
    validUsers.push({ username: newUsername, password: newPassword });

    // Salva a lista atualizada de usuários no localStorage
    saveUsers(validUsers);

    alert("Usuário registrado com sucesso!");
    console.log(validUsers); // Apenas para teste (pode ser removido depois)

    // Redirecionar para a página de login após o registro
    window.location.href = "login.html";
}