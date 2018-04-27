let windowWidth = window.innerWidth
let square = document.getElementById('square')
let computedStyle = window.getComputedStyle(square)
let oldMarginLeft = computedStyle.getPropertyValue('margin-left')
let boxWidth = computedStyle.getPropertyValue('width')
let newMarginLeft = windowWidth - (parseInt(oldMarginLeft) + parseInt(boxWidth))