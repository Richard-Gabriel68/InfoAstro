listaJson.map((item) =>
{
    let icone = document.querySelector('.modelos .icone').cloneNode(true)
    
    //icon.querySelector('.desc').innerHTML = item.description
    //icon.querySelector('.img').backgroundImage = item.img

    document.querySelector('main .favoritos .icones').append(icone)


})