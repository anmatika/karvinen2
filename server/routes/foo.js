// Include Express
var express = require('express');

// Initialize the Router
var router = express.Router();
// Setup the Route
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

// Expose the module
module.exports = router;
