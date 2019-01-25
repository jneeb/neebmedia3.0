$(document).ready(function () {
    $(".webDevFade").click(function () {
        if ($(".webDevFade").hasClass("active")) {

        } else {
            $(".webDevFade").addClass("active");
            $(".desktopWebDev").addClass("show");
            $(".eComFade").removeClass("active");
            $(".seoFade").removeClass("active");
            $(".desktopEcom").removeClass("show");
            $(".desktopSEO").removeClass("show");
        }
    });
    $(".eComFade").click(function () {
        if ($(".eComFade").hasClass("active")) {

        } else {
            $(".eComFade").addClass("active");
            $(".desktopEcom").addClass("show");
            $(".webDevFade").removeClass("active");
            $(".seoFade").removeClass("active");
            $(".desktopWebDev").removeClass("show");
            $(".desktopSEO").removeClass("show");
        }
    });
    $(".seoFade").click(function () {
        if ($(".seoFade").hasClass("active")) {

        } else {
            $(".seoFade").addClass("active");
            $(".desktopSEO").addClass("show");
            $(".eComFade").removeClass("active");
            $(".webDevFade").removeClass("active");
            $(".desktopWebDev").removeClass("show");
            $(".desktopEcom").removeClass("show");
        }
    });
});
