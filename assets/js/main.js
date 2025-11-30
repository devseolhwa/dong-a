$(function(){
    
    // 메인비주얼 슬라이드
    let visualSwiper = new Swiper(".visualSwiper", {
        effect : "fade",
        centeredSlides: true,
        speed: 1000,
        loop: false,
        touchRatio: 0, //드래그 금지
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".visualControl .swiper-button-next",
            prevEl: ".visualControl .swiper-button-prev",
        },
        pagination: {
            el: ".visualControl .pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
    });
    $(".swiper-button-autoplay").click(function () {
        if ($(this).hasClass("on")) {
            visualSwiper.autoplay.start();
        } else {
            visualSwiper.autoplay.stop();
        }
        $(this).toggleClass("on");
    });

    // fullpage
    $("#fullpage").fullpage({
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        // fullpage 해제할 브라우저 너비와 높이
        responsiveWidth : 1399,
        responsiveHeight : 800,
        anchors : ["DONG-A", "SERVICE", "NEWS", "FOOTER"],
        sectionsColor : ["#000", "#FFF", "#FFF"],
        css3: true,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        scrollingSpeed: 800,
        //normalScrollElements: "#section2",
        scrollOverflow: true,
        navigation : true,
        navigationPosition : "right",
        navigationTooltips : ["DONG-A", "SERVICES", "NEWS", "FOOTER"],
        showActiveTooltip: true,
		slidesNavigation: false,
        slidesNavPosition: 'bottom',
        //loopBottom : true,
        afterLoad : function (anchorLink, index) {
            if($(".section").hasClass("on")){
                $(".section.active .aos-init").addClass("aos-animate");
            } else {
                $(".section .aos-init").removeClass("aos-animate");
            }
            $(".section.active .aos-init").addClass("aos-animate");
            if (index == 2 || index == 3 || index == 4) {
                $("#header").addClass("show");
                $("#btnTop").addClass("show");
            } else {
                $("#header").removeClass("show");
                $("#btnTop").removeClass("show");
            }
            if (index == 3 || index == 4) {
                $("#fp-nav").addClass("black");
                $("#section3").addClass("ani");
            } else {
                $("#fp-nav").removeClass("black");
                $("#section3").removeClass("ani");
            }
            if (index == 4) {
                $("#fp-nav").hide();
            } else {
                $("#fp-nav").show();
            }
        },
    });

    $("#btnTop").click(function() {
        $.fn.fullpage.moveTo("DONG-A");
    });
});