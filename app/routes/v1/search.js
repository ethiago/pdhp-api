
var discsDomain = require('../../domain/discs');

exports.search = function (req, res, next) {

        var q = req.query.q || '';
        var per_page = Number(req.query.per_page || 10);
        var page = Number(req.query.page || 1);

        if(q.length === 0 || req.query.entity !== 'disc' || !Number.isInteger(per_page) || !Number.isInteger(page) || per_page <= 0 || page <= 0 || per_page > 500)
        {
            res.send(400);
            return;
        }
       
        discsDomain.search(q, page, per_page).then(function(result){
            console.log(result);
            res.send({
                q: q,
                entity: 'disco',
                page: page,
                per_page: per_page,
                total_discs: result.total_discs,
                discs: result.discs
            });
        }).catch(err => { res.send(500, err); });

		next();
}