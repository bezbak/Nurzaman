const totalPages = document.getElementById('totalPages');
var windowWidth = window.innerWidth;

// $('.owl-carousel').owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   autoplay: true, // Enable autoplay
//   autoplayHoverPause: false,
//   zoom: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 5,
//     },
//   },
// });

var swiper = new Swiper('.swiper-container1', {
  slidesPerView: windowWidth > 390 ? 2 : 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination1',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
});

var swiper = new Swiper('.swiper-container2', {
  slidesPerView: windowWidth < 1024 ? (windowWidth > 450 ? 2 : 1) : 3,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination2',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});

var swiper = new Swiper('.swiper-container3', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination3',
    type: windowWidth > 395 ? 'fraction' : 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
});

var swiper5 = new Swiper('.swiper-container5', {
  slidesPerView: windowWidth > 390 ? 2 : 1,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination5',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next5',
    prevEl: '.swiper-button-prev5',
  },
});

var swiper5 = new Swiper('.swiper-container6', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination6'
  },
  navigation: {
    nextEl: '.swiper-button-next6',
    prevEl: '.swiper-button-prev6',
  },
});

var swiperOptions = {
  loop: true,
  slidesPerView: 6,
  autoplay: {
    disableOnInteraction: false,
    delay: 0,
  },
  breakpoints: {
    240: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  speed: 4000,
  grabCursor: false,
  mousewheelControl: false,
  pauseOnMouseEnter: false,
  keyboardControl: false,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
};

var swiper = new Swiper('.swiper-container4', swiperOptions);

window.addEventListener('resize', function () {
  // Получение текущей ширины экрана
  var windowWidth = window.innerWidth;

  // Условие для изменения slidesPerView
  if (windowWidth <= 1024) {
    swiper.params.slidesPerView = 2;
  } else {
    swiper.params.slidesPerView = 3;
  }

  // Обновление Swiper с новыми параметрами
  swiper.update();
});

const onInput = (parent, e) => {
  const slides = parent.querySelectorAll('input');
  const min = parseFloat(slides[0].min);
  const max = parseFloat(slides[0].max);

  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);

  // const percentageMin = (slide1 / (max - min)) * 100;
  // const percentageMax = slides[0].disabled && (slide2 / (max - min)) * 100 < 0 ? 0 : (slide2 / (max - min)) * 100;
  // console.log(percentageMax);
  
  // parent.style.setProperty('--range-slider-value-low', percentageMin);
  // parent.style.setProperty('--range-slider-value-high', percentageMax);

  const percentageMin = ((slide1 - min) / (max - min)) * 100;
let percentageMax = ((slide2 - min) / (max - min)) * 100;

// Убедитесь, что процентное значение не меньше 0
if (slides[0].disabled && percentageMax < 0) {
    percentageMax = 0;
}


// Установка CSS переменных
parent.style.setProperty('--range-slider-value-low', `${percentageMin}`);
parent.style.setProperty('--range-slider-value-high', `${percentageMax}`);

  if (slide1 > slide2 && !slides[0].disabled) {
    const tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;

    if (e?.currentTarget === slides[0]) {
      slides[0].insertAdjacentElement('beforebegin', slides[1]);
    } else {
      slides[1].insertAdjacentElement('afterend', slides[0]);
    }
  }

  parent.querySelector('.range-slider__display').setAttribute('data-low', slide1);
  parent.querySelector('.range-slider__display').setAttribute('data-high', slide2);
};

addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.range-slider').forEach((range) =>
    range.querySelectorAll('input').forEach((input) => {
      if (input.type === 'range') {
        input.oninput = (e) => onInput(range, e);
        onInput(range);
      }
    })
  );
});

