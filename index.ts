import * as fs from "fs";
import * as util from "util";
import {readFile} from "fs";

// const stream = fs.createWriteStream("./big_file.txt");
// for (let i = 0; i < 10000; i++) {
//   stream.write(` ${i}
// \n`);
// }
// stream.end(); // stream
// console.log("done");
util.promisify(readFile)('./big_file.txt',{encoding:'utf-8'}).then((data)=> {
  console.log(data)
})