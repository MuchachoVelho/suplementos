import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades"

const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

function abrirCarrinho() {
    document.getElementById('carrinho').classList.add('right-[0px]');
    document.getElementById('carrinho').classList.remove('right-[-360px]');
}


function fecharCarrinho(){
    document.getElementById('carrinho').classList.remove('right-[0px]');
    document.getElementById('carrinho').classList.add('right-[-360px]');
}

function  irParaCheckout() {
  if(Object.keys(idsProdutosCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href =  "./checkout.html";
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');
    const botaoIrParaCheckout = document.getElementById('finalizar')

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
    botaoIrParaCheckout.addEventListener('click', irParaCheckout)
}



function  removerDoCarrinho(idproduto) {
  delete idsProdutosCarrinhoComQuantidade[idproduto];
  salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade)
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idproduto){
  idsProdutosCarrinhoComQuantidade[idproduto]++;
  salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade)
  atualizarPrecoCarrinho();
  atualizarInformacoesQuantidade(idproduto);
}

function decrementarQuantidadeProduto(idproduto){
  if(idsProdutosCarrinhoComQuantidade[idproduto] === 1){
    removerDoCarrinho(idproduto);
    return
  }
  idsProdutosCarrinhoComQuantidade[idproduto]--;
  salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade)
  atualizarPrecoCarrinho();
  atualizarInformacoesQuantidade(idproduto);
}

function atualizarInformacoesQuantidade(idproduto) {
  document.getElementById(`quantidade-${idproduto}`).innerText = idsProdutosCarrinhoComQuantidade[idproduto];

}

function desenharProdutosNoCarrinho(idproduto) {
  const produto = catalogo.find((p) => p.id === idproduto);

    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');

    const elementoArticle = document.createElement("article"); // Article em js
    const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'p-1', 'relative'];
   
   for(const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass)
   }

    const cartaoProdutoCarrinho = `
  
    <button id="remover-item-$${produto.id}" class="top-0 right-2 absolute"><i class="text-xl fa-solid fa-circle-xmark text-slate-400 hover:text-slate-900"></i></button>
    <img src="img/${produto.Imagem}" alt="carrinho:${produto.nome}" class="h-24 rounded-lg"/>
  <div class="m-4 py-2 flex flex-col justify-between p-2"> 
    <p class="text-slate-900">${produto.nome}</p>
    <p class="text-slate-400">${produto.sabor}</p>
    <p class="text-green-700 text-lg">$${produto.preco}</p>
  </div>
<div class=" flex text-slate-950 items-end absolute bottom-0 right-2 text-xl
">
  <button id="decrementar-produto-${produto.id}" >-</button>
  <p class="ml-2" id="quantidade-${produto.id}">${idsProdutosCarrinhoComQuantidade[produto.id]}</p>
  <button class="ml-2" id="incrementar-produto-${produto.id}">+</button>
</div> `;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);

    document.getElementById(`decrementar-produto-${produto.id}`).addEventListener
    ('click', () => decrementarQuantidadeProduto(produto.id));

    
    document.getElementById(`incrementar-produto-${produto.id}`).addEventListener
    ('click', () => incrementarQuantidadeProduto(produto.id));

    document.getElementById(`remover-item-$${produto.id}`).addEventListener
    ('click', () => removerDoCarrinho(produto.id));
}

export function renderizarProdutosCarrinho(){
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = "";
for (const idproduto in idsProdutosCarrinhoComQuantidade){
  desenharProdutosNoCarrinho(idproduto)
 }
}


export function adicionarAoCarrinho (idproduto) {
  if(idproduto in idsProdutosCarrinhoComQuantidade){
    incrementarQuantidadeProduto(idproduto)
    return;
  }
  idsProdutosCarrinhoComQuantidade[idproduto] = 1
  salvarLocalStorage()
  desenharProdutosNoCarrinho(idproduto);
  atualizarPrecoCarrinho
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total")
  let precoTotalCarrinho = 0;
  for(const idProdutoNoCarrinho in idsProdutosCarrinhoComQuantidade){
    precoTotalCarrinho += 
    catalogo.find(p => p.id === idProdutoNoCarrinho).preco * idsProdutosCarrinhoComQuantidade[idProdutoNoCarrinho]
  }
  precoCarrinho.innerHTML = `Total: $${precoTotalCarrinho}`
}