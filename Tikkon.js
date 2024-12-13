
//ГОРОД

var tablic = document.getElementById('tablic');
var word = document.getElementById('gorod');
const gggg = document.getElementById('gggg');
function gorodd() {

  tablic.style.display = 'block';
}
function newWord(newWord) {

  word.textContent = newWord;

  tablic.style.display = 'none';
}

document.addEventListener('click', function (event) {

  // Проверка, является ли элемент, по которому был клик, не частью таблицы
  if (!tablic.contains(event.target) & (!word.contains(event.target))(!gggg.contains(event.target))) {
    // Если не является, то скрываем таблицу
    tablic.style.display = 'none';
  }
})

//КАРТА
var salon = document.getElementById('salon');
var map = document.getElementById('map');
var map_2 = document.getElementById('map-2');
function salony() {

  map.style.display = 'block';
  map_2.style.display = 'block';
}

// закрыть

document.addEventListener('click', function (even) {

  // Проверка, является ли элемент, по которому был клик, не частью таблицы
  if (!map.contains(even.target) & (!salon.contains(even.target))) {
    // Если не является, то скрываем таблицу
    map.style.display = 'none';
  }
})




//НОМЕР

var num = "+7 747 747 74 74";
var nomer = document.getElementById('nomer');

function nomerT() {

  // Переключаем текст при каждом клике
  nomer.textContent = num;
  num = (num === "+7 747 747 74 74") ? "номер телефона" : "+7 747 747 74 74";

}

// Audi

// КАРТИНКИ

// Изначальный индекс изображения
let currentIndex = 0;

// Массив с путями к изображениям
const images = [
  "img/audirs7_1.webp",
  "img/audirs7_2.webp",
  "img/audi_rs7_3.webp",
  "img/audi_rs7_4.webp",
  "img/audi_rs7_5.webp",
  "img/audi_rs7_6.webp"
  // Добавьте пути к вашим изображениям
];

// Функция для изменения изображения
function changeImage(direction) {
  currentIndex += direction;

  // Проверка на выход за пределы массива
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Получение элемента изображения и изменение его src
  const imageElement = document.getElementById("myImage");
  imageElement.src = images[currentIndex];
}

//ТАБЛИЦЫ
//Audi
var d_i0 = document.getElementById('dviga');
var d_i1 = document.getElementById('tran');
var d_i2 = document.getElementById('mass');
var d_i3 = document.getElementById('topliv');
var dvigat = document.getElementById('dvigat');
var trans = document.getElementById('trans');
var massa = document.getElementById('massa');
var topliva = document.getElementById('topliva');
var tabll = [dvigat, trans, massa, topliva];
var d_ii = [d_i0, d_i1, d_i2, d_i3]

function d_i(index) {
  d_ii.forEach(function (elemen) {
    elemen.style.backgroundColor = '';
    

  })
  tabll.forEach(function (element) {
    element.style.display = 'none';
  });
  if (tabll[index]) {
    tabll[index].style.display = 'block';
  }
  if (tabll[index].style.display = 'block') {
    d_ii[index].style.backgroundColor = '#333';
    

  }
}

if (tabll[0].style.display = 'block') {
  d_ii[0].style.backgroundColor = '#333';
}
//Meрседес

// Картинки

// Изначальный индекс изображения
// Изначальный индекс изображения
let merscurrentIndex = 0;

// Массив с путями к изображениям
const mersimages = [
  "img/cattouchret (1).webp",
  "img/cattouchret (2).webp",
  "img/cattouchret (3).webp",
  "img/cattouchret (4).webp",
  "img/cattouchret (5).webp"
  // Добавьте пути к вашим изображениям
];

// Функция для изменения изображения
function changemers(directio) {
  merscurrentIndex += directio;

  // Проверка на выход за пределы массива
  if (merscurrentIndex < 0) {
    merscurrentIndex = mersimages.length - 1;
  } else if (merscurrentIndex >= mersimages.length) {
    merscurrentIndex = 0;
  }

  // Получение элемента изображения и изменение его src
  const imageElemen = document.getElementById("merssimage");
  imageElemen.src = mersimages[merscurrentIndex];
}


var m_s0 = document.getElementById('mersdviga');
var m_s1 = document.getElementById('merstran');
var m_s2 = document.getElementById('mersmass');
var m_s3 = document.getElementById('merstopliv');
var mdvigat = document.getElementById('mersdvigat');
var mtrans = document.getElementById('merstrans');
var mmassa = document.getElementById('mersmassa');
var mtopliva = document.getElementById('merstopliva');
var mtabll = [mdvigat, mtrans, mmassa, mtopliva];
var m_ss = [m_s0, m_s1, m_s2, m_s3]

