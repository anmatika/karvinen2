var fs = require('fs');

// GOAL:
// {
//     "1": [
//         "/galleria/images/1/abc.jpg",
//         "/galleria/images/1/foo.jpg"
//     ],
//     "2": [
//         "/galleria/images/2/fds.jpg",
//         "/galleria/images/2/uio.jpg"
//     ]
// }
var traverse = function(path) {
  var images = [];
  var response = {};
  console.log('path ' + path);

  var traverseFileSystem = function(currentPath) {

    console.log('currentPath: ' + currentPath);
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
      var currentFile = currentPath + '/' + files[i];
      var stats = fs.statSync(currentFile);
      if (stats.isFile()) {
        console.log('currentFile: ' + currentFile);

        // ['/foo.png', /abc.png', ...]
        var f = currentFile.split('/');
        var fileName = f[f.length - 1];

        images.push(fileName);
      } else if (stats.isDirectory()) {

        var directories = currentFile.split('/');
        var directory = directories[directories.length - 1];

        console.log('directory: ' + directory);
        // response:{1:[], 2:[], ...}
        images = [];
        response[directory] = images;

        traverseFileSystem(currentFile);
      }
    }
  }; 

  traverseFileSystem(path);
  return response;
}

module.exports = traverse;