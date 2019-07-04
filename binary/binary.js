/**
 * 模拟位运算 
 */

/**
 * 得到二进制的字符串形式（默认使用32位）
 */ 
const getBinary = (num, radix = 2) => {
    // toString() radix argument must be between 2 and 36
    let symbol = '0'
    if (num < 0) {
        symbol = '1'
        num = -num;
    }
    return symbol + num.toString(radix).padStart(31, '0');
}
/*
 * 手动实现 十进制 转 其它进制
 */
const tranformRadix = (num, radix = 2) => {
    let symbol = '';
    if (num < 0) {
        symbol = '-';
        num = -num;
    }
    radix = parseInt(radix)
    if (radix < 2 || radix > 36) throw new Error('radix argument must be between 2 and 36')
    const ascii_a = 97;  // 'a'.charCodeAt()
    let str = '';

    // 其实不懂这个转换的原理。但知道转换过程。。
    let char;
    while (num !== 0) {
        char = num % radix;
        if (char > 9) char = String.fromCharCode(ascii_a - (10 - char));
        str = char + str;

        num = Math.floor(num / radix);
    }
    return symbol + str;
}
/**
 * 反码
 * 比特位反转。
 */
const oneComplement = (numStr) => {
    let s = '';
    for (let i = 0, len = numStr.length; i < len; i++) {
        s += 1 - numStr[i] ;
    }
    return s;
}

/** 
 * 补码
 * 发码后加一。
 */
const twoComplement = (numStr) => {
    numStr = oneComplement(numStr);
    for (let i = numStr.length; i >= 0; i--) {
        num = parseInt(numStr);
        // if (num + 1) 
    }
}

// const add = (num1, num2) = () => {
//     num1 = num1.toString(2);
//     num1 = num1.toString();
// }

const getNumFromBinary = (numStr) => {

}

/**
 * 基于二进制运算的加法运算。
 * 目前 num1 和 num2 必须为正整数。
 */
const add = (num1, num2) => {
    num1 = getBinary(num1);   // num1 和 num2 都转为长度为 32 的二进制字符串。
    num2 = getBinary(num2);   
    let sum = '';
    let v3 = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        let v1 = parseInt(num1[i]),
            v2 = parseInt(num2[i]);
        
        const tmpSum = v1 + v2 + v3 
        if (tmpSum > 1) {          // 和为 3 或者 2 的情况
            sum = tmpSum % 2 + sum;
            v3 = 1;
        } else {
            sum = tmpSum + sum;
            v3 = 0;
        }
    }
    return parseInt(sum, 2)
}

// num1 和 num
const add = (num1, num2) => {
    num1 = getBinary(num1);   // num1 和 num2 都转为长度为 32 的二进制字符串。
    num2 = getBinary(num2);   
    let sum = '';
    let v3 = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        let v1 = parseInt(num1[i]),
            v2 = parseInt(num2[i]);
        
        const tmpSum = v1 + v2 + v3 
        if (tmpSum > 1) {          // 和为 3 或者 2 的情况
            sum = tmpSum % 2 + sum;
            v3 = 1;
        } else {
            sum = tmpSum + sum;
            v3 = 0;
        }
    }
    return parseInt(sum, 2)
}

module.exports = {
    getBinary,
    tranformRadix,  // Number.prototype.toString(radix) 的模拟实现。
    oneComplement,  // 反码运算
    twoComplement,  // 补码运算
    add,
}