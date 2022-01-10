// Блок замен текста


window.onload = function () {

    let maquee = document.querySelectorAll('.marqueeName')
    let description = document.querySelector('.description')
    let mapIframe = document.querySelector('.map__body')
    let mapIframeBottom = document.querySelector('.footer__map__iframe')
    let mapIframeCode = document.createElement("iframe");
    let housePlan1 = document.querySelector('#plan1')
    let housePlan2 = document.querySelector('#plan2')
    let housePlan3 = document.querySelector('#plan3')
    let housePlan4 = document.querySelector('#plan4')
    let houseCard1 = document.querySelector('#houseCard1')
    let houseCard2 = document.querySelector('#houseCard2')
    let houseCard3 = document.querySelector('#houseCard3')
    let houseCard4 = document.querySelector('#houseCard4')
    let quiz1 = document.querySelector('#quiz1')
    let quiz2 = document.querySelector('#quiz2')
    let quiz3 = document.querySelector('#quiz3')
    let quiz4 = document.querySelector('#quiz4')
    let quiz0 = document.querySelector('#quiz0')

    let isHouse = false;
    let slidesCount = 13;
    let name = 'Отель Villa Adriano';
    let descriptionText = "Отель Villa Adriano находится в поселке Эсто-Садок на ул. Березовой прямо на границе Нацпарка, рядом с подъемниками и комплексом 'Горки Город', в шаговой доступности от горнолыжных трасс.  Услуги отеля: 35 номеров от комфорт-класса до класса-люкс, ресторан итальянской кухни, бары, SPA-зона, открытый бассейн, русская баня-сруб, прокат горных велосипедов и горнолыжного оборудования.";
    mapIframeCode.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56250.77708870569!2d40.23646354653952!3d43.68021906544758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f675bd1055bb1b%3A0xb20ee707e95989a2!2sEstosadok%2C%20Krasnodar%20Krai%2C%20354392!5e0!3m2!1sen!2sru!4v1641199822068!5m2!1sen!2sru";


    description.innerHTML = descriptionText;

    mapIframeBottom.src = mapIframeCode.src;

    mapIframeCode.width = "100vw";
    mapIframeCode.height = "90vh";
    mapIframeCode.frameBorder = "0";
    mapIframeCode.allowfullscreen = " ";
    mapIframeCode.scrolling = "0";
    mapIframeCode.style.border = "0";

    mapIframe.appendChild(mapIframeCode);

    if (isHouse == true) {
        housePlan1.innerHTML = "Вариант 1"
        housePlan2.innerHTML = "Вариант 2"
        housePlan3.innerHTML = "Вариант 3"
        housePlan4.innerHTML = "Вариант 4"
        houseCard1.classList.add('house');
        houseCard2.classList.add('house');
        houseCard3.classList.add('house');
        houseCard4.classList.add('house');
        quiz1.style.display = "none"
        quiz2.style.display = "none"
        quiz3.style.display = "none"
        quiz4.style.display = "none"
        quiz0.innerHTML = '<h1>Нужен ремонт?</h1><div class="quiz__quiz__slide__row"><div class="quiz__quiz__slide__row__card"><input type="checkbox" name="repair[]" value="Да" /><img src="img/04.jpg" alt=""><p>Да</p></div><div class="quiz__quiz__slide__row__card"><input type="checkbox" name="repair[]" value="Нет" /><img src="img/04.jpg" alt=""><p>Нет</p></div><div style="opacity: 0;" class="quiz__quiz__slide__row__card"><input type="checkbox" name="floor[]" value="Высокий Этаж" /><img src="img/04.jpg" alt=""><p>Высокий этаж</p></div></div>'


    } else {
        // quiz0.parentNode.removeChild(quiz0)
        quiz0.style.display = 'none';
    }

    document.querySelector('.navbar__tittle').innerHTML = name;

    for (let i = 0; i < maquee.length; i++) {
        maquee[i].innerHTML = name + " · ";
    }

    let slidesNumber = 19 - slidesCount;

    for (let i = 0; i < slidesNumber; i++) {
        swiper.removeSlide([18, slidesCount]);
        swiper.update();
    }


    setTimeout(function () {
        let quizSlidesCards = document.querySelectorAll('.quiz__quiz__slide__row__card')

        for (let i = 0; i < quizSlidesCards.length; i++) {
            quizSlidesCards[i].addEventListener("click", function () {
                quizSlidesCards[i].parentElement.parentElement.classList.toggle("Prev");
                quizSlidesCards[i + 3].parentElement.parentElement.classList.toggle("hidden");
                quizSlidesCards[i + 3].parentElement.parentElement.classList.toggle("Active");
                quizSlidesCards[i + 6].parentElement.parentElement.classList.toggle("hidden");
            });
        }
    }, 1000);
};

