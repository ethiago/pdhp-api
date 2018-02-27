
var searchDomain = require('../../domain/search');

var validateEntity = function(entity){
    return entity === "disc" || entity === "collection" || entity.length === 0;
}

exports.search = function (req, res, next) {

        var q = req.query.q || '';
        var per_page = Number(req.query.per_page || 10);
        var page = Number(req.query.page || 1);
        var entity = req.query.entity || '';

        if(q.length === 0 || !validateEntity(entity) || !Number.isInteger(per_page) || !Number.isInteger(page) || per_page <= 0 || page <= 0 || per_page > 500)
        {
            res.send(400);
            return;
        }

        searchDomain.search(q, page, per_page, entity)
            .then(data => { res.send(data); })
            .catch(err => {
				if(Number.isInteger(err)) 
					res.send(err);
				else
					res.send(500, err);
			});
        
		next();
}