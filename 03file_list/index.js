const path = require("path");
const dirPath = path.join(__dirname, "files");
const fs = require("fs");

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirPath}/file${i}.txt`, "A simple text file");
// }

fs.readdir(dirPath, (error, files) => {
  files.forEach((file) => {
    console.log(`File name is ${file}`);
  });
});
