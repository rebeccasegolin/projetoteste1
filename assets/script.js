function toggleMode() {
  const html = document.documentElement /* se a class light estivesse no body seria const body = document.body.
  O document é a representação do nosso documento em formato de objeto no JS, e sempre que eu colocar um ponto (.) eu estou acessando propriedades e funcionalidades. Traduzindo o document.documentElement, dentro do meu document eu estou acessando meu html, que é representado no JS por documentElement*/
  //-----------------------------------------------------------
  //Condicional se no html, na lista de classes contém o light. Se esta condição for verdadeira ela entra no código. Vai responder um tipo de dado booleano (true ou false)

  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //} else{
  // html.classList.add('light')
  //}

  //Dá para simplificar este código com essa função pronta que já faz isso:
  html.classList.toggle("light")
  //----------------------------------------------------------
  //pegar a tag img. o querySelector procura o seletor que é dado no documento
  //substituir a imagem. a função setAttribute serve para modificar um atributo, colocando entre ('atributo a ser alterado', 'novo valor deste atributo')
  //se tiver light mode, adicionar imagem light
  //se não tiver o light mode, manter imagem normal
  const imagem = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    imagem.setAttribute('src', './assets/Avatar-light.png')
  } else{
    imagem.setAttribute('src', './assets/Avatar.png')
  }

  const nomeAlt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    nomeAlt.setAttribute("alt", "foto de Rebecca Segolin de perfil com sorriso aberto e olhos fechados")
  } else {
    nomeAlt.setAttribute(
      "alt",
      "foto de Rebecca Segolin sorrindo com vestido amarelo florido e brinco de origami"
    )
  }
}