var fileTraverser = require('../common/fileTraverser');
var settings = require('../common/settings');

exports.get = function (req, res) {
	var files = fileTraverser(settings.toimintakertomuksetPath);
	console.log(files);
	res.json({
		files: files
	})
}