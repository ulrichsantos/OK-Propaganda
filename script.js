// ----------  NAV-EXPANDED ---------- //

const itens = document.getElementById('itens')

let isExpanded = false

function clickMenu() {
  if (!isExpanded) {
    itens.className = 'expanded'
    isExpanded = true
  } else {
    itens.className = 'menu-nav'
    isExpanded = false
  }
}

// ----------  NAV-SCROLL ---------- //

var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0'
  } else {
    document.getElementById('navbar').style.top = '-90px'
  }
  prevScrollpos = currentScrollPos
}

// ----------  PRODUCTS ---------- //

let slideIndexHeader = 0
let sliderHeader = document.querySelector('.slider-header')
let slidesHeader = document.querySelector('.slides-header')
let slideHeader = document.querySelectorAll('.slide-header')
let dotsHeader = document.querySelectorAll('.dots span')

showSlideHeader()

function plusSlideHeader(position) {
  slideIndexHeader += position

  if (slideIndexHeader > slideHeader.length) {
    slideIndexHeader = 1
  } else if (slideIndexHeader < 1) {
    slideIndexHeader = slideHeader.length
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dotsHeader.length; i++) {
    const element = dotsHeader[i]
    element.classList.remove('dot-active')
  }

  slidesHeader.style.left = `-${slideIndexHeader - 1}00%`
  dotsHeader[slideIndexHeader - 1].classList.add('dot-active')
}

function currentSlideHeader(index) {
  if (index > slideHeader.length) {
    index = 1
  } else if (index < 1) {
    index = slideHeader.length
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dotsHeader.length; i++) {
    const element = dotsHeader[i]
    element.classList.remove('dot-active')
  }

  slidesHeader.style.left = `-${index - 1}00%`
  dotsHeader[index - 1].classList.add('dot-active')

  slideIndexHeader = index
}

function showSlideHeader() {
  slideIndexHeader++

  if (slideIndexHeader > slideHeader.length) {
    slideIndexHeader = 1
  } else if (slideIndexHeader < 1) {
    slideIndexHeader = slideHeader.length
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dotsHeader.length; i++) {
    const element = dotsHeader[i]
    element.classList.remove('dot-active')
  }

  slidesHeader.style.left = `-${slideIndexHeader - 1}00%`
  dotsHeader[slideIndexHeader - 1].classList.add('dot-active')
}

let intervalHeader = setInterval(() => {
  showSlideHeader()
}, 3000) // Change every image after 3 seconds

sliderHeader.addEventListener('mouseover', () => {
  clearInterval(intervalHeader) // onHover Stop Changing every image after 3 seconds
})

sliderHeader.addEventListener('mouseout', () => {
  intervalHeader = setInterval(() => {
    showSlideHeader()
  }, 3000) // on mouseout from slide then again start Changing every image after 3  seconds
})

// ----------  CLIENTS ---------- //

let slideIndexClient = 0
let sliderClient = document.querySelector('.slider-client')
let slidesClient = document.querySelector('.slides-client')
let slideClient = document.querySelectorAll('.slide-client')
let dotsClient = document.querySelectorAll('.dots-client span')

showSlideClient()

function currentSlideClient(index) {
  if (index > slideClient.length) {
    index = 1
  } else if (index < 1) {
    index = slideClient.length
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dotsClient.length; i++) {
    const element = dotsClient[i]
    element.classList.remove('dot-active')
  }

  slidesClient.style.left = `-${index - 1}00%`
  dotsClient[index - 1].classList.add('dot-active')

  slideIndexClient = index
}

function showSlideClient() {
  slideIndexClient++

  if (slideIndexClient > slideClient.length) {
    slideIndexClient = 1
  } else if (slideIndexClient < 1) {
    slideIndexClient = slideClient.length
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dotsClient.length; i++) {
    const element = dotsClient[i]
    element.classList.remove('dot-active')
  }

  slidesClient.style.left = `-${slideIndexClient - 1}00%`
  dotsClient[slideIndexClient - 1].classList.add('dot-active')
}

let intervalClient = setInterval(() => {
  showSlideClient()
}, 3000) // Change every image after 3 seconds

sliderClient.addEventListener('mouseover', () => {
  clearInterval(intervalClient) // onHover Stop Changing every image after 3 seconds
})

sliderClient.addEventListener('mouseout', () => {
  intervalClient = setInterval(() => {
    showSlideClient()
  }, 3000) // on mouseout from slide then again start Changing every image after 3  seconds
})

// ----------  WORKS WE DID IT ---------- //

const productContainers = [...document.querySelectorAll('.client-container')]
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect()
  let containerWidth = containerDimensions.width

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth
  })
})

// ----------  OUTDOOR ---------- //

let slideIndexOutdoor = 0
let sliderOutdoor = document.querySelector('.slider-outdoors')
let slidesOutdoor = document.querySelector('.slides-outdoors')
let slideOutdoor = document.querySelectorAll('.slide-outdoors')
let dotsOutdoor = document.querySelectorAll('.dots-outdoors span')

showSlideOutdoor()

function currentSlideOutdoor(index) {
  if (index > slideOutdoor.length) {
    index = 1
  } else if (index < 1) {
    index = slideOutdoor.length
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dotsOutdoor.length; i++) {
    const element = dotsOutdoor[i]
    element.classList.remove('dot-active')
  }

  slidesOutdoor.style.left = `-${index - 1}00%`
  dotsOutdoor[index - 1].classList.add('dot-active')

  slideIndexOutdoor = index
}

function showSlideOutdoor() {
  slideIndexOutdoor++

  if (slideIndexOutdoor > slideOutdoor.length) {
    slideIndexOutdoor = 1
  } else if (slideIndexOutdoor < 1) {
    slideIndexOutdoor = slideOutdoor.length
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dotsOutdoor.length; i++) {
    const element = dotsOutdoor[i]
    element.classList.remove('dot-active')
  }

  slidesOutdoor.style.left = `-${slideIndexOutdoor - 1}00%`
  dotsOutdoor[slideIndexOutdoor - 1].classList.add('dot-active')
}

let intervalOutdoor = setInterval(() => {
  showSlideOutdoor()
}, 3000) // Change every image after 3 seconds

sliderOutdoor.addEventListener('mouseover', () => {
  clearInterval(intervalOutdoor) // onHover Stop Changing every image after 3 seconds
})

sliderOutdoor.addEventListener('mouseout', () => {
  intervalOutdoor = setInterval(() => {
    showSlideOutdoor()
  }, 3000) // on mouseout from slide then again start Changing every image after 3  seconds
})
