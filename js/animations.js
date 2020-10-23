if ($("#mobile-indicator").css("display") == "none") {

  var is_mobile = true;

} else {

  var is_mobile = true;

}



function animateAll() {

  if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

    $("body").addClass("animated");

    var controller = new ScrollMagic.Controller();

    // Top circles

    var circle1Tween = TweenMax.to($(".section-top-col-l .top-circle"), 2, {
      opacity: 1,
      x: 0,
      scale: 1,
      ease: Power2.easeInOut,
      overwrite: "none",
      delay: 1
    });

    var circle1Scene = new ScrollMagic.Scene({
      triggerElement: ".section-top",
      offset: 0,
      reverse:false
    })
      .setTween(circle1Tween)
      .addTo(controller);

    var circle2Tween = TweenMax.to($(".section-top-col-r .top-circle"), 2, {
      opacity: 1,
      x: 0,
      scale: 1,
      ease: Power2.easeInOut,
      overwrite: "none",
      delay: 1
    });

    var circle2Scene = new ScrollMagic.Scene({
      triggerElement: ".section-top",
      offset: 0,
      reverse:false
    })
      .setTween(circle2Tween)
      .addTo(controller);



    // Top circles END

    // Top pic

    var topPicTween = TweenMax.to($(".section-top-pic"), 3, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var topPicScene = new ScrollMagic.Scene({
      triggerElement: ".section-top",
      offset: 0,
      reverse:false
    })
      .setTween(topPicTween)
      .addTo(controller);

    // Top pic END

    // Top text

    var topTextTween = TweenMax.to($(".section-top-text"), 2, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none",
      delay: 1
    });

    var topTextScene = new ScrollMagic.Scene({
      triggerElement: ".section-top",
      offset: 0,
      reverse:false
    })
      .setTween(topTextTween)
      .addTo(controller);

    // Top text END

    // Top arrow

    var topArrowTween = TweenMax.to($(".section-top-arrow"), 1, {
      marginBottom: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none",
      delay: 3
    });

    var topArrowScene = new ScrollMagic.Scene({
      triggerElement: ".section-top",
      offset: 0,
      reverse:false
    })
      .setTween(topArrowTween)
      .addTo(controller);

    // Top arrow END

    // Headers

    $(".section-header").each(function (index, element) {

      var sectionHeader = $(this);

      var sectionHeaderTween = TweenMax.to(sectionHeader, 1, {
        scale: 1,
        opacity: 1,
        ease: Power2.easeInOut,
        overwrite: "none"
      });

      var sectionHeaderScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -300,
        reverse:false
      })
        .setTween(sectionHeaderTween)
        .addTo(controller);

    });

    // Headers END

    // Show tmb

    $(".slide:nth-child(1) .show-tmb, .slide:nth-child(2) .show-tmb, .slide:nth-child(3) .show-tmb").each(function (index, element) {

      var showTmb = $(this);

      var showTmbTween1 = TweenMax.to(showTmb, .7, {
        scale: 1.1,
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
        overwrite: "none",
        delay: $(element).closest(".slide").prevAll().length
      });

      var showTmbScene1 = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -300,
        reverse:false
      })
        .setTween(showTmbTween1)
        .addTo(controller);

      var showTmbTween2 = TweenMax.to(showTmb, .2, {
        scale: 1,
        ease: Power2.easeInOut,
        overwrite: "none",
        delay: .7 + $(element).closest(".slide").prevAll().length
      });

      var showTmbScene2 = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -300,
        reverse:false
      })
        .setTween(showTmbTween2)
        .addTo(controller);

    });

    // Show tmb END

    // Action tmb

    $(".slide:nth-child(1) .action-tmb, .slide:nth-child(2) .action-tmb, .slide:nth-child(3) .action-tmb").each(function (index, element) {

      var actionTmb = $(this);

      var actionTmbTween1 = TweenMax.to(actionTmb, .7, {
        scale: 1.1,
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
        overwrite: "none",
        delay: $(element).closest(".slide").prevAll().length
      });

      var actionTmbScene1 = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -300,
        reverse:false
      })
        .setTween(actionTmbTween1)
        .addTo(controller);

      var actionTmbTween2 = TweenMax.to(actionTmb, .2, {
        scale: 1,
        ease: Power2.easeInOut,
        overwrite: "none",
        delay: .7 + $(element).closest(".slide").prevAll().length
      });

      var actionTmbScene2 = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -300,
        reverse:false
      })
        .setTween(actionTmbTween2)
        .addTo(controller);

    });

    // Action tmb END

    // Girl tmb

    $(".girl-tmb").each(function (index, element) {

      var girlTmb = $(this);

      var girlTmbTween1 = TweenMax.to(girlTmb, 1, {
        opacity: 1,
        ease: Power2.easeInOut,
        overwrite: "none",
        delay: $(element).closest(".col").prevAll().length * .5
      });

      var girlTmbScene1 = new ScrollMagic.Scene({
        triggerElement: element.closest(".girls-gallery"),
        offset: -300,
        reverse:false
      })
        .setTween(girlTmbTween1)
        .addTo(controller);

    });

    // Girl tmb END

    // Menu

    var menu1Tween = TweenMax.to($(".menu-col-l"), 2, {
      opacity: 1,
      x: 0,
      scale: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var menu1Scene = new ScrollMagic.Scene({
      triggerElement: ".section-menu",
      offset: 0,
      reverse:false
    })
      .setTween(menu1Tween)
      .addTo(controller);

    var menu2Tween = TweenMax.to($(".menu-col-r"), 2, {
      opacity: 1,
      x: 0,
      scale: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var menu2Scene = new ScrollMagic.Scene({
      triggerElement: ".section-menu",
      offset: 0,
      reverse:false
    })
      .setTween(menu2Tween)
      .addTo(controller);



    var menuPicTween = TweenMax.to($(".menu-pic"), 3, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeInOut,
      overwrite: "none"
    });

    var menuPicScene = new ScrollMagic.Scene({
      triggerElement: ".section-menu",
      offset: 0,
      reverse:false
    })
      .setTween(menuPicTween)
      .addTo(controller);

    // Menu END

  } else if ($("#mobile-indicator").css("display") == "block") {

    $("body").removeClass("animated");

    //controller = controller.enabled(false);
    //controller = controller.destroy(true);

  }

}

$(window).on("resize", function () {

  animateAll();

});

$(document).ready(function () {

  animateAll();

});


$(window).on("resize scroll load", function () {







});

(function( $ ) {
  $.fn.prlx = function(pTrigger, yStart, yFinish, fromTop) {

    if (!is_mobile && $(this).length) {

      var obj = $(this);

      var yPos;

      if (fromTop == false && $(window).scrollTop() < pTrigger.offset().top - $(window).height()) {

        yPos = yStart;

      } else if (fromTop == false && $(window).scrollTop() > pTrigger.offset().top + $(window).height()) {

        yPos = yFinish;


      } else {

        if (fromTop) {

          if (pTrigger.offset().top <= $(window).scrollTop()) {

            var percentOffset = (pTrigger.offset().top - $(window).scrollTop()) / ($(window).height() * 2);

          } else {

            percentOffset = 0;

          }

        } else {

          var percentOffset = (pTrigger.offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height() * 2);

        }

        var yRange = yStart - yFinish,
          posInRange = yRange * percentOffset,
          yPos = posInRange + yFinish;

        obj.attr("percentOffset", percentOffset);

      }

      TweenMax.to(obj, .5, {y: yPos, ease:Linear.ease});

    }

  };
})( jQuery );
