var jTool = require('../../tools/json_tools');

const db = require('../relationalDb')

exports.search = function(q, page, per_page, table) {
    
    var qs = jTool.split(q," ");

    var regexpList = qs.map( q => { return { name:{ $regexp: "(^|[^a-z])"+q } } });
    
    return table.findAll({
        where: {
            $and: regexpList
        },
        offset: (page-1)*per_page,
        limit: per_page
    })
    .then( records => {
        return {
            total: records.length,
            result: records
        }
    })
}