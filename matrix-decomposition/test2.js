const { Matrix, SingularValueDecomposition } = require('ml-matrix');

// var A = new Matrix([[1, 2, 3], [4, 5, 6]]); // A is singular, so the standard computation of inverse won't work (you can test if you don't trust me^^)
// var inverseA = inverse(A, (useSVD = true));


// const m = new SingularValueDecomposition([[1,2,3], [4,5,6]], [0,0,1]);
// const m = new SingularValueDecomposition([[1, -2], [1, 2]]);
const m = new SingularValueDecomposition([[1, 0, 3], [0, 1, 9], [0, 0, 1]]);

// console.log(m)

console.log('s:', m.s);
console.log('U:', m.U.data)
console.log('V:', m.V.data);

/* const s = new Matrix([ 
    [m.s[0], 0], 
    [0, m.s[1]]
]);
// console.log(s)
let sum = m.U.mmul(s).mmul(m.V);

console.log(sum) */

// const a = m.


// var A = new Matrix([[1, 0, 3], [0, 1, 0], [0, 0, 1]]);
// var B = new Matrix([[2], [1], [1]]);   // 必须是正方形矩阵？我是搞不懂哦。 

// console.log(A)
// console.log(B)
// var C = A.mmul(B); 
// console.log(C)