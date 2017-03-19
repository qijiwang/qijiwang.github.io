window.onload = function () {
 
	    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: true,
        slidesPerView: 2,
        loop: true
    })

    var oDiv = document.getElementsByClassName('swiper-container')[0];
    oDiv.onmouseover = function () {
        mySwiper.stopAutoplay();

    }

     oDiv.onmouseout= function () {
        mySwiper.startAutoplay();

    }
}
	   