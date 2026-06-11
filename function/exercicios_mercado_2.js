// Exercício 2: Sistema de Login (Foco em Declaração de Função e Hoisting)
// Para estruturar o fluxo de um arquivo de forma limpa, muitos desenvolvedores preferem colocar a lógica principal no topo e as funções utilitárias embaixo.

// Tarefa: No topo do seu arquivo, chame uma função passando um usuário: autenticarUsuario("admin", "1234");

// Tarefa: Na parte de baixo do arquivo, use uma Declaração de Função clássica chamada autenticarUsuario(usuario, senha). Ela deve verificar se o usuário é "admin" e a senha é "1234". Se for, exiba "Acesso concedido!", senão, "Acesso negado!".

// (Isso vai testar na prática o conceito de Hoisting que vimos).
autenticarUsuario("admin", "1234");

function autenticarUsuario(usuario, senha) {
  if (usuario === "admin" && senha === "1234") {
    console.log("Acesso concedido!");
  } else {
    console.log("Acesso negado!");
  }
}