
btnClose.onclick = function () {
   menu.classList.remove('active')
}

btnOpen.onclick = function () {
   menu.classList.add('active')
}

menu.addEventListener('click', function (event) {
   if (event.target.matches('.navbar__link')) {
     menu.classList.remove('active')
   }
})

btnLeft.onclick = function () {
   slide.classList.remove('move'),
   bubble1.classList.remove('move'),
   bubble2.classList.remove('move')
}

btnRight.onclick = function () {
   slide.classList.add('move'),
   bubble1.classList.add('move'),
   bubble2.classList.add('move')
}