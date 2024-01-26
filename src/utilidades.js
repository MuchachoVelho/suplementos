export const catalogo = [
    { 
        id: "1" ,
        nome: "Hipercalorico",
        whey: true,
        preco: 50,
       Imagem: "whey1.jpg",
      
    },
    
    { 
        id: "2",
        nome: "Whey protein",
        whey: true,
        preco: 80,
        Imagem: "whey2.jpg"
    },
    
    { 
        id: "3" ,
        nome: "Hipercalorico",
        whey: true,
        preco: 50,
        Imagem: "whey3.png",
       
    },
    
    { 
        id: "4" ,
        nome: "Hipercalorico",
        whey: true,
        preco: 50,
        Imagem: "whey4.jpg",
       
    },
    
    { 
        id: "5" ,
        nome: "Hipercalorico",
        whey: true,
        preco: 50,
        Imagem: "whey5.png",
        
    },
    
    
    
    { 
        id: "6" ,
        nome: "Hipercalorico",
        whey: false,
        preco: 54,
        Imagem: "creatina1.png",
        
    },
    
    { 
        id: "7"  ,
        nome: "Hipercalorico",
        whey: false,
        preco: 53,
        Imagem: "whey6.webp",
        
    },
    
    { 
        id: "8" ,
        nome: "barrinha de ceral",
        whey: false,
        preco: 52,
        Imagem: "creatina2.jpg",
        
    },
    
    
    { 
        id: "9" ,
        nome: "Barrinha de chocolate",
        whey: true,
        preco: 5,
        Imagem: "whey7.webp",
        
    },
    ]


    export function salvarLocalStorage (chave, informacao) {
        localStorage.setItem(chave, JSON.stringify(informacao))
      }
      
      export function lerLocalStorage (chave) {
       return  JSON.parse(localStorage.getItem(chave))
      }

      export function ApagarDoLocalStorage(chave) {
        localStorage.removeItem(chave)
      }

      export function desenharProdutosCarrinhoSimples(idproduto, IdContainerHTML, quantidadeProduto) {
        const produto = catalogo.find((p) => p.id === idproduto);
      
          const containerProdutosCarrinho = document.getElementById(IdContainerHTML);
      
          const elementoArticle = document.createElement("article"); // Article em js
          const articleClasses = ['flex', 'bg-stone-100', 'rounded-lg', 'p-1', 'relative', 'mb-4', 'w-96'];
         
         for(const articleClass of articleClasses){
          elementoArticle.classList.add(articleClass)
         }
      
          const cartaoProdutoCarrinho = `
        
         
          <img src="img/${produto.Imagem}" alt="carrinho:${produto.nome}" class="h-24 rounded-lg"/>
        <div class="m-4 py-2 flex flex-col justify-between p-2"> 
          <p class="text-slate-900">${produto.nome}</p>
          <p class="text-slate-400">${produto.sabor}</p>
          <p class="text-green-700 text-lg">$${produto.preco}</p>
        </div>
      <div class=" flex text-slate-950 items-end absolute bottom-0 right-2 text-xl
      ">
       
        <p class="ml-2" id="quantidade-${produto.id}">${quantidadeProduto}</p>
        
      </div> `;
      
          elementoArticle.innerHTML = cartaoProdutoCarrinho;
          containerProdutosCarrinho.appendChild(elementoArticle);
      
  
      }