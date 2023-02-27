document.querySelector(".js-header-date").innerHTML = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date);

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function () {
    var preloaderFadeOutTime = 500;
    var spinnerWrapper = $('.spinner-wrapper');

    // Fade out the spinner after 5 seconds
    setTimeout(function () {
        spinnerWrapper.fadeOut(preloaderFadeOutTime);
    }, 5000);
};

$(window).on('load', function () {
    //Preloader
    var preloaderFadeOutTime = 500;
    var spinnerWrapper = $('.spinner-wrapper');

    // Fade out the spinner after 5 seconds
    setTimeout(function () {
        spinnerWrapper.fadeOut(preloaderFadeOutTime);
    }, 5000);
});
