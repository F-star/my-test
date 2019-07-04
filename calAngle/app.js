
const draw = SVG('workarea').id('svgroot'); 



// 画布变量
const g = {
    cx: 250,   // 中心点
    cy: 250,
    r: 50     // 圆弧的半径
}

// 虚线
const dashed = draw.line(250, 470, 250, 30)
                    .stroke({     
                        color: '#eee',
                        dasharray: '5 4',
                        width: 1,
                    })  
const dashed2 = draw.line( 470, 250, 30, 250)
                    .stroke({     
                        color: '#eee',
                        dasharray: '5 4',
                        width: 1,
                    })  

// 连接光标位置和中点的线。
const line = draw.line(250, 250, 250, 250)
                    .stroke({
                        color: '#d04',
                        width: 1,
                    });
// 中心点
const center = draw.circle(8)
                    .center(250, 250)
                    .fill({
                        color: '#eee',
                        width: 2,
                    })

// 半径为 50 的弧。
// const pathStr = 'M 250 200 A 50 50 90 0 1 300 250'

const arc = draw.path('')
                    .fill('none')
                    .stroke({
                        color: '#436ab3',
                        width: 3,
                    })
                    

const text = draw.text('50')
                 .center(g.cx + 30, g.cy - g.r - 30)
                 .font({size: 20})
                 .fill('#eee')

const kksk = draw.circle(5).center(-10, -10)

draw.node.addEventListener('mousemove', function(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    line.plot(250, 250, x, y)
    const angle = calAngle(250, 250, x, y);
    text.text(angle.toFixed(2));

    drawArc(angle);
})


// 根据角度，绘制正确的弧度
function drawArc(rot) {
    
    const startX = g.cx
    const startY = g.cy - g.r;
    const rx = 50
    const ry = rx;
    const xAxisRotation = 0;   //x轴旋转角度
    const largeArcFlag = 0;    // 取小弧
    const sweepFlag = rot >= 0 ? 1 : 0;    // 根据角度选择方向（非负数为顺时针）     
    
    
    const {x, y} = calEndCoord(g.r, rot);
    
    const pathStr = ['M', startX, startY, 'A', rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y].join(' ');
    arc.plot(pathStr);
    // console.log({x, y})
    kksk.center(x,y)

    function calEndCoord(r, rot) {
        if (rot == 90) return {x: g.cx + g.r, y: g.cy}
        if (rot == -90) return {x: g.cx - g.r, y: g.cy}
        rot = rot * Math.PI / 180
        const cos = Math.cos(rot);
        const y = g.cy - r * cos;  // 同样是 点积公式化简。参与计算的另一个是单位向量 (0, -1)
        // const x = y / cos;
        let x = (g.cy - y) / Math.tan(Math.PI / 2 - rot) + g.cx;   // 斜率式
        return {x, y}
    }
}

// draw.node.addEventListener('mouseout', function(e) {
//     line.hide();
// })

// draw.node.addEventListener('mouseenter', function(e) {
//     line.show();
// })

function calAngle(cx, cy, x, y) {
    const radian = getCosBy2pt(x, y, cx, cy);
    let angle = Math.acos(radian) * 180 / Math.PI;

    if (x < cx) angle = -angle;
    // console.log(angle)
    return angle;

        // 计算 点1指点2形成 的向量 
    function getCosBy2pt(x, y, cx, cy) {
        // 点积公式
        let a = [x - cx, y - cy];
        let b = [0, -1];
        return calCos(a, b);
    }
    function calCos(a, b) {
        let dotProduct = a[0] * b[0] + a[1] * b[1];
        let d = Math.sqrt(a[0] * a[0] + a[1] * a[1]) * Math.sqrt(b[0] * b[0] + b[1] * b[1]);
        return dotProduct/d;
    }
}