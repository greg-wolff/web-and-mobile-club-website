require('./main.scss')

var menu = document.getElementsByClassName('hamburger')[0]
var close = document.getElementsByClassName('hamburger__close')[0]
var mobileNav = document.getElementsByClassName('mobile-nav')[0]
const hideNav = window.matchMedia('(min-width: 900px)')
document.getElementsByClassName('year')[0].innerHTML = new Date().getFullYear()

menu.addEventListener('click', (e) => {
  e.preventDefault()
  menu.classList.add('hidden')
  mobileNav.classList.remove('hidden')
  TweenMax.staggerFrom('.mobile-nav__item', 0.5, {
    y: -15,
    opacity: 0
  }, 0.06)
})

close.addEventListener('click', (e) => {
  e.preventDefault()
  menu.classList.remove('hidden')
  mobileNav.classList.add('hidden')
})

hideNav.addListener((mq) =>
  mq.matches ? mobileNav.classList.add('hidden') : menu.classList.remove('hidden'))

TweenMax.staggerTo('.fade-in', 0.5, {
  opacity: 1
}, 0.1)
