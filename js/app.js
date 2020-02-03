$(function() {
  //filter
  let filter = $("[data-filter]");
  const worksSlider = $('[data-slider="slick"]');

  filter.on("click", function(e) {
    e.preventDefault();

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function() {
        let workCat = $(this).data("cat");
        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  //call modal windows

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(e) {
    e.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function() {
      $(modalId)
        .find(".modal__dialog")
        .css({ transform: "rotateX(0)" });
    }, 200);
    worksSlider.slick("setPosition");
  });

  modalClose.on("click", function(e) {
    e.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({ transform: "rotateX(90deg)" });

    setTimeout(function() {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal").on("click", function() {
    let $this = $(this);
    $this.find(".modal__dialog").css({ transform: "rotateX(90deg)" });
    setTimeout(function() {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal__dialog").on("click", function(e) {
    e.stopPropagation();
  });

  // Slider https://github.com/kenwheeler/slick/

  worksSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    fade: true
  });

  $(".slickPrev").on("click", function(e) {
    e.preventDefault();
    let currentSlider = $(this)
      .parents(".modal")
      .find('[data-slider="slick"]');
    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click", function(e) {
    e.preventDefault();
    let currentSlider = $(this)
      .parents(".modal")
      .find('[data-slider="slick"]');

    currentSlider.slick("slickNext");
  });

  //burger
  const navToggle = $("#navToggle");
  const nav = $("#nav");
  navToggle.on("click", function(e) {
    e.preventDefault();
    nav.toggleClass("show");
  });
});
