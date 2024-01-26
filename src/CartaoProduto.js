import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho"; 

export function renderizarCatalogo() {

    for(const produtoCatalogo of catalogo) {
    const Cartaoproduto = `
<div id="card-produto-${produtoCatalogo.id}" class="rounded-lg shadow-xl shadow-slate-700 w-48 my-2 mx-2 rounded-md flex-col flex p-2 group justify-between ${produtoCatalogo.whey ? 'whey' : 'creatina'}">
<img src="./img/${produtoCatalogo.Imagem}" class='group-hover:scale-110 duration-300 my-3 rounded-lg'/>
<p class="nome">${produtoCatalogo.nome} </p>
<p>${produtoCatalogo.marca} </p>
<p>$${produtoCatalogo.preco} </p>
<button class= 'bg-slate-900 text-slate-200 hover:bg-slate-500'><i class="fa fa-cart-plus" aria-hidden="true"
 id='adicionar-${produtoCatalogo.id}'></i></button>
</div>
`;

document.getElementById('container-produto').innerHTML += Cartaoproduto

}

for(const produtoCatalogo of catalogo){
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener
    ('click', () => adicionarAoCarrinho(produtoCatalogo.id))
}
}