// Конец блока с заменой текста

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    multiplier: .5,
    smooth: true,
    getDirection: true,
    repeat: true,
    getSpeed: true,
});

const heroArrow = document.querySelector('#arrow-big');
heroArrow.addEventListener('click', toSecondBlock);

function toSecondBlock() {
    scroll.scrollTo('.about', {
        'offset': 0,
        'duration': 600,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': true
    });
}

const navbar__plan = document.querySelector('.navbar__left__plan');
navbar__plan.addEventListener('click', toPlan);


const navbar__about = document.querySelector('.navbar__left__about');
navbar__about.addEventListener('click', toSecondBlock);

function toPlan() {
    scroll.scrollTo('.plan', {
        'offset': 0,
        'duration': 600,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': true
    });
}

const navbar__gallery = document.querySelector('.navbar__left__gallery');
navbar__gallery.addEventListener('click', toGallery);

function toGallery() {
    scroll.scrollTo('.gallery', {
        'offset': 0,
        'duration': 600,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': true
    });
}


// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    scrollbar: false,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// Рандомная Генерация числа Вариантов в Планировке

let planNumber = document.querySelectorAll('.plan__right__card__variants');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function randomPlanNumber(div) {
    div.textContent = Math.floor(getRandomArbitrary(5, 17)) + ' Вариантов';
}

planNumber.forEach(randomPlanNumber);

// Окончание Блока Генерации числа


// Блок Курсора на главной


// let heroImage = document.querySelector(".hero__img");
// let mouseCursor = document.querySelector(".hero__img__cursor");

// heroImage.addEventListener("mousemove", cursor)
// heroImage.addEventListener("mouseout", cursorOut)

// function cursor(e) {
//     mouseCursor.style.top = e.pageY + "px";
//     mouseCursor.style.left = e.pageX + "px";
//     document.body.style.cursor = 'none';
// }

// function cursorOut() {
//     document.body.style.cursor = 'inherit';
// }

// window.addEventListener("mousedown", () => {
//     mouseCursor.classList.add('mouseDown');
// });

// window.addEventListener("mouseup", () => {
//     mouseCursor.classList.remove('mouseDown');
// });


// Окончание Блока Курсора на главной

// Блоки смены цвета фона 

scroll.on('scroll', (instance) => {
    whiteBG();
    orangeBG();
    greenBG();
    purpleBG()
});

function orangeBG() {
    if (document.querySelector('.about').hasAttribute('data-scroll-section-inview')) {
        document.body.classList.add('orange')
        document.querySelector('.about__marquee').classList.add('orange')
    } else {
        document.body.classList.remove('orange')
        document.querySelector('.about__marquee').classList.remove('orange')

    }
}

function whiteBG() {
    if (document.querySelector('.hero').hasAttribute('data-scroll-section-inview')) {
        document.body.classList.add('white')
        document.querySelector('.alwayson').classList.add('hide')
        document.querySelector('.alwayson__map').classList.add('hide')
        // document.querySelector('.about__marquee').classList.add('white')
    } else {
        document.body.classList.remove('white')
        document.querySelector('.alwayson').classList.remove('hide')
        document.querySelector('.alwayson__map').classList.remove('hide')
        // document.querySelector('.about__marquee').classList.remove('white')
    }
}


