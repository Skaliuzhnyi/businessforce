(function ($) {
  $(document).ready(function () {
    // isWebp();

    burgerClick();

    stickyHeader();

    // function isWebp() {
    //   function testWebP(callback) {
    //     var webP = new Image();
    //     webP.onload = webP.onerror = function () {
    //       callback(webP.height == 2);
    //     };
    //     webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    //   }
    //
    //   testWebP(function (support) {
    //     if (support == true) {
    //       document.querySelector('body').classList.add('webp');
    //     } else {
    //       document.querySelector('body').classList.add('no-webp');
    //     }
    //   });
    // }

    function burgerClick() {
      const body = document.querySelector('body');
      const burgerBtn = document.querySelector('.burger');
      const menu = document.querySelector('.header__nav');
      const menuLinks = menu.querySelectorAll('a');

      burgerBtn.addEventListener('click', () => {
        let burgerBtnActive = burgerBtn.classList.contains('active');

        if (!burgerBtnActive) {
          burgerBtn.classList.add('active');
          menu.classList.add('active');
          body.classList.add('lock');
        } else {
          if (window.scrollY > 0) {
            burgerBtn.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
          } else {
            burgerBtn.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
          }
        }
      });

      menuLinks.forEach((element) => {
        element.addEventListener('click', () => {
          let burgerBtnActive = burgerBtn.classList.contains('active');

          if (burgerBtnActive) {
            burgerBtn.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
          } else {
            burgerBtn.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
          }
        });
      });
    }

    function stickyHeader() {
      $(document).on('scroll', function () {
        if ($(document).scrollTop() > 0) {
          $('.header').addClass('fixed');
        } else {
          $('.header').removeClass('fixed');
        }
      });
    }

    if($('.approved__list').length) {
      $('.approved__list').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
      });
    }

    const myBtnSmooth = document.querySelectorAll('a[href^="#"]');
    for (let btn of myBtnSmooth) {
      btn.addEventListener('click', function (event) {
        event.preventDefault();
        const blockId = btn.getAttribute('href');
        document.querySelector('' + blockId).classList.add('scroll-margin-top');
        document.querySelector('' + blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }

    const officeList = document.querySelector('.office');
    const partnersList = document.querySelector('.partners');

    function showHidenZone(list) {
      const btn = list.querySelector('.btn__more');
      const hidenZone = list.querySelector('.hiden-zone');
      const zoneHeight = hidenZone.querySelector('li').offsetHeight;
      hidenZone.style.maxHeight = zoneHeight * 2 + 10 + 'px';
      hidenZone.style.overflow = 'hidden';
      btn.addEventListener('click', function (event) {
        hidenZone.style.maxHeight = '2000px';
        btn.style.display = 'none';
      });
    }

    showHidenZone(officeList);
    showHidenZone(partnersList);

    Fancybox.bind('[data-fancybox="gallery"]', {
      Toolbar: {
        display: {
          left: [
            "infobar",
          ],
          middle: [],
          right: [
            "close",
          ],
        }
      }
    });

  });
})(jQuery);
