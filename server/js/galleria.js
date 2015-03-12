var fileTraverser = require('../common/fileTraverser');
var settings = require('../common/settings');

exports.getImages = function(req, res){
	// traverseFileSystem('./dist/images/galleria');
	var response = fileTraverser.traverse(settings.galleriaPath);
	
	res.json({
		images: response
	})
};