function m_s(index) {
  m_ss.forEach(function (elemen) {
    elemen.style.backgroundColor = '';
    elemen.style.color = '';

  })
  mtabll.forEach(function (element) {
    element.style.display = 'none';
  });
  if (mtabll[index]) {
    mtabll[index].style.display = 'block';
  }
  if (mtabll[index].style.display = 'block') {
    m_ss[index].style.backgroundColor = '#333';
    m_ss[index].style.color = '#ffffff';

  }
}

if (mtabll[0].style.display = 'block') {
  m_ss[0].style.color = '#ffff';
  m_ss[0].style.backgroundColor = '#333';
} 

// Porshe

let pcurrentIndex = 0;

// Массив с путями к изображениям
const pimages = [
  "img/iris.webp",
"img/iris (1).webp",
"img/iris (2).webp",
"img/iris (3).webp",
"img/iris (4).webp",
"img/iris (6).webp"
  // Добавьте пути к вашим изображениям
];

// Функция для изменения изображения
function changep(directio) {
  pcurrentIndex += directio;

  // Проверка на выход за пределы массива
  if (pcurrentIndex < 0) {
    pcurrentIndex = pimages.length - 1;
  } else if (pcurrentIndex >= pimages.length) {
    pcurrentIndex = 0;
  }

  // Получение элемента изображения и изменение его src
  const imageElemenp = document.getElementById("psimage");
  imageElemenp.src = pimages[pcurrentIndex];
}

//  Таблица
var p_s0 = document.getElementById('pdviga');
var p_s1 = document.getElementById('ptran');
var p_s2 = document.getElementById('pmass');
var p_s3 = document.getElementById('ptopliv');
var pdvigat = document.getElementById('pdvigat');
var ptrans = document.getElementById('ptrans');
var pmassa = document.getElementById('pmassa');
var ptopliva = document.getElementById('ptopliva');
var ptabll = [pdvigat, ptrans, pmassa, ptopliva];
var p_ss = [p_s0, p_s1, p_s2, p_s3]

function p_s(index) {
  p_ss.forEach(function (elemen) {
    elemen.style.backgroundColor = '';
  })

  ptabll.forEach(function (element) {
    element.style.display = 'none';
  });

  if (ptabll[index]) {
    ptabll[index].style.display = 'block';
  }
  if (ptabll[index].style.display = 'block') {
    p_ss[index].style.backgroundColor = '#333';
    

  }
}

if (ptabll[0].style.display = 'block') {
  p_ss[0].style.backgroundColor = '#333';
}



// Shevrole


let scurrentIndex = 0;

// Массив с путями к изображениям
const simages = [
  "img/1200x900n (1).webp",
  "img/1200x900n (2).webp",
  "img/1200x900n (3).webp",
  "img/1200x900n (4).webp",
  "img/1200x900n (5).webp"

  // Добавьте пути к вашим изображениям
];

// Функция для изменения изображения
function changes(directios) {
  scurrentIndex += directios;

  // Проверка на выход за пределы массива
  if (scurrentIndex < 0) {
    scurrentIndex = simages.length - 1;
  } else if (scurrentIndex >= simages.length) {
    scurrentIndex = 0;
  }
  const simageElemenp = document.getElementById("simage");
  simageElemenp.src = simages[scurrentIndex];
}

// Таблица

var s_s0 = document.getElementById('sdviga');
var s_s1 = document.getElementById('stran');
var s_s2 = document.getElementById('smass');
var s_s3 = document.getElementById('stopliv');
var sdvigat = document.getElementById('sdvigat');
var strans = document.getElementById('strans');
var smassa = document.getElementById('smassa');
var stopliva = document.getElementById('stopliva');
var stabll = [sdvigat, strans, smassa, stopliva];
var s_ss = [s_s0, s_s1, s_s2, s_s3]

function s_s(index) {
  s_ss.forEach(function (elemen) {
    elemen.style.backgroundColor = '';
    elemen.style.color = '';
  })

  stabll.forEach(function (element) {
    element.style.display = 'none';
  });

  if (stabll[index]) {
    stabll[index].style.display = 'block';
  }
  if (stabll[index].style.display = 'block') {
    s_ss[index].style.backgroundColor = '#ffff';
    s_ss[index].style.color = '#333';

  }
}

if (stabll[0].style.display = 'block') {
  s_ss[0].style.backgroundColor = '#ffff';
  s_ss[0].style.color = '#333';

}


// Поле поиска


var searchInput = document.getElementById('searchInput');
var cars = document.querySelectorAll('#CAR'); // Предположим, что у всех элементов, которые нужно скрыть/показать, есть класс 'car'

// Назначаем обработчик события на ввод в поле поиска
searchInput.addEventListener('input', function() {
    // Получаем введенное значение
    var searchTerm = searchInput.value.toLowerCase();

    // Проходим по элементам и скрываем/показываем их в зависимости от соответствия поисковому запросу
    cars.forEach(function(car) {
        var title = car.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            car.style.display = '';
        } else {
            car.style.display = 'none';
        }
    });
});
