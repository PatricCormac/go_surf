$(function(){$(".header__slider").slick({infinite:!0,fade:!0,prevArrow:'<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg">',nextArrow:'<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg">',asNavFor:".slider-dots"}),$(".slider-dots").slick({slidesToShow:4,slidesToSCroll:4,asNavFor:".header__slider"})});