$(function(){
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prew.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 601,
              settings: {
                arrows: false
                // arrows: false - отключаем стрелки при разрешении 601px
              }
            },
          ]
    });
});


// все эти настройки/данные берём тут: https://kenwheeler.github.io/slick/
// prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prew.svg" alt=""></button>',
// nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
// autoplay: true

// responsive: - почти тоже самое что и @media для адаптации





// Делаем кнопкам общий дополнительный класс slick-btn в котором прописываем общие свойства

// .slick-btn {
//     position: absolute;
//     /* Выравниваем стрелку по центру оси У*/
//     top: 50%; /*  - опускаем вниз по оси У на 50% */
//     transform: translateY(-50%); /*  - поднимаем стрелку
//     вверх на 50% её высоты */
//     border: none;
//     background-color: transparent;
//     outline: none; /* - убираем обводку если она есть
//     и если она не нужна */
//     z-index: 5; /* - что бы все стрелки были поверх картнки */
//     cursor: pointer;
// }