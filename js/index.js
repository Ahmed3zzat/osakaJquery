// change navBar color
/*
    - scroll
    - where iam in website to scroll
    - scroll value
    - first section
*/

// window.addEventListener("scroll",  ()=>{
//     console.log("hello")
// })

// $(window).scroll(() => {
//     console.log(5436)
// });

$(window).scroll(() => {
  if ($(window).scrollTop() >= $("#portfolio").offset().top) {
    $("nav").removeClass("bg-black");
    $("nav").addClass("bg-white");
  } else {
    $("nav").addClass("bg-black");
    $("nav").removeClass("bg-white");
  }
});
// console.log($("#portfolio").offset())
//------------------------------------------------------------

/*
    - smooth scrolling
    - animate(css property, scrollTop, scrollLeft)
    - anchor start with # ==>  
*/

// $("a[href = '#services']").click(() => {
//   $("html").animate({ scrollTop: $("#testimonial").offset().top }, 1000);
//   $("a[href = '#services']").addClass("active");
//   $("a").not("a[href = '#services']").removeClass("active");
// });

$("a[href ^= '#']").click((e) => {
  //    console.log($($(e.target).attr("href")).offset().top )
  $("html").animate(
    { scrollTop: $($(e.target).attr("href")).offset().top },
    1000
  );
  $(e.target).addClass("active");
  $("nav a[href ^= '#']").not(e.target).removeClass("active");
});

$(window).scroll(() => {
  if ($(window).scrollTop() >= $("#portfolio").offset().top) {
    $(".arrow-up").fadeIn(500);
  } else {
    $(".arrow-up").fadeOut(500);
  }
});

$(".arrow-up").click(() => {
  $("html").animate({ scrollTop: $("#home").offset().top }, 500);
});

// loading ===> fadeIN fetch json display fadeOut
$(window).ready(() => {
  $("#loading").fadeOut(1000, () => {
    $("body").css({ overflow: "visible" });
  });
});

let asideBarColor = $("aside .inner span");

asideBarColor.first().css("background-color", "lightseagreen");
asideBarColor.eq(1).css("background-color", "lightsalmon");
asideBarColor.eq(2).css("background-color", "lightgreen");
asideBarColor.eq(3).css("background-color", "darkmagenta");
asideBarColor.last().css("background-color", "lightcoral");

asideBarColor.click((e) => {
  let color = $(e.target).css("background-color");
  $("html").css("--main-color", color);
});

let iconLeft = $("aside .myIcon");
let iconLeftPixel = $("aside .myIcon").offset().left;
$("aside").css("left", -iconLeftPixel);
iconLeft.click(() => {
  if ($("aside").css("left") == "0px") {
    $("aside").animate({ left: -iconLeftPixel }, 500);
  } else {
    $("aside").animate({ left: 0 }, 500);
  }
});

// 
