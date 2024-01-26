

import { renderizarCatalogo } from "./src/CartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";


import {
    atualizarPrecoCarrinho,
    inicializarCarrinho,
    renderizarProdutosCarrinho,
  }
  from "./src/menuCarrinho";

    

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros()

