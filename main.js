$(document).ready(function () {
    $(".next").on("click", function () {
        clearInterval(clock);
        //IMMAGINI
        var immagineCorrente = $(".active");
        // immagineCorrente.fadeOut(2000);
        immagineCorrente.removeClass("active");
        var immagineSuccessiva = immagineCorrente.next("img");
        //PALLINI
        var pallinoCorrente = $(".rettangolo.fill");
        pallinoCorrente.removeClass("fill");
        var pallinoSuccessivo = pallinoCorrente.next();

        if (immagineSuccessiva.length) {
            immagineSuccessiva.addClass("active");
            // immagineSuccessiva.fadeIn(2000);
            pallinoSuccessivo.addClass("fill");
        } else {
            immagineSuccessiva = $(".slider-inner img:first-of-type");
            immagineSuccessiva.addClass("active");
            pallinoSuccessivo = $(".slider-inner .rettangolo:first-child");
            pallinoSuccessivo.addClass("fill");
        }
    });

    $(".prev").on("click", function () {
        clearInterval(clock);
        //IMMAGINI
        var immagineCorrente = $(".active");
        immagineCorrente.removeClass("active");
        var immaginePrecedente = immagineCorrente.prev("img");
        //PALLINI
        var pallinoCorrente = $(".rettangolo.fill");
        pallinoCorrente.removeClass("fill");
        var pallinoPrecedente = pallinoCorrente.prev();
        if (immaginePrecedente.length) {
            immaginePrecedente.addClass("active");
            pallinoPrecedente.addClass("fill");
        } else {
            immaginePrecedente = $(".slider-inner img:last-of-type");
            immaginePrecedente.addClass("active");
            pallinoPrecedente = $(".slider-inner .rettangolo:last-child");
            pallinoPrecedente.addClass("fill");
        }
    });

    //CLICK SUI PALLINI
    $(".slider-inner .rettangolo").on("click", function () {
        clearInterval(clock);
        //PALLINI
        $(".fill").removeClass("fill");
        var indicePallino = $(this).index() + 1;
        $(`.rettangolo:nth-child(${indicePallino})`).addClass("fill");
        //IMMAGINI
        var immagineCorrente = $(".slider-inner img.active");
        immagineCorrente.removeClass("active");
        var immagineVoluta = $(`.slider-inner img:nth-child(${indicePallino})`);
        immagineVoluta.addClass("active");
    });

    // SCORRI LE IMMAGINI
    var clock = setInterval(function () {
        //IMMAGINI
        var immagineCorrente = $(".active");
        immagineCorrente.removeClass("active");
        var immagineSuccessiva = immagineCorrente.next("img");
        //PALLINI
        var pallinoCorrente = $(".rettangolo.fill");
        pallinoCorrente.removeClass("fill");
        var pallinoSuccessivo = pallinoCorrente.next();

        if (immagineSuccessiva.length) {
            immagineSuccessiva.addClass("active");
            pallinoSuccessivo.addClass("fill");
        } else {
            immagineSuccessiva = $(".slider-inner img:first-of-type");
            immagineSuccessiva.addClass("active");
            pallinoSuccessivo = $(".slider-inner .rettangolo:first-child");
            pallinoSuccessivo.addClass("fill");
        }
    }, 3000);

    //BOTTONI START E STOP
    $(".stop").click(function () {
        clearInterval(clock);
    });

    $(".start").click(function () {
        clock = setInterval(function () {
            //IMMAGINI
            var immagineCorrente = $(".active");
            immagineCorrente.removeClass("active");
            var immagineSuccessiva = immagineCorrente.next("img");
            //PALLINI
            var pallinoCorrente = $(".rettangolo.fill");
            pallinoCorrente.removeClass("fill");
            var pallinoSuccessivo = pallinoCorrente.next();

            if (immagineSuccessiva.length) {
                immagineSuccessiva.addClass("active");
                pallinoSuccessivo.addClass("fill");
            } else {
                immagineSuccessiva = $(".slider-inner img:first-of-type");
                immagineSuccessiva.addClass("active");
                pallinoSuccessivo = $(".slider-inner .rettangolo:first-child");
                pallinoSuccessivo.addClass("fill");
            }
        }, 3000);
    });
});
