
根据 svg 文件里的 filter 生成 JSON 数据。

新需求：去掉 `inkscape:` 字符串

格式为：

```
[
    {
        "id": "144",
        "name": "Smooth shader contour",
        "type": [
            "阴影",
            "鞋孔",
            "鞋带"
        ],
        "data": "<filter id=\"f144\" inkscape:label=\"Smooth shader contour\" inkscape:menu-tooltip=\"Contouring version of smooth shader\" inkscape:menu=\"Non realistic 3D shaders\" height=\"1.5\" y=\"-.25\" width=\"1.5\" x=\"-.25\" color-interpolation-filters=\"sRGB\"><feGaussianBlur stdDeviation=\"7\" result=\"result8\"/><feComposite in2=\"result8\" result=\"result6\" operator=\"xor\" in=\"result8\"/><feDisplacementMap in2=\"result6\" xChannelSelector=\"A\" yChannelSelector=\"A\" scale=\"75\" result=\"result4\" in=\"result8\"/><feComposite in2=\"result4\" result=\"result2\" operator=\"arithmetic\" in=\"SourceGraphic\" k1=\"1\"/><feComposite result=\"fbSourceGraphic\" in=\"result6\" operator=\"in\" in2=\"result2\"/></filter>"
    },
    ...
]
```

执行 `node index.js` 即可生成 JSON 文件。

