const bulanparallax = document.querySelectorAll(".parallax-bulan");

let xValue = 0,
  yValue = 0;

// window.addEventListener("mousemove", (e) => {
//   xValue = e.clientX - window.innerWidth / 2;
//   yValue = e.clientY - window.innerHeight / 2;
//   bulanparallax.forEach((el) => {
//     let speedx = el.dataset.speedx;
//     let speedy = el.dataset.speedy;

//     el.style.transform = `scale(0.7) translateX(calc(40% + ${
//       xValue * speedx
//     }px)) translateY(calc(0% +${yValue * speedy}px))`;
//   });
// });

window.addEventListener("scroll", () => {
  let langit = document.querySelector("#langit");
  let bulan = document.querySelector("#bulan");
  let tanah = document.querySelector("#tanah");

  let value = window.scrollY;
  langit.style.transform = `scale(${value * 0.0005 + 1})`;
  tanah.style.transform = `scale(${
    value * 0.0005 + 1
  }) translateY(60%) translateX(calc(2% * ${value}px))`;
  bulan.style.left = value * -0.3 + "px";
});
