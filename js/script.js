let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;
const visibleCount = 2;
const maxIndex = totalSlides - visibleCount;
function showSlide(index) {
  document.querySelector('.slides').style.transform = 'translateX(' + (-index * 50) + '%)';
}
function nextSlide() {
  currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1) < 0 ? maxIndex : currentIndex - 1;
  showSlide(currentIndex);
}
setInterval(nextSlide, 3000);
window.onscroll = function() {
  document.getElementById("topBtn").style.display =
    (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