const nav = document.querySelector('nav');
const onFloor = document.getElementById('onFloor');
if (onFloor) {
  const plan = document.getElementById('plan');
  const onObjekt = document.getElementById('onObjekt');

  const first = document.getElementById('first');
  const second = document.getElementById('second');
  const tree = document.getElementById('tree');

  first.addEventListener('click', () => {
    second.classList.remove('moreActiveLink');
    tree.classList.remove('moreActiveLink');
    first.classList = 'moreActiveLink';
    onFloor.style.display = 'block';
    plan.style.display = 'none';
    onObjekt.style.display = 'none';
  });
  second.addEventListener('click', () => {
    first.classList.remove('moreActiveLink');
    tree.classList.remove('moreActiveLink');
    second.classList = 'moreActiveLink';
    plan.style.display = 'block';
    onFloor.style.display = 'none';
    onObjekt.style.display = 'none';
  });
  tree.addEventListener('click', () => {
    first.classList.remove('moreActiveLink');
    second.classList.remove('moreActiveLink');
    tree.classList = 'moreActiveLink';
    onObjekt.style.display = 'block';
    onFloor.style.display = 'none';
    plan.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const pathElement = document.querySelector('.oneHome');
  const pathElement1 = document.querySelector('.oneHome2');
  const pathElement2 = document.querySelector('.oneHome3');
  const pathElement3 = document.querySelector('.oneHome4');
  const pathElement4 = document.querySelector('.oneHome5');
  const pathElement5 = document.querySelector('.oneHome6');
  const pathElement6 = document.querySelector('.oneHome7');
  const pathElement7 = document.querySelector('.oneHome8');
  const pathElement8 = document.querySelector('.oneHome9');
  const pathElement9 = document.querySelector('.oneHome10');
  const pathElement10 = document.querySelector('.oneHome11');
  const pathElement11 = document.querySelector('.oneHome12');
  const pathElement12 = document.querySelector('.oneHome13');
  const pathElement13 = document.querySelector('.oneHome14');
  const pathElement14 = document.querySelector('.oneHome15')

  const glassCardElement = document.querySelector('.glassCardd');
  const glassCardElement1 = document.querySelector('.glassCardd2');
  const glassCardElement2 = document.querySelector('.glassCardd3');
  const glassCardElement3 = document.querySelector('.glassCardd4');
  const glassCardElement4 = document.querySelector('.glassCardd5');
  const glassCardElement5 = document.querySelector('.glassCardd6');
  const glassCardElement6 = document.querySelector('.glassCardd7');
  const glassCardElement7 = document.querySelector('.glassCardd8');
  const glassCardElement8 = document.querySelector('.glassCardd9');
  const glassCardElement9 = document.querySelector('.glassCardd10');
  const glassCardElement10 = document.querySelector('.glassCardd11');
  const glassCardElement11 = document.querySelector('.glassCardd12');
  const glassCardElement12 = document.querySelector('.glassCardd13');
  const glassCardElement13 = document.querySelector('.glassCardd14');
  const glassCardElement14 = document.querySelector('.glassCardd15');
  // const glassCardElement15 = document.querySelector('.glassCardd15');


  if (pathElement && glassCardElement) {
    pathElement.addEventListener('mouseenter', () => {
      glassCardElement.style.display = 'block';
    });

    pathElement.addEventListener('mouseleave', () => {
      glassCardElement.style.display = 'none';
    });
  } else {
  
  }

  if (pathElement1 && glassCardElement1) {
    pathElement1.addEventListener('mouseenter', () => {
      glassCardElement1.style.display = 'block';
    });

    pathElement1.addEventListener('mouseleave', () => {
      glassCardElement1.style.display = 'none';
    });
  } else {

  }
  if (pathElement2 && glassCardElement2) {
    pathElement2.addEventListener('mouseenter', () => {
      glassCardElement2.style.display = 'block';
    });

    pathElement2.addEventListener('mouseleave', () => {
      glassCardElement2.style.display = 'none';
    });
  } else {
 
  }
  if (pathElement3 && glassCardElement3) {
    pathElement3.addEventListener('mouseenter', () => {
      glassCardElement3.style.display = 'block';
    });

    pathElement3.addEventListener('mouseleave', () => {
      glassCardElement3.style.display = 'none';
    });
  } else {
   
  }
  if (pathElement4 && glassCardElement4) {
    pathElement4.addEventListener('mouseenter', () => {
      glassCardElement4.style.display = 'block';
    });

    pathElement4.addEventListener('mouseleave', () => {
      glassCardElement4.style.display = 'none';
    });
  } else {

  }
  if (pathElement5 && glassCardElement5) {
    pathElement5.addEventListener('mouseenter', () => {
      glassCardElement5.style.display = 'block';
    });

    pathElement5.addEventListener('mouseleave', () => {
      glassCardElement5.style.display = 'none';
    });
  } else {
  
  }
  if (pathElement7 && glassCardElement7) {
    pathElement7.addEventListener('mouseenter', () => {
      glassCardElement7.style.display = 'block';
    });

    pathElement7.addEventListener('mouseleave', () => {
      glassCardElement7.style.display = 'none';
    });
  } else {
   
  }
  if (pathElement8 && glassCardElement8) {
    pathElement8.addEventListener('mouseenter', () => {
      glassCardElement8.style.display = 'block';
    });

    pathElement8.addEventListener('mouseleave', () => {
      glassCardElement8.style.display = 'none';
    });
  } else {
    
  }
  if (pathElement9 && glassCardElement9) {
    pathElement9.addEventListener('mouseenter', () => {
      glassCardElement9.style.display = 'block';
    });

    pathElement9.addEventListener('mouseleave', () => {
      glassCardElement9.style.display = 'none';
    });
  } else {
 
  }
  if (pathElement6 && glassCardElement6) {
    pathElement6.addEventListener('mouseenter', () => {
      glassCardElement6.style.display = 'block';
    });

    pathElement6.addEventListener('mouseleave', () => {
      glassCardElement6.style.display = 'none';
    });
  } else {

  }

  if (pathElement10 && glassCardElement10) {
    pathElement10.addEventListener('mouseenter', () => {
      glassCardElement10.style.display = 'block';
    });

    pathElement10.addEventListener('mouseleave', () => {
      glassCardElement10.style.display = 'none';
    });
  } else {

  }
  if (pathElement11 && glassCardElement11) {
    pathElement11.addEventListener('mouseenter', () => {
      glassCardElement11.style.display = 'block';
    });

    pathElement11.addEventListener('mouseleave', () => {
      glassCardElement11.style.display = 'none';
    });
  } else {

  }

  if (pathElement12 && glassCardElement12) {
    pathElement12.addEventListener('mouseenter', () => {
      glassCardElement12.style.display = 'block';
    });

    pathElement12.addEventListener('mouseleave', () => {
      glassCardElement12.style.display = 'none';
    });
  } else {

  }

  if (pathElement13 && glassCardElement13) {
    pathElement13.addEventListener('mouseenter', () => {
      glassCardElement13.style.display = 'block';
    });

    pathElement13.addEventListener('mouseleave', () => {
      glassCardElement13.style.display = 'none';
    });
  } else {

  }

  if (pathElement14 && glassCardElement14) {
    pathElement14.addEventListener('mouseenter', () => {
      glassCardElement14.style.display = 'block';
    });

    pathElement14.addEventListener('mouseleave', () => {
      glassCardElement14.style.display = 'none';
    });
  } else {

  }
  
});

const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', () => {
  menu.style.left = 0;
});
closeMenu.addEventListener('click', () => {
  menu.style.left = '-100%';
});

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('ul a');

  links.forEach((link) => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    menu.style.left = '-100%';
  }
});

