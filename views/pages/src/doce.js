const db = {
    nome: 'Bolo de Doce de Leite',
    preco: 25.99,
    sabor: 'Doce de leite'
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