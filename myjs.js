/*const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-list");
    const navList = document.querySelectorAll(".nav-list li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        //animate links
        navList.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
            }
        });

        //burger animation
        burger.classList.toggle("toggle");
    });
};

navSlide();*/

(function($) {
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return compareBottom <= viewBottom && compareTop >= viewTop;
    };
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function(event) {
    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });
});

function logoScroll() {
    jQuery(function($) {
        var $nav = $(".logoHide");
        var $navShow = $(".logoShow");
        var $win = $(window);
        var winH = $win.height(); // Get the window height.

        $win
            .on("scroll", function() {
                if ($(this).scrollTop() < winH) {
                    $nav.addClass("logoHide");
                    $nav.removeClass("logo");
                } else {
                    $nav.removeClass("logoHide");
                    $nav.addClass("logo");
                }
            })
            .on("resize", function() {
                // If the user resizes the window
                winH = $(this).height(); // you'll need the new height value
            });
    });
}

logoScroll();