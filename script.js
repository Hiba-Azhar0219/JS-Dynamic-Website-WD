function assignData(tnail, tt, ch, vs, o, dur) {
  thumbnail.setAttribute('src', tnail)
  title.textContent = tt
  channel.textContent = ch
  views.textContent = vs
  old.textContent = o
  duration.textContent = dur
}
var thumbnail = document.querySelector('img')
var title = document.querySelector('h1')
var channel =
  document.querySelector('.more-details').firstElementChild.firstElementChild
var views =
  document.querySelector('.more-details').firstElementChild.firstElementChild
    .nextElementSibling
var old =
  document.querySelector('.more-details').firstElementChild.lastElementChild
var duration = document.querySelector('span')
console.log(duration)

assignData(
  'thumbnail.jpg',
  'Installing VS Code and How Websites Work',
  'CodeWithHarry',
  '500K',
  '6 months ago',
  '23:18'
)
