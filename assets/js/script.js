
var $loader = document.querySelector('.loader')

window.onload = function() {
  $loader.classList.remove('loader--active')
};

// document.querySelector('.btn').addEventListener('click', function () {
//   $loader.classList.add('loader--active')
  
//   window.setTimeout(function () {
//     $loader.classList.remove('loader--active')
//   }, 5000)
// })