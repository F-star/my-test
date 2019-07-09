import jsonData from './data2.json'
import { draw } from './canvas.js';
import paper from 'paper'


console.log(paper)
const inputTextarea = document.getElementById('input-textarea')
const confirmBtn = document.getElementById('input-confirm-btn')
const cancelBtn = document.getElementById('input-cancel-btn')
const inputBtn = document.getElementById('input-btn');
const dataInput = document.querySelector('.data-input')
const animationBtn = document.getElementById('path-move-btn')
const simplyifyBtn = document.getElementById('simplyify-btn');

inputBtn.addEventListener('click', function() {
    console.log('??')
    dataInput.style.display = 'block';
}) 

cancelBtn.addEventListener('click', function() {
    dataInput.style.display = 'none';
})

confirmBtn.addEventListener('click', function() {
    dataInput.style.display = 'none';
    // 获取数据。
    const data = inputTextarea.value;
    createPaths(data); 
})

animationBtn.addEventListener('click', function() {
    moveAnimate();
})
simplyifyBtn.addEventListener('click', simplyifyPaths)

// 可能要保存 起始的 pathStrs
let pathStrs = [];
function createPaths(str) {
    draw.clear();
    pathStrs = [];

    const data = JSON.parse(str);
    data.forEach(pts => {
        if (pts.length == 0) return;
        let pathStr = `M ${pts[0][0]} ${pts[0][1]}`;
        for (let index = 0; index < pts.length; index++) {
            const p = pts[index];
            pathStr += `L ${p[0]} ${p[1]}`;
        }
        pathStrs.push(pathStr);
        draw.path(pathStr)
            .fill('none')
            .stroke('#f04')
            // .attr('class', 'animation-move')
        // 检查运动点。


    })
}

function moveAnimate() {
    draw.each(function () {
        this.attr('class', null);
    })
    setTimeout(() => {
        draw.each(function () {
            this.attr('class', 'animation-move');
        })
    }, 0)
}

function simplyifyPaths() {
    draw.each(function() {
        const pathStr =  simplyify(this.attr('d'));
        console.log(pathStr)
        this.plot(pathStr);
    })

    // draw.clear();
    // draw.path(pathstr)
    //         .fill('none')
    //         .stroke('#f04')
};

const simplyify = (() => {
    const c = document.createElement('canvas');
    paper.setup(c);
    return (pathStr, tolerance=6) => {
        const path = new paper.Path(pathStr);
        path.simplify(tolerance);
        // console.log(path.pathData);
        return path.pathData;
    }
})()



createPaths(JSON.stringify(jsonData));
simplyify(pathStrs[0]);