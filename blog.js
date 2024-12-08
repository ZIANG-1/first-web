// 页面加载时，执行淡入动画
window.addEventListener("load", function () {
  const images = document.querySelectorAll(".blog-img");
  images.forEach((image) => {
    image.style.opacity = 1;
  });
});
