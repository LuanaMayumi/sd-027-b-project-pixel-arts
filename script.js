let sectionPai = document.querySelector('section'); // chama a primeira

//EXERCICIO 2

let criandoUl = document.createElement('ul');//criando um elemento para a Paleta de Cores
criandoUl.id = 'color-palette';
sectionPai.appendChild(criandoUl);

function addingPaletaCores() {//ciando 4 cores para a Paleta
  for (let index = 0; index < 4; index += 1) {
    let criandoLi = document.createElement('li');
    criandoLi.className = 'color';
    criandoUl.appendChild(criandoLi);
  }
}

//criando 4 functions para dar 4 cores à minha Paleta

//EXERCICIO 3

function paintingSquareBlack() {
  let pintandoQuadrado0 = document.getElementsByClassName('color');
  pintandoQuadrado0[0].style.backgroundColor = 'black';
}

function paintingSquarePurple() {
  let pintandoQuadrado1 = document.getElementsByClassName('color');
  pintandoQuadrado1[1].style.backgroundColor = 'rgb(201,152,247)';
}

function paintingSquareBlue() {
  let pintandoQuadrado2 = document.getElementsByClassName('color');
  pintandoQuadrado2[2].style.backgroundColor = 'rgb(46,134,216)';
}

function paintingSquareBlueMarine() {
  let pintandoQuadrado3 = document.getElementsByClassName('color');
  pintandoQuadrado3[3].style.backgroundColor = 'rgb(14,104,187)';
}





//EXERCICIO 4 - gerando cores aleatorias

function gettingColors() {
  let r = Math.floor(Math.random() * 255); //math.floor arredonda o numero. Math.random gera um numero alearório, 255 é o maior número do RGB
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return (rgb = `rgb(${r}, ${g}, ${b})`); //template literals
}

//function para pintar os quadrados com as cores aleatorias 

function paintingSquare() {
  let aleatoryColors = ['rgb(0, 0, 0)'];//deixando a cor preta como padrão
  let gettingClassColors = document.getElementsByClassName('color'); // capturando os quadrados

  console.log(gettingClassColors);
  gettingClassColors[0].style.backgroundColor = 'black'; //  colocando cor preta no 1 quadrado

  for (let index = 1; index < gettingClassColors.length; index += 1) {
    gettingClassColors[index].style.backgroundColor = gettingColors();//o for vai rodar e vai pintar os meus quadrados com as cores aleatórias

    aleatoryColors.push(gettingClassColors[index].style.backgroundColor); //  colocando no meu array, as cores aleatorias que foram pintadas
  }
  addLocalStorage(aleatoryColors); //  toda vez que uma cor é gerada esta sendo salva no LocalStorage - EXERCICIO 5
}

//EXERCICIO 5

function addLocalStorage(arrayColors) {
  //  adicionando cores novas no local storage, depois que a função é chamada no PantingSquare (linha 59)
  localStorage.setItem('colorPalette', JSON.stringify(arrayColors));
}

function getLocalStorage() {
  //  pegando as cores do local Storage // quando eu fecho o nagevador, vai puxar minhas cores iniciais e o localStorage vai estar vazio.
  const pegandoItem = JSON.parse(localStorage.getItem('colorPalette'));
  console.log(pegandoItem);
  recebeCoresPintaLocalStorage(pegandoItem); //  pegando item ColorPalette do localStorage com as cores, e atribuindo pra função RecebeCoresPintaLocalStorage que vai pintas os quadrados, embaixo
}

function recebeCoresPintaLocalStorage(coresLocalStorage) {//  rececendo as cores salvas no LocalStorage

  if (coresLocalStorage !== null) {
    // se as cores salvas lo LocalStorage forem diferente de Nulas (se tiver cor)

    let gettingClassColors = document.getElementsByClassName('color'); // capturando os quadrados

    for (let index = 0; index < coresLocalStorage.length; index += 1) {
      //  percorrendo as cores que estao no localStorage

      gettingClassColors[index].style.backgroundColor =
        coresLocalStorage[index]; //  adicionando as cores aos quadrados
    }
  }
}

