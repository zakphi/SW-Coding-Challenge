let windowWidth = window.innerWidth
let square = document.getElementById('square')
let computedStyle = window.getComputedStyle(square)
let oldMarginLeft = computedStyle.getPropertyValue('margin-left')
let boxWidth = computedStyle.getPropertyValue('width')
let newMarginLeft = windowWidth - (parseInt(oldMarginLeft) + parseInt(boxWidth))

/*
  got lines 14-25 from https://stackoverflow.com/a/8742305
*/
let vendors = ['-moz-', '-webkit-', '-o-', '-ms-', ''];

function toCamelCase(str) {
  return str.toLowerCase().replace(/(\-[a-z])/g, function($1) {
    return $1.toUpperCase().replace('-', '')
  })
}

function setCss3Style(el, prop, val) {
  for (let i = 0, l = vendors.length; i < l; i++)
    el.style[toCamelCase(vendors[i] + prop)] = val
}