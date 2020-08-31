// const element = document.getElementById("menuMobile");
// const dropDown = () => {
//   if () {
//     element.classList.remove("d-inline");
//     element.classList.add("d-none");
//   } else {
//     element.classList.remove("d-none");
//     element.classList.add("d-inline");
//   }
// };

let box_animations = document.getElementById("box-4");

$(window).scroll(function () {
  if ($(this).scrollTop() >= 1379) {
    if (box_animations.classList.contains("opacity-0")) {
      box_animations.classList.remove("opacity-0");
    }
    $("#box-4").addClass(" animate__animated animate__backInUp");
  }
});
