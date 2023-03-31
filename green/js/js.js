//<!--
$(document).ready(function () {
  /* -----------------------------------------------
                MOBILE NAVIGATION     
-------------------------------------------------- */

  $(".burger-icon").on("click", function () {
    if ($(".main-nav").hasClass("mobile-hide")) {
      $(".main-nav").removeClass("mobile-hide");
      $(".main-nav").addClass("mobile-show");
    } else {
      $(".main-nav").addClass("mobile-hide");
      $(".main-nav").removeClass("mobile-show");
    }
  });
});

const onMobileMenuClick = () => {
  let mobileMenu = document.querySelector(".main-nav");

  if (mobileMenu.classList.contains("mobile-hide")) {
    mobileMenu.classList.remove("mobile-hide");
    mobileMenu.classList.toggle("mobile-show");
  } else {
    mobileMenu.classList.toggle("mobile-hide");
    mobileMenu.classList.remove("mobile-show");
  }
};

var showed_box = 0;

function fNext() {
  showed_box += -500;

  if (showed_box < -2000) showed_box = 0;

  document.getElementById("sld").style.transform =
    "translateX(" + showed_box + "px)";
}

function fPrevious() {
  showed_box += 500;

  if (showed_box > 0) showed_box = -2000;

  document.getElementById("sld").style.transform =
    "translateX(" + showed_box + "px)";
}

//-->
