const presets = [
    // [
    //   "@babel/env",
    //   {
    //     targets: {
    //       edge: "17",
    //       firefox: "60",
    //       chrome: "67",
    //       safari: "11.1",
    //     },
    //     useBuiltIns: "usage",
    //     corejs: 3,
    //   },
    // ],
    //   "@babel/preset-react"
];
const plugins = [
    // ["react-css-modules", { "generateScopedName": "[local]_[hash:base64:4]", "webpackHotModuleReloading": true, "autoResolveMultipleImports": true }],
    // ["react-hot-loader/babel"]
    ["@babel/transform-react-jsx", { "pragma": "h" }]
]

module.exports = { presets, plugins };