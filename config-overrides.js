const { fixBabelImports, override, addLessLoader } = require("customize-cra");

module.exports = override(
    // packing with demand aim to antd: according to imported modules (through babel-plugin-import)
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true // packing related styles automatically
    }),
    // override @primary-color through lessLoader
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#1DA57A" }
        }
    })
);