// EXERCICIO 6

function grid25() {

  for (let index = 0; index < 5; index += 1) {
    //  criando o quadro através de UL

    let section = document.createElement('ul');
    section.id = 'pixel-board';
    pixelSection.appendChild(section);

    for (let index2 = 0; index2 < 5; index2 += 1) {
      //  criando o quadro através de li
      let criandoLi = document.createElement('li');
      criandoLi.classList.add('pixel'); //  para add uma classe sem sobreescrever a que existe
      section.appendChild(criandoLi);
    }
  }
}

//EXERCICIO 7 NO CSS

//EXERCICIO 8

function addClasseSelected() {
  let pegandoClasseBlack = document.getElementsByClassName('color')[0];
  pegandoClasseBlack.classList.add('selected');
}

//EXERCICIO 9

let gettingButton = document.getElementById('button-random-color'); //  aperta o botão pra receber cores aleatórias
console.log(gettingButton);
gettingButton.addEventListener('click', paintingSquare);



let paletteCores = document.getElementById('color-palette'); 
console.log(paletteCores); // variável fora de uma função, ela é global, pode ser utilizada em qualquer lugar do programa

let cor = 'rgb(0, 0, 0)'; //  a cor preta é substituida pela cor clicada no palete, atraves do event.target.style.backgroudColor

paletteCores.addEventListener('click', function (event) {
  console.log('entrei');

  let selected = document.querySelector('.selected');
  console.log(selected); //  está retornando Null

  selected.classList.remove('selected');
  event.target.classList.add('selected');

  cor = event.target.style.backgroundColor; //  variável criada pro exercício 10, onde o meu Event vai puxar o background color depois do meu click na paleta. target = alvo
});

//  exercicio 10

let pixels = document.getElementById('pixelSection');
console.log(pixels); //  não da pra usar FOR aqui pq qdo abro uma variável por Element, só me retorna um elemento e nao um array

pixels.addEventListener('click', function (event) {
  console.log(event.target); //  mostra no meu console exatamente o LI que eu cliquei

  if (event.target.className === 'pixel') {
    //  se o nome da Classe do meu pixel for igual a pixel
    console.log(event.target);
    event.target.style.backgroundColor = cor; //  sempre que for propriedade CSS, usar uma string pra atribuir valor. //classList.add - função, atribuir a string dentro do parênteses ( )
  } 
  savingPixelPainted();//function exercicio 12, preciso salvar as cores pintadas no array do exercicio 12 toda vez que um pixel for pintado
});

 //  EXERCICIO 13

let pixelSection = document.getElementById('pixelSection'); //  capturando o quadro Pixel

let inputField = document.getElementById('board-size'); //  capturando o campo de input - EXERCICIO 13
let button = document.getElementById('generate-board'); //  capturando o botão - EXERCICIO 13

function sendInfo(event) {

  let valor = inputField.value; //  pegando o valor do meu Input

  console.log(valor);
  return valor; //  precisa dar o return para eu conseguir usar em outros locais
}

function clearGrid() {
  //  limpando meu grid quando um novo valor é colocado no input

  pixelSection.innerHTML = '';
  // console.log(clearGrid());
  return clearGrid;
}

button.addEventListener('click', clearGrid);


function grid() {

  let valorMaximo = 5;

  if (sendInfo() < 0 || sendInfo() === '') {
    alert('Board inválido!'); //  chamando a função, precisa dos parenteses
  } else if (sendInfo() < 5) {
    valorMaximo; //  sobrescrever o valor da variavel
  } else if (sendInfo() > 50) {
    valorMaximo = 50;
  } else {
    valorMaximo = sendInfo();
  }

  for (let index = 0; index < valorMaximo; index += 1) {
    //  criando o quadro através de UL

    let section = document.createElement('ul');
    section.id = 'pixel-board';
    pixelSection.appendChild(section);

    for (let index2 = 0; index2 < valorMaximo; index2 += 1) {
      //  criando o quadro através de li
      let criandoLi = document.createElement('li');
      criandoLi.classList.add('pixel'); //  para add uma classe sem sobreescrever a que existe
      section.appendChild(criandoLi);
    }
  }
  // getPixelPainted(valorMaximo); 
  savingGridLocalStorage(sendInfo()); //  função que salva no meu Local Storage quando os pixels são criados
}

