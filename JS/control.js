//algumas variáveis
let quantidade = document.getElementById("quantidade");
let mudar_preco = document.getElementById("mudar_preco");
let valor_preco = 200;
let mensagem = 1;


//armazenamento de bolos
const bolos = [
    {
        nome: "Bolo de cenoura",
        descricao: "O bolo de cenoura é um clássico irresistível que agrada a todos os paladares. Com sua massa fofinha e ligeiramente úmida, o sabor delicado da cenoura é perfeitamente balanceado por uma cobertura generosa de chocolate, criando uma combinação dos sonhos. Seja para o café da tarde ou uma sobremesa especial, este bolo é sempre uma escolha certeira para quem busca conforto e sabor.",
        preco: 200,
        imagem: "./SRC/imgs/bolo-de-cenoura-z-6_2su5RBe4p6VJOPo-1g-rSKU2gi3QqmK1MDcB1shFQ.jpeg"
    },

    {
        nome: "Bolo de chocolate",
        descricao: "O bolo de chocolate é uma explosão de sabor que encanta a todos. Feito com os melhores ingredientes, ele possui uma textura macia e um sabor intenso de chocolate que derrete na boca. Ideal para qualquer ocasião, desde um lanche até uma festa, este bolo é sinônimo de alegria e satisfação. Não há como resistir ao seu aroma inconfundível e ao prazer que cada fatia proporciona.",
        preco: 230,
        imagem: "./SRC/imgs/bolo-de-chocolate-gk6ewy5GQYyr5CA6Gg9uqw-wSF8QDQOSUib2qRlE1GzPA.jpeg"
    },

    {
        nome: "Bolo de limão",
        descricao: "Refrescante e cheio de vida, o bolo de limão é perfeito para quem adora um toque cítrico. Sua massa leve e macia é complementada por uma cobertura que equilibra a doçura do açúcar com a acidez vibrante do limão, resultando em uma sobremesa deliciosa e revigorante. Ideal para os dias quentes ou para quem quer um sabor diferente, o bolo de limão é uma opção surpreendente e saborosa.",
        preco: 280,
        imagem: "./SRC/imgs/bolo-de-limao-D0XFzXqRTLiyCKM91N3uuw-9TlQKS0BSbCIGhZ2Wyk-pw.jpeg"
    },

    {
        nome: "Bolo de morango",
        descricao: "O bolo de morango é a combinação perfeita de doçura e frescor. Feito com morangos frescos e suculentos, sua massa é leve e fofa, criando uma base ideal para o sabor delicado da fruta. A cobertura de chantilly ou creme de morangos realça ainda mais essa delícia, tornando este bolo uma escolha perfeita para quem busca um doce suave e frutado. É uma sobremesa que traz cor e sabor para qualquer ocasião.",
        preco: 380,
        imagem: "./SRC/imgs/bolo-de-morango-DVPGfDRdRti6dpjl2YkzOQ-F5Txg1EmTV-ppYM2pZrUrQ.jpeg"
    },

    {
        nome: "Bolo de amendoas",
        descricao: "Um bolo macio e delicado, feito com farinha de amêndoas que confere uma textura suave e um sabor levemente adocicado e aromático. Ideal para acompanhar um chá da tarde, ele pode ser servido simples ou com uma cobertura de açúcar de confeiteiro e amêndoas laminadas, proporcionando uma experiência saborosa e refinada.",
        preco: 330,
        imagem: "./SRC/imgs/a-photo-of-a-bolo-de-amendoas-a-portuguese-almond--t8CoLLt5R-qx2PWP9SOuPw-vJvmK5LjQXmbwcXlQ8JPkA.jpeg"
    },

    {
        nome: "Bolo de carne",
        descricao: "Uma versão salgada do tradicional bolo, feito com carne moída bem temperada e recheado com ingredientes como queijo, vegetais ou ovos. Este bolo é perfeito como prato principal, servido quente acompanhado de uma salada fresca ou vegetais assados. Sua crosta dourada e interior suculento tornam este bolo uma refeição reconfortante e cheia de sabor.",
        preco: 400,
        imagem: "./SRC/imgs/a-medium-shot-of-a-bolo-de-carne-a-brazilian-meatl-CbMB0ELdSvCVkUjFAxqS7Q-UHkz3O-HQ6upXaL9LV3VcQ.jpeg"
    },

    {
        nome: "Bolo de brócolis",
        descricao: "Uma opção saudável e saborosa, o bolo de brócolis combina a leveza dos vegetais com uma massa macia e úmida. Com brócolis picados finamente incorporados à massa, este bolo é uma excelente escolha para um lanche nutritivo ou uma refeição leve, podendo ser servido com um molho de iogurte ou acompanhado de uma salada.",
        preco: 190,
        imagem: "./SRC/imgs/a-photo-of-a-bolo-de-brocolis-a-portuguese-broccol-c8OB2w1XTCCLBZuhn4898Q-WBlquSvETw-AFrACeU9lZQ.jpeg"
    },

    {
        nome: "Bolo vegano",
        descricao: "Um bolo 100% livre de ingredientes de origem animal, feito com substitutos naturais que garantem um sabor delicioso e uma textura perfeita. Pode ser preparado em uma variedade de sabores, como chocolate, baunilha ou frutas, e é ideal para quem busca uma sobremesa ética e saudável. Decorado com frutas frescas ou glacê de coco, este bolo é uma escolha saborosa para qualquer ocasião.",
        preco: 210,
        imagem: "./SRC/imgs/a-photo-of-a-vegan-bolo-it-is-a-round-dense-cake-w-fMBgnv9FT4GlANk1orCASA-md3vTn84TgeO8c88oUomzA.jpeg"
    },

];

