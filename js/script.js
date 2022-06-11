function createMenu() {

    var nav = document.querySelector("nav#menu_principal")

    //Cria itens do menu como links e seus respectivos labels
    var link_principal = document.createElement('a')
    var txt_principal = document.createTextNode('Principal')
    var link_historia = document.createElement('a')
    var txt_historia = document.createTextNode('História')
    var link_cardapio = document.createElement('a')
    var txt_cardapio = document.createTextNode('Cardápio')
    var link_contato = document.createElement('a')
    var txt_contato = document.createTextNode('Contato')

    //define endereços dos links e a qual elementos eles pertencem
    link_principal.setAttribute("href", "/index.html")
    link_principal.appendChild(txt_principal)
    link_historia.setAttribute("href", "/nossahistoria.html")
    link_historia.appendChild(txt_historia)
    link_cardapio.setAttribute("href", "/cardapio.html")
    link_cardapio.appendChild(txt_cardapio)
    link_contato.setAttribute("href", "/contato.html")
    link_contato.appendChild(txt_contato)
    
    //insere elementos criados na barra de menu
    nav.appendChild(link_principal)
    nav.appendChild(link_historia)
    nav.appendChild(link_cardapio)
    nav.appendChild(link_contato)
}