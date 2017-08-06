require('./main.scss')

var menu = document.getElementsByClassName('hamburger')[0]
var close = document.getElementsByClassName('hamburger__close')[0]
var mobileNav = document.getElementsByClassName('mobile-nav')[0]

menu.addEventListener('click', (e) => {
  e.preventDefault()
  menu.classList.add('hidden')
  mobileNav.classList.remove('hidden')
  TweenMax.staggerFrom('.mobile-nav__item', .5, {
    y: -15,
    opacity: 0,
  }, 0.06)
})

close.addEventListener('click', (e) => {
  e.preventDefault()
  menu.classList.remove('hidden')
  mobileNav.classList.add('hidden')
})
