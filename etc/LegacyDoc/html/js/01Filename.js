let fileName;
fileName = window.location.pathname.split("/").pop();
fileName = decodeURIComponent(fileName)
fileName = fileName.replace(`.html`, ``)
let fileNameOrigin;
fileNameOrigin = fileName;

fileName = fileName.replace(/_Upper/, ``)
fileName = fileName.replace(/_Lower/, ``)




/* 
url   -> ＼ -> fileName
title -> ＼ -> fileName      -> 폰트변경불능
nav   -> \  -> fileNameTitle -> 폰트변경가능
h1    -> \  -> fileNameTitle -> 폰트변경가능

*/