var toggleShow = document.querySelector('.toggle-show')
var toggleBtn = document.getElementById('menu')

toggleBtn.addEventListener('click', function() {
  toggleShow.style.display = 'block'
  //in the middle of work
})

//for scroll effect - problem text does not work
var waypoint = new Waypoint({
  element: document.getElementsByClassName('js-about-text')[0],
  handler: function(direction) {
    this.element.className += ' animated fadeInRight'
  },


  element: document.getElementsByClassName('js-about-me')[0],
  handle: function(direction) {
    this.element.className += ' animated fadeInLeft'
    console.log(this.element)
  },
   offset: '50%'
})


// var waypoint = new Waypoint({
//   element: document.getElementById('px-offset-waypoint'),
//   handler: function(direction) {
//     notify('I am 20px from the top of the window')
//   },
//   offset: 20
// })
