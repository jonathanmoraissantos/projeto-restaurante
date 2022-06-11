function createElements() {

    //setando DOM
    var nav = document.querySelector("nav#menu_principal")
    var header = document.querySelector("header#header_principal")
    var footer = document.querySelector("footer#footer_principal")

    //cria título e subtítulo da página
    var nome_empresa = document.createElement('h1')
    var txt_nome_empresa = document.createTextNode('Churrascaria Morais')
    nome_empresa.appendChild(txt_nome_empresa)

    var slogan_empresa = document.createElement('p')
    var txt_slogan_empresa = document.createTextNode('O melhor lugar pra você estar')
    slogan_empresa.appendChild(txt_slogan_empresa)

    //cria itens do menu com links e seus respectivos labels, define endereços dos links e seta a qual elementos eles pertencem
    var link_principal = document.createElement('a')
    var txt_principal = document.createTextNode('Principal')
    link_principal.setAttribute("href", "../index.html")
    link_principal.appendChild(txt_principal)

    var link_historia = document.createElement('a')
    var txt_historia = document.createTextNode('História')
    link_historia.setAttribute("href", "../nossahistoria.html")
    link_historia.setAttribute("rel", "next")
    link_historia.appendChild(txt_historia)

    var link_cardapio = document.createElement('a')
    var txt_cardapio = document.createTextNode('Cardápio')
    link_cardapio.setAttribute("href", "../cardapio.html")
    link_cardapio.setAttribute("rel", "next")
    link_cardapio.appendChild(txt_cardapio)
    
    var link_contato = document.createElement('a')
    var txt_contato = document.createTextNode('Contato')
    link_contato.setAttribute("href", "../contato.html")
    link_contato.setAttribute("rel", "next")
    link_contato.appendChild(txt_contato)

    //cria conteúdo footer
    var endereco_empresa = document.createElement('p')
    var txt_endereco_empresa = document.createTextNode('Endereço: Rua dos Sorrisos, 50 - Jardim Maravilha - Pouso Alegre - SP')
    endereco_empresa.appendChild(txt_endereco_empresa)

    //INSERE ELEMENTOS NO DOCUMENTO
    //header
    header.appendChild(nome_empresa)
    header.appendChild(slogan_empresa)
    //nav bar
    nav.appendChild(link_principal)
    nav.appendChild(link_historia)
    nav.appendChild(link_cardapio)
    nav.appendChild(link_contato)
    //footer
    footer.appendChild(endereco_empresa)

}