function greenBG() {
    if (document.querySelector('.sochi').hasAttribute('data-scroll-section-inview')) {
        document.body.classList.add('green')
    } else {
        document.body.classList.remove('green')
    }
}

function purpleBG() {
    if (document.querySelector('.plan').hasAttribute('data-scroll-section-inview')) {
        document.body.classList.add('purple')
    } else {
        document.body.classList.remove('purple')
    }
}

// Блок Квиза

let quizCont = document.querySelector('.quiz__quiz')

let quizSlides = document.querySelectorAll('.quiz__quiz__slide')

// Конец блока Квиза

// Блок телефона

document.getElementById('phone2').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = '+7' + (x[2] ? '(' + x[2] : '') + (x[3] ? ')' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});


document.getElementById('phone1').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = '+7' + (x[1] ? '(' + x[2] : '') + (x[3] ? ')' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});

// Конец блока телефона

// Блок попапов


document.querySelector('.alwayson').addEventListener('click', () => {
    document.querySelector('.bgformap').classList.add('inmotion'),

        setTimeout(function () {
            document.querySelector('.popup').classList.add('open')
        }, 500);
})

// document.querySelector('#planCTA').addEventListener('click', () => {
//     document.querySelector('.bgformap').classList.add('inmotion'),

//         setTimeout(function () {
//             document.querySelector('.popup').classList.add('open')
//         }, 500);
// })

document.querySelector('.footer__callback').addEventListener('click', () => {
    document.querySelector('.bgformap').classList.add('inmotion'),

        setTimeout(function () {
            document.querySelector('.popup').classList.add('open')
        }, 500);
})
document.querySelector('.footer__prices').addEventListener('click', () => {
    document.querySelector('.bgformap').classList.add('inmotion'),

        setTimeout(function () {
            document.querySelector('.popup').classList.add('open')
        }, 500);
})

document.querySelector('.navbar__right__button').addEventListener('click', () => {
    document.querySelector('.bgformap').classList.add('inmotion'),

        setTimeout(function () {
            document.querySelector('.popup').classList.add('open')
        }, 500);
})

document.querySelector('.popup__header__back').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('open')

    setTimeout(function () {
        document.querySelector('.bgformap').classList.remove('inmotion')
    }, 500);
})

document.querySelector('.alwayson__map').addEventListener('click', () => {
    document.querySelector('.bgformap').classList.add('inmotion'),

        setTimeout(function () {
            document.querySelector('.map').classList.add('open')
        }, 500);
})


document.querySelector('.map__header__back').addEventListener('click', () => {
    document.querySelector('.map').classList.remove('open')

    setTimeout(function () {
        document.querySelector('.bgformap').classList.remove('inmotion')
    }, 500);
})

let planCards = document.querySelectorAll('.plan__right__card')

for (let i = 0; i < planCards.length; i++) {
    planCards[i].addEventListener("click", function () {
        document.querySelector('.bgformap').classList.add('inmotion'),

            setTimeout(function () {
                document.querySelector('.popup').classList.add('open')
            }, 500);
    });
}

document.querySelector('.sochi__txt__button').addEventListener('click', () => {
    document.querySelector('.sochiPopup').classList.add('open'),

        setTimeout(function () {
            document.querySelector('.sochiPopup__card').classList.add('show')
        }, 1000);
})

document.querySelector('.sochiPopup__card__header__close').addEventListener('click', () => {
    document.querySelector('.sochiPopup__card').classList.remove('show'),

        setTimeout(function () {
            document.querySelector('.sochiPopup').classList.remove('open')
        }, 800);
})

document.querySelector('.sochiPopup__bg').addEventListener('click', () => {
    document.querySelector('.sochiPopup__card').classList.remove('show'),

        setTimeout(function () {
            document.querySelector('.sochiPopup').classList.remove('open')
        }, 800);
})


// Конец блока попапов

let endSlides = document.querySelectorAll('.quiz_end_slides')

for (let i = 0; i < endSlides.length; i++) {
    endSlides[i].addEventListener("click", function () {
        setTimeout(function () {
            document.querySelector('.quiz__start').style.marginLeft = 0;
        }, 200);
    });
}