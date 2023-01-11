function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

     // pegar a tag img
    const img = document.querySelector("#profile img")

     // substtituir a imagem
    if(html.classList.contains('light')) {
    // se tiver light mode adicinoar a image ligh
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
    // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
    }


    // pegar a tag img
    

    // substtituir a imagem
    // se tiver light mode adicinoar a image ligh
    // se tiver sem light mode, manter a imagem normal
}

   