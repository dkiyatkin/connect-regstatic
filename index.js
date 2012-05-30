/*
var connectStatic = connect.static(__dirname, { maxAge: 86400000, hidden: false }); // oneDay
	static_files: /((infra|core|images|data|layers|lib|layout|design)\/.*)*(\.(htc|pdf|psd|tpl|html|js|json|ico|gif|jpg|jpeg|png|css|rar|zip|swf|avi|mpg|flv|mpeg|wmv|ogv|oga|ogg|eot|woff|ttf|svg|odt|doc|docx|xls|xlsx|xml|mht))$/i

.use(function(req, res, next) {
	if (reg_urls.static_files.test(req.url)) {
		connectStatic(req, res, function() { res.writeHead(404); res.end('Not Found'); });
	} else { next(); }
})
*/
