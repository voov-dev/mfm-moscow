import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initMainNav} from './modules/main-nav';
import {initBurgers} from './modules/burger';
import {initVideo} from './modules/video';
import {initAutoResizeTextarea} from './modules/form/auto-resize-textarea';
import {initMap} from './modules/map';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

  iosVhFix();
  const lightGallerySelector = document.getElementById('lightgallery');
  if (lightGallerySelector) {
    lightGallery(lightGallerySelector, {
      plugins: [lgThumbnail],
      selector: '.portfolio-work',
      thumbnail: true,
      animateThumb: false,
      speed: 500,
    });
  }

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    initMainNav();
    initBurgers();
    initVideo();
    initAutoResizeTextarea();
    initMap();

    let introHeroSwiper = document.querySelector('.section-hero .swiper');
    if (introHeroSwiper) {
      // eslint-disable-next-line no-undef
      introHeroSwiper = new Swiper('.section-hero .swiper', {
        slideActiveClass: 'is-active',
        grabCursor: false,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 12000,
        },
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        },
        navigation: {
          nextEl: '.section-hero .section-hero__control.section-hero__control--next',
          prevEl: '.section-hero .section-hero__control.section-hero__control--prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }

    let introPortfolioOneSwiper = document.querySelector('.section.section--portfolio-one .swiper');
    if (introPortfolioOneSwiper) {
      // eslint-disable-next-line no-undef
      introPortfolioOneSwiper = new Swiper('.section.section--portfolio-one .swiper', {
        slidesPerView: 6,
        loop: false,
        speed: 1500,
        autoplay: {
          delay: 7000,
        },
        navigation: {
          disabledClass: 'is-disabled',
          nextEl: '.section.section--portfolio-one .section__control.section__control--next',
          prevEl: '.section.section--portfolio-one .section__control.section__control--prev',
        },
      });
    }

    let introPortfolioTwoSwiper = document.querySelector('.section.section--portfolio-two .swiper');
    if (introPortfolioTwoSwiper) {
      // eslint-disable-next-line no-undef
      introPortfolioTwoSwiper = new Swiper('.section.section--portfolio-two .swiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 7000,
        },
        navigation: {
          disabledClass: 'is-disabled',
          nextEl: '.section.section--portfolio-two .section__control.section__control--next',
          prevEl: '.section.section--portfolio-two .section__control.section__control--prev',
        },
      });
    }
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
