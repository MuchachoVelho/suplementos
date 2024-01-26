const CatalogoProdutos = document.getElementById('container-produto')

function  exibirTodos() {
   const produtosEscondidos =  Array.from(CatalogoProdutos.getElementsByClassName('hidden'))
   for(const produto of produtosEscondidos){
    produto.classList.remove('hidden')
   }
}

function esconderWhey() {
    exibirTodos()
  const WheyProdutos =  Array.
 from(CatalogoProdutos.getElementsByClassName('whey'))

  for (const produto of WheyProdutos){
    produto.classList.add("hidden")
  }
}

function esconderCreatina() {
    exibirTodos()
    const CreatinaProdutos =  Array.from(CatalogoProdutos.getElementsByClassName('creatina'))
  
    for (const produto of CreatinaProdutos){
      produto.classList.add("hidden")
    }
  }

export function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener("click", exibirTodos)
    document.getElementById('exibir-creatina').addEventListener("click", esconderWhey)
    document.getElementById('exibir-whey').addEventListener("click", esconderCreatina)
    
}