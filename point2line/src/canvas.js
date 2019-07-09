import './index.less'
import SVG from 'svg.js'

const svgRoot = SVG('workarea').id('svgroot');         // svg root
const canvasBg = svgRoot.nested().id('canvasBg');       // svg 内容的底色，宽高需和 svg content 同步
const svgContent = svgRoot.nested().id('svgcontent');   // svg 的真正内容位置。
const draw = svgContent.group();   

const workarea = {
    node: document.getElementById('workarea'),
    w() {
        // return parseFloat(this.node.style.width)
        return this.node.getBoundingClientRect().width;
    },
    h() {
        // return parseFloat(this.node.style.height)
        return this.node.getBoundingClientRect().height;
    },
    scroll(w, h) {
        console.log(w, h)
        this.node.scrollTo(w, h);
    }
}


const init = () => {
    const config = {
        bgcolor: '#fff',
        contentW: 517,
        contentH: 384,
    }
    svgContent.size(config.contentW, config.contentH).move(config.contentW, config.contentH);   // 设置宽高和左上角坐标
    canvasBg.size(config.contentW, config.contentH).move(config.contentW, config.contentH);
    svgRoot.size(config.contentW * 3, config.contentH * 3);
    // 居中
    workarea.scroll( (svgRoot.width() - workarea.w())/2,  (svgRoot.height() - workarea.h())/2 ); // 滚动条拖到中间
    canvasBg.rect('100%', '100%').fill(config.bgcolor);
}

export {
    init,
    draw,
}

