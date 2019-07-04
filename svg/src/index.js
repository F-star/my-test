
// import _ from 'lodash'

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
// }


// document.body.appendChild(component());

import SVG from 'svg.js';
// import {SVG} from '@svgdotjs/svg.js'
// import '@svgdotjs/svg.topath.js'
import './svg.topath.js'

console.log(SVG)

window.SVG = SVG;

var canvas = window.canvas = SVG('drawing');


// // rect
// var rect = window.rect = canvas.rect(100, 200).attr({ rx: 10, ry: 5 }).fill('#f04')
// window.rectPath = rect.toPath(false).addTo(canvas).dmove(110, 0)

var ellipse = canvas.ellipse(150, 100).fill('#f06').move(20, 20)
window.rectPath = ellipse.toPath(false).addTo(canvas).dmove(110, 0)
