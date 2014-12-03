// Include Express
var express = require('express');
var fs = require('fs');
var q = require('promised-io/promise'); // >=v2.4

// Initialize the Router
var router = express.Router();

// Setup the Route /galleria
router.post('/', function (req, res) {

    // show the request body in the command line
    console.log(req.body);
    // return a json response to angular
    res.json({
        'msg': 'success!',
        'images_1': [
	        {
				image: '/images/galleria/1/1.jpg'
			},
			{
				image: '/images/galleria/1/2.jpg'
			},
			{
				image: '/images/galleria/1/3.jpg'
			},
			{
				image: '/images/galleria/1/4.jpg'
			},
			{
				image: '/images/galleria/1/5.jpg'
			},
			{
				image: '/images/galleria/1/6.jpg'
			}
		],
		'images_2': [
			{
				image: '/images/galleria/2/2.jpg'
			},
			{
				image: '/images/galleria/2/3.jpg'
			},
			{
				image: '/images/galleria/2/4.jpg'
			},
		]
    });
});


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

var images = [];
var response = {};

var traverseFileSystem = function (currentPath) {
    console.log(currentPath);
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
       var currentFile = currentPath + '/' + files[i];
       var stats = fs.statSync(currentFile);
       if (stats.isFile()) {
       	console.log(currentFile);
       	// ['/foo.png', /abc.png', ...]
       	
		var f = currentFile.split('/');
  		var fileName = f[f.length - 1];

       	images.push(fileName);
      }
      else if (stats.isDirectory()) {
  		 
  		 var directories = currentFile.split('/');
  		 var directory = directories[directories.length - 1];

  		 console.log(directory);
  		 // response:{1:[], 2:[], ...}
  		 images = [];
  		 response[directory] = images;

         traverseFileSystem(currentFile);
       }
     }
   };

// Setup a route /galleria/images
router.post('/images', function(req, res){
	traverseFileSystem('./dist/images/galleria');
	
	res.json({
		images: response
	})
});

// Expose the module
module.exports = router;
