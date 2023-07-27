"use strict";
(() => {
var exports = {};
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 2733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/getImageFromGDrive.ts
function getImageIDFromGDrive(input) {
    let link = `${input}`;
    let split = link.split("/");
    for(let i = 0; i <= split.length; i++){
        if (split[i].length >= 20) {
            return split[i];
        }
    }
}
function getImageFromGDrive(input) {
    const ImageId = getImageIDFromGDrive(input);
    let link = `https://drive.google.com/uc?export=view&id=${ImageId}`;
    return link;
}

;// CONCATENATED MODULE: ./src/pages/api/server.ts



const dataFilePath = external_path_default().join(process.cwd(), "./.next/cache/tmp/data.json");
async function handler(req, res) {
    if (req.method === "GET") {
        // Read the existing data from the JSON file
        // await fsPromises.chmod(dataFilePath, 0o777);
        const jsonData = await promises_default().readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);
        res.status(200).json(objectData);
    } else if (req.method === "POST") {
        try {
            // Read the existing data from the JSON file
            // await fsPromises.chmod(dataFilePath, 0o777);
            const jsonData = await promises_default().readFile(dataFilePath);
            const objectData = JSON.parse(jsonData);
            // Get the data from the request body
            const { src , alt , downloadUrl , name , desc  } = req.body;
            // Add the new data to the object
            const newData = {
                alt: alt,
                downloadUrl: downloadUrl,
                src: getImageFromGDrive(src),
                name: name,
                desc: desc
            };
            objectData.push(newData);
            const updatedData = JSON.stringify(objectData);
            await promises_default().writeFile(dataFilePath, updatedData);
            res.status(200).redirect("/");
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Error coy"
            });
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2733));
module.exports = __webpack_exports__;

})();