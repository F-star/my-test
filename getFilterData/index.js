
/**
 * 解析 fitlers.svg
 * 提取必要的信息。
 */

const readline = require('readline')
const fs = require('fs')
const path = require('path')

// const data = fs.readFileSync('./filters.svg');
const rl = readline.createInterface({
    input: fs.createReadStream(path.resolve(__dirname, 'filters.svg')),
    crlfDelay: Infinity
});
  
let index = -1;
rl.on('line', (line) => {

    // console.log(++index);
    // console.log(`Line from file: ${line}`);
    
    // 1. 检查是否为注释
    // 2. 检查是否为 fitler,，提取 id 和 menu
    let flag = getType(line) || getAliasTypes(line) || getIdAndName(line);

    const checkEndFlag = /^\s*<\/defs>\s*$/.test(line);
    if (checkEndFlag) {
        updateData(arr, dataStr)
        rl.close();
    }
    if (!flag) dataStr += line.trim();   // <-- --> 这些字符串并不想放进去啊。。
});



// let obj = {};
let arr = [];
let currType = '';
let otherTypes = [];
let dataStr = '';

// 检查类型
function getType(str) {
    const matches = /<!--\s*([\u4e00-\u9fa5]+)\s*-->/.exec(str);
    if (!matches) return false;
    currType = matches[1];
    updateData(arr, dataStr)
    return true;
}


// 检查一个滤镜是否同时属于多个type。
function getAliasTypes(str) {
    const matches = /<!--\s*（([\u4e00-\u9fa5]+)\s+([\u4e00-\u9fa5]+)）\s*-->/.exec(str);
    if (!matches) return false;
    // console.log(matches[1] + ' ' + matches[2])
    otherTypes = [matches[1], matches[2]];
    updateData(arr, dataStr)
    return true;
}

// 当匹配成功任何一项，都需要更新最后一个 fitler 的 data，当匹配到一个 fitler 的开头时，重置 dataStr 为 空字符。

// 检查
function getIdAndName(str) {
    const matches = /id="f0*([1-9]\d*)*".+inkscape:label="(.+?)"/.exec(str);
    if (!matches) return false;
    // console.log(matches[1] + ' ' + matches[2])
    updateData(arr, dataStr)
    dataStr = str.trim();
    arr.push({
        id: matches[1],
        name: matches[2],
        type: [currType].concat(otherTypes),
        // data: 
    })
    otherTypes = [];
    return true;
}

function updateData(arr, dataStr) {
    if (arr.length === 0) return;
    arr[arr.length - 1].data = dataStr;
}

// 正则表达式：匹配不以0开头的数字。 /[1-9]\d/
// 正则表达式：匹配数字，如果有多个0开头，取去掉前导0的数字。  /0*([1-9]\d*)/

// getAliasTypes(`<!-- （鞋带 鞋孔） -->`)



rl.on('close', function() {
    // console.log('结束')
    const simplyArr = copyButExclude(arr, 'data'); 
    const fitlerMap = 

    fs.writeFile(
        path.resolve(__dirname, 'svgFilter.json'), 
        JSON.stringify(arr, null, 4),
        (err) => {
        if (err) throw err;
            console.log('svgFilter2.json has been saved!');
        });

    fs.writeFile(
        path.resolve(__dirname, 'svgFilter2.json'), 
        JSON.stringify(simplyArr, null, 4), 
        (err) => {
        if (err) throw err;
            console.log('svgFilter2.json has been saved!');
        })

    fs.writeFile(
        path.resolve(__dirname, 'filterMap.json'), 
        JSON.stringify(simplyArr, null, 4), 
        (err) => {
        if (err) throw err;
            console.log('filterMap.json has been saved!');
        })

})

// 对象浅拷贝，除了指定属性
function copyButExclude(a, propName) {
    return a.map(item => {
        const obj = {};
        for (let key in item) {
            if (key != propName) {
                obj[key] = item[key];
            }
        }
        return obj;
    })
}

function copyButExclude(a) {
    const map = {};
    a.forEach(item => {
        map[item.id] = item.data;
    })
    return map;
}