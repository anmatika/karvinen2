var fileTraverser = require('../common/fileTraverser');
var settings = require('../common/settings');

exports.getImages = function(req, res){
	var response = fileTraverser(settings.galleriaPath);
	
	res.json({
		images: response
	})
};

