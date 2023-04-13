import { encode } from "uuencode";
import { promises as fsp } from "fs";
async function encodeFile(filename) {
    const data = await fsp.readFile(filename);
    return encode(data);
}
(async () => {
    console.log(await encodeFile(process.argv[2]));
})();
