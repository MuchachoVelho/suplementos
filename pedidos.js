import { lerLocalStorage, desenharProdutosCarrinhoSimples } from "./src/utilidades";

function criarPedidoHistorico(pedidoComData){
    const elementoPedido = `<p class="text-xl  text-bold my-5 ">${ new Date(pedidoComData.dataPedido).
        toLocaleDateString('pt-BR', {hour: '2-digit', minute: "2-digit"})} </p>
    <section id="container-pedidos-${pedidoComData.dataPedido}" class="bg-slate-300 p-5 rounded-xl"> </section>
    `;
    const main = document.getElementsByTagName('main')[0]
    main.innerHTML += elementoPedido;

 for(const idproduto in pedidoComData.pedido) {
    desenharProdutosCarrinhoSimples
    (idproduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idproduto])
 }
}

function renderizarHistoricoPedidos() {
    const historico = lerLocalStorage("historico")
    for(const pedidoComData of historico){
        criarPedidoHistorico(pedidoComData)
    }
}

renderizarHistoricoPedidos()