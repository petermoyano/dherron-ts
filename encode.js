"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuencode_1 = require("uuencode");
const fs_1 = require("fs");
async function encodeFile(filename) {
    const data = await fs_1.promises.readFile(filename);
    return (0, uuencode_1.encode)(data);
}
(async () => {
    console.log(await encodeFile(process.argv[2]));
})();
