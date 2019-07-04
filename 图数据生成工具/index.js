
const paper = SVG('canvas');

const canvas = document.getElementById('canvas');

canvas.addEventListener('mousedown', function(e) {
    const x = e.layerX - 1,
          y = e.layerY - 1;
    console.log(e)
    paper.circle(10).center(x, y)
})