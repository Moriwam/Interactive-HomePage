const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 1,
  },
  960: {
    items: 1,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /** click event on toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  // owl-crousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: responsive,
  });
  const feedbackSize = {
    0: {
      items: 1,
    },
  };
  $(".student-feedBack").studentFeedBack({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: feedbackSize,
  });
  // click to scroll top
  $(".move-up span").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // AOS Instance
  AOS.init();
});
