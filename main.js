$(document).ready(function () {
    //faccio partire lo scorrimento al caricamento della pagina
    //e mi assicuro di non poter cliccare su start
    var x = setInterval(scorriAvanti, 3000);
    $(".start").hide();

    $(".start").click(function () {
        x = setInterval(scorriAvanti, 3000);
        $(this).hide();
        $(".stop").show();
    });

    $(".stop").click(function () {
        clearInterval(x);
        $(".stop").hide();
        $(".start").show();
    });

    $(".next").on("click", function () {
        clearInterval(x);
        $(".stop").hide();
        $(".start").show();
        scorriAvanti();
    });

    $(".prev").on("click", function () {
        clearInterval(x);
        $(".stop").hide();
        $(".start").show();
        scorriIndietro();
    });

    //CLICK SUI PALLINI
    $(".slider-inner .rettangolo").on("click", function () {
        clearInterval(x);
        $(".stop").hide();
        $(".start").show();
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

    //DEFINIZIONE FUNZIONI
    function scorriAvanti() {
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
    }

    function scorriIndietro() {
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
    }
});
