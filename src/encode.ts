import { encode } from "uuencode";
import { promises as fsp } from "fs";

async function encodeFile(filename: string): Promise<string> {
  const data = await fsp.readFile(filename);
  return encode(data);
}

(async () => {
  console.log(await encodeFile(process.argv[2]));
})();
