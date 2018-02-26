
var discsDomain = require('./discs');
var collectionDomain = require('./collections');

exports.search = function (q, page, per_page, entity) {

        var promDisc = Promise.resolve(null);
        var promCollection = Promise.resolve(null);
        
        if(entity ===  'disc' || entity.length === 0)
        {
            promDisc = discsDomain.search(q, page, per_page);
        }
        if(entity ===  'collection' || entity.length === 0)
        {
            promCollection = collectionDomain.search(q, page, per_page);
        }

        return Promise.all([promDisc, promCollection])
            .then(function(resultArr){
                var ret = {
                    q: q,
                    entity:  entity,
                    page: page,
                    per_page: per_page,
                    discs: {},
                    collections: {}
                };

                if(resultArr[0])
                    ret.discs = { total: resultArr[0].total, result: resultArr[0].result }
                if(resultArr[1])
                    ret.collections = { total: resultArr[1].total, result: resultArr[1].result }

                return ret;
            });

}