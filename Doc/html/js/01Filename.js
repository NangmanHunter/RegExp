let fileName;
fileName = window.location.pathname.split("/").pop();
fileName = decodeURIComponent(fileName)
fileName = fileName.replace(`.html`, ``)
let fileNameOrigin;
fileNameOrigin = fileName;

fileName = fileName.replace(/_Upper/, ``)
fileName = fileName.replace(/_Lower/, ``)
console.log(fileName);