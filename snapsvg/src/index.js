import Snap from 'snapsvg';


window.Snap = Snap;
// console.log(Snap)
const paper = Snap(500, 500)   // 自动添加到 body 元素下。


// 绘制圆。
const c = paper.circle(50, 50, 40);
c.attr({
    fill: '#f04'
})

const pathStr = `M121 262.8A108.5 48.8 0 0 0 338 262.8A108.5 48.8 0 0 0 121 262.8Z`;
const pathArr = Snap.path.toCubic(pathStr);

// pathArr.splice(pathArr.length - 1, 1)
pathArr[pathArr.length - 1] = 'Z'
console.log(pathArr)
console.log(pathArr.toString())

// 1. 检查是否 Z 结尾。（如果是Z在中间怎么办？）
// 2. 如果是 Z 结尾，检查对应的 M


function toCubic(pathStr) {
    // 1. 找出 M Z 配对。
    // 
    // /(\d+(\.\d+)/
}

function toPathArray(str) {

    console.log(str.split(/\s*,?\s*/));
    // /(\d+(?:\.\d+)?)/g; 数字的正则表达式。
    // \s*,?\s* 匹配数组之间的空格或 ， 
    const pattern = /([a-zA-Z])\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)*)/g;  // 两个数字版。
    // const pattern = /([a-zA-Z])\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)*)\s*,?\s*(\d+(?:\.\d+)*)\s*,?\s*(\d+(?:\.\d+)*)/g;    // 0 -> 4 个版本
    // let matches = pattern.exec(str);

    const a = [];
    let matches;
    while (true) {
        matches = pattern.exec(str);
        if (!matches) break;
        console.log(matches);
        a.push([matches[1], matches[2], matches[3]]);
    }
    console.log(a)

    // 需要考虑 多参数甚至0参数 的情况。
    
    // 'a2, 4 ,9, 8'
    // 匹配这里的 字母和所有的数字，数字的数量不确定，但只有一位数。
    const p = /a(?:\d\s*,\s*(\d))+/;
}

toPathArray(pathStr);


