let Muno = document.querySelector(".Muno");
let link = document.querySelector(".link");
let ovlqu = document.querySelector(".ovlqu");
Muno.addEventListener("click", () => {
  link.classList.toggle("link-active");
  if (link.classList.contains("link-active")) {
    Muno.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    Muno.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
  ovlqu.classList.toggle("ovlqu-active");
});
ovlqu.addEventListener("click", () => {
  if (link.classList.contains("link-active")) {
    link.classList.remove("link-active");
    ovlqu.classList.remove("ovlqu-active");
    Muno.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});
