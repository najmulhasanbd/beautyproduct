(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });

    //slider
    $(".banner_slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000
    });

    // benifit carusal
    $(document).ready(function () {

        function benifitCarousel() {
            if ($(window).width() <= 768) {
                if (!$('.benifit_grid').hasClass('owl-loaded')) {
                    $('.benifit_grid').owlCarousel({
                        items: 2,
                        margin: 15,
                        loop: true,
                        autoplay: true,
                        autoplayTimeout: 3000,
                        dots: false,
                        nav: false,
                        responsive: {
                            0: {
                                items: 2
                            },
                            768: {
                                items: 3
                            },
                        }
                    });
                }
            } else {
                if ($('.benifit_grid').hasClass('owl-loaded')) {
                    $('.benifit_grid').trigger('destroy.owl.carousel');
                    $('.benifit_grid').removeClass('owl-carousel owl-loaded');
                    $('.benifit_grid').find('.owl-stage-outer').children().unwrap();
                }
            }
        }

        benifitCarousel();
        $(window).resize(benifitCarousel);

    });

    //category_slider
    $(".category_slider").owlCarousel({
        items: 8,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,

        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            480: {
                items: 3
            },
            576: {
                items: 5
            },
            992: {
                items: 6
            },
            1200: {
                items: 8
            }
        }
    });
    //category_slider
    $(".campaign_slider").owlCarousel({
        items: 4,
        loop: true,
        margin: 13,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,

        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 2
            },
            480: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    //product increment decrement
    $(document).ready(function () {
        const minus = $('.quantity__minus');
        const plus = $('.quantity__plus');
        const input = $('.quantity__input');
        minus.click(function (e) {
            e.preventDefault();
            var value = input.val();
            if (value > 1) {
                value--;
            }
            input.val(value);
        });

        plus.click(function (e) {
            e.preventDefault();
            var value = input.val();
            value++;
            input.val(value);
        })
    });

    // Countdown timer
    function updateCountdown() {
        const countdownItems = document.querySelectorAll(".countdown-item");
        if (countdownItems.length > 0) {
            let days = parseInt(
                countdownItems[0].querySelector(".countdown-value").textContent
            );
            let hours = parseInt(
                countdownItems[1].querySelector(".countdown-value").textContent
            );
            let minutes = parseInt(
                countdownItems[2].querySelector(".countdown-value").textContent
            );
            let seconds = parseInt(
                countdownItems[3].querySelector(".countdown-value").textContent
            );

            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                    if (hours < 0) {
                        hours = 23;
                        days--;
                        if (days < 0) {
                            days = 0;
                            hours = 0;
                            minutes = 0;
                            seconds = 0;
                        }
                    }
                }
            }

            countdownItems[0].querySelector(".countdown-value").textContent =
                String(days).padStart(2, "0");
            countdownItems[1].querySelector(".countdown-value").textContent =
                String(hours).padStart(2, "0");
            countdownItems[2].querySelector(".countdown-value").textContent =
                String(minutes).padStart(2, "0");
            countdownItems[3].querySelector(".countdown-value").textContent =
                String(seconds).padStart(2, "0");
        }
    }

    setInterval(updateCountdown, 1000);

    // shop by product
    document.addEventListener('DOMContentLoaded', function () {
        const hotspots = document.querySelectorAll('.look-hotspot');
        const productItems = document.querySelectorAll('.shopSingleProduct');

        hotspots.forEach(hotspot => {
            hotspot.addEventListener('mouseenter', function () {
                const targetId = this.getAttribute('data-target-product');
                const targetProduct = document.getElementById(targetId);

                if (targetProduct) {
                    document.querySelectorAll('.shopSingleProduct.active-highlight').forEach(el => {
                        el.classList.remove('active-highlight');
                    });
                    targetProduct.classList.add('active-highlight');
                }
            });

            hotspot.addEventListener('mouseleave', function () {
                const targetId = this.getAttribute('data-target-product');
                const targetProduct = document.getElementById(targetId);
                if (targetProduct) {
                    targetProduct.classList.remove('active-highlight');
                }
            });
        });


        productItems.forEach(item => {
            item.addEventListener('mouseenter', function () {
                const productId = this.id;

                const matchingHotspot = document.querySelector(`.look-hotspot[data-target-product="${productId}"]`);

                if (matchingHotspot) {
                    document.querySelectorAll('.look-hotspot.is-active').forEach(el => {
                        el.classList.remove('is-active');
                    });

                    matchingHotspot.classList.add('is-active');
                }
            });

            item.addEventListener('mouseleave', function () {
                const productId = this.id;
                const matchingHotspot = document.querySelector(`.look-hotspot[data-target-product="${productId}"]`);

                if (matchingHotspot) {
                    matchingHotspot.classList.remove('is-active');
                }
            });
        });
    });

    // scroll to
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            if (mobileSidebar && mobileSidebar.classList.contains("active")) {
                mobileSidebar.classList.remove("active");
                document.body.style.overflow = "";
            }
            if (
                mobileSearchBar &&
                mobileSearchBar.classList.contains("active")
            ) {
                mobileSearchBar.classList.remove("active");
            }
        }
    });


    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300,
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="fa-solid fa-arrow-turn-up"></i>',
        activeOverlay: false,
    });

    // sidebar social
    const toggleBtn = document.getElementById('toggleBtn');
    const socialIcons = document.getElementById('socialIcons');
    let isHidden = false;

    toggleBtn.addEventListener('click', () => {
        isHidden = !isHidden;

        if (isHidden) {
            socialIcons.classList.add('hide');
            toggleBtn.innerHTML = '<img src="images/contact.jpeg" alt="">';
        } else {
            socialIcons.classList.remove('hide');
            toggleBtn.innerHTML = '<img src="images/contact.jpeg" alt="">';
        }
    });


})(jQuery);