button.addEventListener('click', grid); //  EXERCICIO 13, quando o botao for clicado, vai chamar a minha função grid

function gridToSaveLocalStorage(sizeLocalStorage) {
  //  parametro recuperado do Local

  let valorMaximo = 0;

  if (sizeLocalStorage < 0 || sizeLocalStorage === '') {
    alert('Board inválido!'); //  chamando a função, precisa dos parenteses
  } else if (sizeLocalStorage < 5) {
    valorMaximo; //  sobrescrever o valor da variavel
  } else if (sizeLocalStorage > 50) {
    valorMaximo = 50;
  } else {
    valorMaximo = sizeLocalStorage;
  }

  for (let index = 0; index < valorMaximo; index += 1) {
    //  criando o quadro através de UL

    let section = document.createElement('ul');
    section.id = 'pixel-board';
    pixelSection.appendChild(section);

    for (let index2 = 0; index2 < valorMaximo; index2 += 1) {
      //  criando o quadro através de li
      let criandoLi = document.createElement('li');
      criandoLi.classList.add('pixel'); //para add uma classe sem sobreescrever a que existe
      section.appendChild(criandoLi);
    }
  }
}

//  exercicio 11

let buttonClear = document.getElementById('clear-board');

buttonClear.addEventListener('click', function () {
  //  função anônima pode ser usada aqui pq vai ser chamada somente no ex 11
  let pixels = document.getElementsByClassName('pixel');
  console.log(pixels);

  for (let pixel of pixels) {
    //  para cada pixel dos pixels (grid)

    pixel.style.backgroundColor = 'white';
  }
});
let selected = document.querySelectorAll('.pixel');
console.log(selected);

//  exercicio 15

function savingGridLocalStorage(size) {
  //  função que vai salvar o Size do meu board no LS

  localStorage.setItem('boardSize', JSON.stringify(size)); //  Primeiro é a chave do objeto , size é o valor
}

function gettingGridLocalStorage() {
  let gridRecuperado = JSON.parse(localStorage.getItem('boardSize')); //  Parse é utilizado pra retornar ao type anterior (number)

  gridToSaveLocalStorage(gridRecuperado);
}
function verifyLocalStorage() {
  if (localStorage.length === 0) {
    grid25();
  } else {
    gettingGridLocalStorage();
    
  }
}

//EXERCICIO 12
// capturar o meu quadro de pixel. Preciso pegar o board inteiro ou os pixels?
// criar uma function com addEventListener
// salvar no local storage com o setItem
// recuperar com o get item

// function savingPixelPainted (){

//   let pixelsPainted = [];
//   let pixel = document.getElementsByClassName('pixel');

//   for (let index = 0; index < pixel.length; index += 1) {
//     pixelsPainted.push(pixel[index].style.backgroundColor)
//   }
//   console.log(pixelsPainted);

//   localStorage.setItem('pixelBoard', JSON.stringify(pixelsPainted));

// } 

// function getPixelPainted (BoardSize){

//  const pixelsPainted = JSON.parse(localStorage.getItem('pixelBoard')) //recuperando as cores dos pixels pintados do Local Storage


//  for (let index = 0; index < BoardSize; index += 1){
//   let pixel = document.getElementsByClassName('pixel');
//   pixel.style.backgroundColor = pixelsPainted[index]

//  }
// }
// getPixelPainted();







window.onload = function() {
  paintingSquareBlack();
  paintingSquarePurple();
  paintingSquareBlue();
  paintingSquareBlueMarine();
  getLocalStorage();
  verifyLocalStorage();
  
};

// chamadas functions
addingPaletaCores(); //função de criação da Paleta
addClasseSelected();
