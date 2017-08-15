require('../css/main.scss')

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

var form = $('#contact-form')
var formMessages = $('#form-messages')
$(form).submit(function(event) {
  event.preventDefault()

  var formData = $(form).serialize()
  $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
  }).done(function(response) {
    $(form).animate({
      opacity: 0
    }, 500, function() {
      $(form).css('display', 'none')
      $(formMessages).removeClass('error')
      $(formMessages).addClass('success')
      $(formMessages).html('<p>Thanks for reaching out. We\'ll get back to you shortly!</p>')
      $(formMessages).animate({
        opacity: 1
      }, 500)
    })
  }).fail(function(data) {
    $(form).animate({
      opacity: 0
    }, 500, function() {
      $(form).css('display', 'none')
      $(formMessages).removeClass('success')
      $(formMessages).addClass('error')
      var errmsg = '<p>Uh oh..</p><p>'
      if (data.responseText !== '') {
        errmsg += 'errmsg = ' + data.responseText
      } else {
        errmsg += 'Something isn\'t working right..'
      }
      errmsg += '</p><p>Try just emailing us <a href="mailto:webandmobileclub@gmail.com?body=Also%2c%20I%20got%20this%20error%20message%3a%20%22'
      errmsg += encodeURI(data.responseText)
      errmsg += '%22" target="_blank">here</a></p>'
      $(formMessages).html(errmsg)
      $(formMessages).animate({
        opacity: 1
      }, 500)
    })
  })
})
