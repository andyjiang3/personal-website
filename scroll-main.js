$(function() {

    var controller = new ScrollMagic.Controller;
    //Scene: where the controller should react and how

    /*
    var wipeAnimation = new TimelineMax()
        .fromTo("#intropage-under", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone });
    */


    var navTween = new TweenMax.to("nav", 0.1, {
        position: 'fixed'
    });

    var navScene = new ScrollMagic.Scene({

            triggerElement: "#about",
            triggerHook: .99
                // start scene after scrolling for 0px
                // pin the element for 400px of scrolling


        })
        .setTween(navTween)
        .addIndicators({ name: "nav" })
        .addTo(controller);

    var mouseTween = new TweenMax.to(".mouse", 1.0, {
        opacity: '0'
    });

    var mouseScene = new ScrollMagic.Scene({
            triggerElement: "#intropage",
            triggerHook: 0
        })
        .setTween(mouseTween)
        .addIndicators({ name: "mouse" })
        .addTo(controller);

});