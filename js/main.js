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

    // see more/less
    $(document).ready(function () {
        function applyLimit() {
            let mainItems = $(".category-list > li").not(":has(.subcategory)");
            let toggleBtn = $("#toggleBtn");

            mainItems.show();

            let w = $(window).width();

            if (w >= 991 && w <= 1200) {
                mainItems.slice(5).hide();

            } else if (w > 1400) {
                mainItems.slice(9).hide();

            } else {
                mainItems.slice(7).hide();
            }

            toggleBtn.text("See More");
        }

        applyLimit();

        $(window).resize(function () {
            applyLimit();
        });

        $("#toggleBtn").click(function () {
            let mainItems = $(".category-list > li").not(":has(.subcategory)");

            if ($(this).text() === "See More") {
                mainItems.show();
                $(this).text("See Less");
            } else {
                applyLimit();
            }
        });

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

    //category_slider
$(".category_slider").owlCarousel({
    items: 8,          // desktop default
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,

    responsive: {
        0: {          // Mobile
            items: 2
        },
        400:{
            items:3
        },
        480:{
            items:3
        },
        576: {        // Tablet
            items: 5
        },
        992: {        // Desktop
            items: 6
        },
        1200:{
            items:8
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


})(jQuery);