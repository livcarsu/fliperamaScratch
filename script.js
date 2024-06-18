document.getElementById('aumentar').addEventListener('click', function () { 
    changeFontSize(1); 
}); 
document.getElementById('diminuir').addEventListener('click', function () { 
    changeFontSize(-1); 
}); 
function changeFontSize(step) { 
    var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize); 
    var newFontSize = currentFontSize + step; 
    document.body.style.fontSize = newFontSize + 'px'; 
} 

const blackAndWhiteBtn = document.getElementById('blackAndWhite'); 
const blackBtn = document.getElementById('black'); 
     

blackAndWhiteBtn.addEventListener('click', function() { 
  document.body.classList.remove('high-contrast', 'blue-contrast', 'green-contrast', 'yellow-contrast'); 
  document.body.classList.add('black-and-white'); 
}); 

blackBtn.addEventListener('click', function() { 
    document.body.classList.remove('high-contrast', 'blue-contrast', 'green-contrast', 'yellow-contrast'); 
    document.body.classList.add('black'); 
  }); 

document.getElementById('color-filter').addEventListener('change', function() {
    // atribui o valor da propriedade value do elemento atual à variável filterClass.
    const filterClass = this.value; /*váriavel constante*/

    // Seleciona todas as imagens com a classe 'filter-image'
    const images = document.querySelectorAll('.filter-image');

    // Para cada imagem selecionada... método de array que executa uma função para cada elemento do array.
    images.forEach(img => { 
        // Remove todas as classes existentes da imagem, exceto 'filter-image'
        img.className = 'filter-image'; // Reset the class

        // Se a classe selecionada não for 'default' (ou seja, uma opção de filtro foi selecionada)...
        if (filterClass !== 'default') {
            // Adiciona a classe selecionada à imagem
            img.classList.add(filterClass);
        }
    });
}); 

new window.VLibras.Widget('https://vlibras.gov.br/app'); 
 
