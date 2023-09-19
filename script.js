// Simulação de um "banco de dados" de usuários em JavaScript (em produção, use um banco de
// dados real e bibliotecas de autenticação apropriadas)
const usuarios = [];

// Função para criar um novo usuário
function criarUsuario(nome, senha) {
    const novoUsuario = {
        nome,
        senha,
    };
    usuarios.push(novoUsuario);
}

// Função para fazer login
function fazerLogin(nome, senha) {
    const usuarioEncontrado = usuarios.find((user) => user.nome === nome && user.senha === senha);
    return usuarioEncontrado;
}

// Função para verificar se o usuário está autenticado
function verificarAutenticacao() {
    const usuarioLogado = sessionStorage.getItem("usuarioLogado");
    return !!usuarioLogado;
}

// Event listener para o formulário de login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuario = fazerLogin(nome, senha);

    if (usuario) {
        sessionStorage.setItem("usuarioLogado", nome);
        alert("Login bem-sucedido!");
        window.location.href = "index.html"; // Redirecionar para a página inicial após o login
    } else {
        alert("Login falhou. Verifique suas credenciais.");
    }
});

// Event listener para o botão de logout
document.getElementById("logout-btn").addEventListener("click", function () {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "login.html"; // Redirecionar para a página de login após o logout
});

// Exemplo de como verificar a autenticação em outras partes do seu código
if (verificarAutenticacao()) {
    // O usuário está autenticado, você pode permitir o acesso a recursos protegidos
    // Exemplo: exibir um botão "Log Out"
    document.getElementById("logout-btn").style.display = "block";
} else {
    // O usuário não está autenticado, você pode redirecionar para a página de login
    // Exemplo: redirecionar para a página de login
    window.location.href = "login.html";
}





// Simulação de um "banco de dados" em JavaScript para armazenar postagens
const posts = [];

// Função para adicionar uma nova postagem
function adicionarPostagem(titulo, conteudo) {
    const novaPostagem = {
        titulo,
        conteudo,
        comentarios: [],
    };
    posts.push(novaPostagem);
}

// Função para editar uma postagem existente
function editarPostagem(index, novoTitulo, novoConteudo) {
    if (index >= 0 && index < posts.length) {
        const post = posts[index];
        post.titulo = novoTitulo;
        post.conteudo = novoConteudo;
    }
}

// Função para excluir uma postagem
function excluirPostagem(index) {
    if (index >= 0 && index < posts.length) {
        posts.splice(index, 1);
    }
}

// Função para adicionar um comentário a uma postagem
function adicionarComentario(postIndex, comentario) {
    if (postIndex >= 0 && postIndex < posts.length) {
        const post = posts[postIndex];
        post.comentarios.push(comentario);
    }
}