//função do valor do preço
function formatar_preco(valor) {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;

};

//botão de aumentar quantidade no carrinho
function mais() {

    if (mensagem < 30) {
        mensagem++;
        mudar_preco.innerHTML = formatar_preco(valor_preco * mensagem);
    };


    quantidade.innerHTML = mensagem;

};

//botão de diminuir quantidade no carrinho
function menos() {

    if (mensagem > 1) {
        mensagem--;
        mudar_preco.innerHTML = formatar_preco(valor_preco * mensagem);
    };


    quantidade.innerHTML = mensagem;

};

//função "veja_aqui" para sessão de bolos (Veja outros sabores!). Quando clicar, ele direciona o bolo clicado para a sessão principal a cima
function veja_aqui(index) {

    const bolo = bolos[index]

    document.querySelector(".informacao_sessao_principal h2").innerHTML = bolo.nome;

    document.querySelector(".informacao_sessao_principal p:nth-of-type(1)").innerHTML = bolo.descricao;

    valor_preco = bolo.preco;
    mudar_preco.innerHTML = formatar_preco(valor_preco * mensagem);

    document.querySelector(".img_bolo_comprar").src = bolo.imagem;

    document.getElementById("principal").scrollIntoView({ behavior: "smooth" });

    
};

//botão que ativa a função "veja_aqui" de cima
document.querySelectorAll(".sessao_secundaria button").forEach((button, index) => {
    button.addEventListener("click", () => veja_aqui(index));

});

//botão do carrinho, quando clicado, adiciona um bolo para dentro do carrinho
function botao_carrinho() {
    let imagem_bolo = document.querySelector(".img_bolo_comprar");
    let nome_bolo = document.querySelector(".informacao_sessao_principal h2").innerText;
    let preco_bolo = parseFloat(document.querySelector("#mudar_preco").innerText.replace('R$ ', '').replace(',', '.'));
    let quantidade_bolo = parseInt(document.querySelector("#quantidade").innerText);

    const carrinhoItens = document.getElementById('carrinho_itens');

    const carrinhoItem = document.createElement('div');
    carrinhoItem.className = 'carrinho_item';

    carrinhoItem.innerHTML = `
        <figure>
            <img src="${imagem_bolo.src}" alt="Imagem do bolo" style="width: 50px; height: 50px;">
        </figure>
        <p class="nome_bolo_no_carrinho">${nome_bolo}</p>
        <p class="quantidade_carrinho">${quantidade_bolo}X</p>
    `;

    carrinhoItens.appendChild(carrinhoItem);

    const total = document.querySelector('.total_no_carrinho');
    const valorAtual = parseFloat(total.innerText.replace('Total: R$ ', '').replace(',', '.'));
    const novoTotal = valorAtual + preco_bolo;
    total.innerText = `Total: R$ ${novoTotal.toFixed(2).replace('.', ',')}`;

};

//o carrinho começa como display none, isso é uma função para que quando o botão do carrinho for ativo, o carrinho fica visível
document.querySelector(".botao_carrinho").addEventListener("click", () => {
    const conteudo = document.getElementById("adicionar_carrinho");

    if (conteudo.style.display === "none" || conteudo.style.display === "") {
        conteudo.style.display = "flex";
    } ;
});

//botão "X" de excluir o carrinho
document.querySelector("#excluir_carrinho").addEventListener("click", () => {
    const carrinhoItens = document.querySelector("#carrinho_itens");
    const total = document.querySelector(".total_no_carrinho");
    const adicionarCarrinho = document.querySelector("#adicionar_carrinho");

    carrinhoItens.innerHTML = "";

    total.innerHTML = "Total: R$ 0,00";

    adicionarCarrinho.style.display = "none";


});

//botão "Delete" para deletar os bolos escolhidos no carrinho
document.querySelector("#delete_carrinho").addEventListener("click", () => {
    const carrinhoItens = document.querySelector("#carrinho_itens");
    const total = document.querySelector(".total_no_carrinho");

    carrinhoItens.innerHTML = "";

    total.innerHTML = "Total: R$ 0,00";

});