var connect = require('connect');

module.exports = function(options) {
	var root = options.root;
	var static_files = options.static_files;
	var connectStatic = connect.static(root, { maxAge: 86400000, hidden: false }); // oneDay
	return function(req, res, next) {
		if (static_files.test(req.url)) {
			connectStatic(req, res, function() { res.writeHead(404); res.end('Not Found'); });
		} else { next(); }
	};
};
