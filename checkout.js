import { desenharProdutosCarrinhoSimples, lerLocalStorage, ApagarDoLocalStorage, salvarLocalStorage} from "./src/utilidades";

function desenharProdutosCheckout () {
    const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}
    for(const  idproduto in idsProdutosCarrinhoComQuantidade){
        desenharProdutosCarrinhoSimples(idproduto,"container-produtos-checkout", idsProdutosCarrinhoComQuantidade[idproduto])
    }
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
      return;
    }
  
    const dataAtual = new Date();
    const pedidoFeito = {
      dataPedido: dataAtual,
      pedido: idsProdutoCarrinhoComQuantidade,
    };
    const historicoDePedidos = lerLocalStorage("historico") ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
  
    salvarLocalStorage("historico", historicoDePedidosAtualizado);
    ApagarDoLocalStorage("carrinho");
  
    window.location.href = "./pedidos.html";
  }
  
  desenharProdutosCheckout();
  
  document.addEventListener("submit", (evt) => finalizarCompra(evt));