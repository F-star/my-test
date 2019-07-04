var svd = require('node-svd').svd;



A = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
var res = svd(A, 2, {});
// 测试 U S V 的结果是否为 A



console.log(res);