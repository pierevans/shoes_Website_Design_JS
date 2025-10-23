// *Main page
let miniImages = document.querySelectorAll(".mini-about-image img");

miniImages.forEach((miniImage) => {
  miniImage.addEventListener("mouseover", () => {
    let img = document.querySelector(".image");
    img.style.width = "100%";
    img.style.height = "100%";
    img.src = miniImage.src;
  });
});
let mainImg = document.querySelector(".image");
mainImg.src = miniImages[0].src;
mainImg.style.width = "100%";
mainImg.style.height = "100%";