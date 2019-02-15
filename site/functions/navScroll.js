$(document).ready(function () {
    window.onscroll = function () {
        if (window.pageYOffset >= 100) {
            $("#desktopHeader").addClass("onScroll");
        } else {
            $("#desktopHeader").removeClass("onScroll");
        }
    }
});