function callPhoneNumber(phoneNumber) {
  window.location.href = 'tel:' + phoneNumber;
}

document.addEventListener('DOMContentLoaded', function () {
  // Hide preloader when content is fully loaded
  window.addEventListener('load', function () {
    this.setTimeout(() => {
      var preloader = document.querySelector('.preloader');
      preloader.style.display = 'none';
    }, 100000);

    // Show content after preloader is hidden
  });

  // Update progress text during animation
  var progressBar = document.querySelector('.progress-bar');
  var progressText = document.querySelector('.progress-text');

  progressBar.addEventListener('animationiteration', function () {
    var progressValue = parseInt(progressBar.style.width);
    progressText.textContent = progressValue + '%';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var valueBlock = document.getElementById('valueBlock');
  var preloader = document.querySelector('.preloader');
  const loadProgress = document.getElementById('loadProgress');
  var counter = 0;

  var intervalId = setInterval(function () {
    counter = (counter + 1) % 102; // Ограничиваем значение от 0 до 100
    valueBlock.textContent = counter + '%';
    loadProgress.style.width = counter + '%';

    if (counter > 100) {
      clearInterval(intervalId); // Остановить интервал
      preloader.style.display = 'none'; // Скрыть прелоадер
    }
  }, 15);
});

const modalsOpenButtons = document.querySelectorAll('.modals');
const navbar = document.querySelector('nav');

if (modalsOpenButtons.length) {
  modalsOpenButtons.forEach((el) => {
    const modalId = el.dataset.modal;
    const closeModalId = document.getElementById(`${modalId}Close`);
    const currentModal = document.getElementById(modalId);

    const onClose = () => {
      currentModal.style.display = 'none';
      document.body.style.overflow = 'auto';
      navbar.style.zIndex = 16;
    };

    const onOpenModal = () => {
      currentModal.style.display = 'block';
      navbar.style.zIndex = 1;
      document.body.style.overflow = 'hidden';
    };
  
    closeModalId.addEventListener('click', onClose);
    currentModal.children[0].addEventListener('click', onClose);
    el.onclick = onOpenModal;
  });
}

const moreInfoItems = document.querySelectorAll('.moreInfo');
const moreInfoCloseItems = document.querySelectorAll('.galaryClose');

if (moreInfoItems.length) {
  moreInfoItems.forEach((el) => {
    el.addEventListener('click', () => {
      el.parentElement.parentElement.classList.add('clicked');
    });
  });

  moreInfoCloseItems.forEach((el) => {
    el.addEventListener('click', () => {
      el.parentElement.classList.remove('clicked');
    });
  });
}

const shareSocial = document.getElementById('socialShares');

if (shareSocial) {
  const titleElement = document.getElementById('title');
  const floorInfo = document.getElementById('floorsInfo');

  for (const element of shareSocial.children) {
    element.addEventListener('click', () => {
      element.dataset.url = window.location.href;
      element.dataset.title = `${titleElement.textContent} ${floorInfo.textContent}`;
    });
  }
}

const openfilterEl = document.getElementById('openFilter');
if (openfilterEl) {
  openfilterEl.addEventListener('click', () => {
    if (openfilterEl.parentElement.classList.contains('onclick')) {
      openfilterEl.parentElement.classList.remove('onclick');
    } else {
      openfilterEl.parentElement.classList.add('onclick');
    }
  });
}

function numberWithSpaces(numbers) {
  return numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function numbersFromNubersWithSpaces(string) {
  return +string.replaceAll(' ', '');
}

const price = document.getElementById('price');

if (price && price.textContent.trim()) {
  const standartsMonthlyEls = document.querySelectorAll('.standartMonthly');
  const monthlyEls = document.querySelectorAll('.monthly');
  const paymentRange = document.getElementById('paymentRange');
  const paymentInput = document.getElementById('paymentInput');
  const numberPrice = numbersFromNubersWithSpaces(price.textContent);
  document.getElementById('calculatePayment').addEventListener('click', () => {
    paymentRange.value = paymentInput.value;
    document.querySelector('.paymentFirst').textContent = numberWithSpaces(paymentInput.value);
    onInput(paymentRange.parentElement);
    monthlyEls.forEach(
      (el) => (el.textContent = numberWithSpaces(((numberPrice - paymentInput.value) / 24).toFixed(0)))
    );
  });

  paymentRange.addEventListener('input', (event) => {
    document.querySelector('.paymentFirst').textContent = numberWithSpaces(event.target.value);
    paymentRange.value = event.target.value;
    monthlyEls.forEach(
      (el) => (el.textContent = numberWithSpaces(((numberPrice - event.target.value) / 24).toFixed(0)))
    );
  });

  const onChangeTexts = () => {
    const prices = document.querySelectorAll('.price');
    prices.forEach((el) => (el.textContent = price.textContent));

    standartsMonthlyEls.forEach((el) => (el.textContent = numberWithSpaces((numberPrice / 24).toFixed(0))));
    monthlyEls.forEach((el) => (el.textContent = numberWithSpaces((numberPrice / 24).toFixed(0))));
  };

  document.getElementById('paymentForm').onsubmit = (event) => event.preventDefault();
  const priceObserver = new MutationObserver(() => {
    onChangeTexts();
  });

  priceObserver.observe(price, { childList: true });
  onChangeTexts();
}


// Fancybox.bind('[data-fancybox="gallery"]', {
//   // Your custom options for a specific gallery
// });

function hello() {
  const th = document.getElementById("clampText")
  th.classList.toggle("fullText");

  // Проверяем, имеет ли элемент класс fullText
  if (th.classList.contains("fullText")) {
    // Если да, удаляем стили, ограничивающие текст
    th.style.display = "";
    th.style.webkitBoxOrient = "";
    th.style.webkitLineClamp = "";
    th.style.overflow = "";
  } else {
    // Если нет, возвращаем ограничивающие стили
    th.style.display = "-webkit-box";
    th.style.webkitBoxOrient = "vertical";
    th.style.webkitLineClamp = "3";
    th.style.overflow = "hidden";
  }
 
}


const blockInputs = document.querySelectorAll(".select-box__input");
const flatsContainer = document.getElementById("flats-container");


function GetBlook(id) {
  fetch("/ajax/get_floors_and_apartments/?block_number=" + id)
    .then((response) => response.json())
    .then((data) => {
      flatsContainer.innerHTML = ""; // Очищаем предыдущие данные
      flatsContainer.className = "FlatsFlexBoxPArent";
      // Здесь ваш код для добавления новых данных в flatsContainer
      // Например:
      data.floors.forEach((floor) => {
        const floorDiv = document.createElement("div");

        floorDiv.innerHTML = `${floor.floor_title} Этаж`;
        flatsContainer.appendChild(floorDiv);

        const apartmentsList = data.apartments.filter(
          (apartment) =>
            apartment.block == id &&
            apartment.floor == floor.floor_title
        );
     
        apartmentsList.forEach((apartment) => {
          const apartmentDiv = document.createElement("a");
          apartmentDiv.href = `/genplaning_detail/${apartment.apartment_id}/`;
          apartmentDiv.className = "flat-cell";
          apartmentDiv.innerHTML = ` ${apartment.block}: ${apartment.floor}`;

          if (apartment.status === 1) {
            apartmentDiv.innerHTML = "";
            apartmentDiv.className = "flat-cell__blocked flat1";
          } else if (apartment.status === 2) {
            apartmentDiv.className =
              "floorItemINGenPlanMINCardBron flat2";
          }
          if (apartment.status === 3) {
            apartmentDiv.className =
              "floorItemINGenPlanMINCardBron flat3";
            apartmentDiv.innerHTML += '<div class="radio"></div>';
          }
          if (apartment.status === 4) {
            apartmentDiv.className =
              "floorItemINGenPlanMINCardBron flat4";
          }
          floorDiv.appendChild(apartmentDiv);
        });
      });
    })
    .catch((error) => {
      
    });
}
// Функция для добавления обработчика событий к каждому path
function setupPathClicks() {
  // Итерация по всем path элементам
  document.querySelectorAll('svg path').forEach(function (path) {
    path.addEventListener('click', function () {
      // Получаем номер блока из ID path
      const blockNumber = this.id.replace('path_block_', '');
      // Находим соответствующий radio кнопку и активируем её
      const radioButton = document.getElementById('block_' + blockNumber);
      if (radioButton) {
        radioButton.checked = true;
      }

      GetBlook(blockNumber)
      // Прокрутка на высоту одного экрана вниз
      window.scrollBy({
        top: window.innerHeight + 200, // Высота одного полного экрана
        left: 0, // Без горизонтальной прокрутки
        behavior: 'smooth' // Плавная прокрутка
      });
    });
  });
}

// Вызываем функцию после загрузки страницы
document.addEventListener('DOMContentLoaded', setupPathClicks);

document.getElementById('onDay').addEventListener('click', () => {
  document.getElementById('dayPLaning').style.display = 'block';
  document.getElementById('NightPLaning').style.display = 'none';
})

document.getElementById('onHight').addEventListener('click', () => {
  document.getElementById('NightPLaning').style.display = 'block';
  document.getElementById('dayPLaning').style.display = 'none';
})

