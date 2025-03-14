// function assignData(tnail, tt, ch, vs, o, dur) {
//   thumbnail.setAttribute('src', tnail)
//   title.textContent = tt
//   channel.textContent = ch
//   views.textContent = vs
//   old.textContent = o
//   duration.textContent = dur
// }
// var thumbnail = document.querySelector('img')
// var title = document.querySelector('h1')
// var channel =
//   document.querySelector('.more-details').firstElementChild.firstElementChild
// var views =
//   document.querySelector('.more-details').firstElementChild.firstElementChild
//     .nextElementSibling
// var old =
//   document.querySelector('.more-details').firstElementChild.lastElementChild
// var duration = document.querySelector('span')
// console.log(duration)

// assignData(
//   'thumbnail.jpg',
//   'Installing VS Code and How Websites Work',
//   'CodeWithHarry',
//   '500K',
//   '6 months ago',
//   '23:18'
// )

function assignData(tnail, title, channel, views, old, duration) {
  let html = `<div class="card">
      
        <div class="thumbnail">
          <img src="${tnail}" alt="" /><span>${duration}</span>
        </div>

        <div class="details">
          <h1>${title}</h1>
          <div class="more-details">
            <ul>
              <li>${channel}</li>
              <li>${views}</li>
              <li>${old}</li>
            </ul>
          </div>
        </div>
      </div>`
  // document.querySelector('.container').innerHTML = html
  document.querySelector('.container').innerHTML =
    document.querySelector('.container').innerHTML + html
}
assignData(
  'thumbnail.jpg',
  'Installing VS Code and How Websites Work',
  'CodeWithHarry',
  '500K',
  '6 months ago',
  '23:18'
)
assignData(
  'thumbnail.jpg',
  'Installing VS Code and How Websites Work',
  'CodeWithHarry',
  '500K',
  '6 months ago',
  '23:18'
)
assignData(
  'thumbnail.jpg',
  'Installing VS Code and How Websites Work',
  'CodeWithHarry',
  '500K',
  '6 months ago',
  '23:18'
)
