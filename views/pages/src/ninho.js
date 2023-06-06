const db = {
    nome: 'Bolo de Leite Ninho',
    preco: 19.99,
    sabor: 'Leite Ninho'
}

function pDados(dados) {
  const namePedido = document.getElementById('item_one');
  const precoPedido = document.getElementById('item_two');
  const saborPedido = document.getElementById('item_tree')

  namePedido.textContent = dados.nome; 
  precoPedido.textContent = dados.preco; 
  saborPedido.textContent = dados.sabor;
}

pDados(db)

function finalizar(){
    const final = document.getElementById('final')
    final.classList.toggle('finalToggle')
}