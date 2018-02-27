var jTool = require('../tools/json_tools');
var _ = require('underscore');

exports.search = function(q, page, per_page, data) {
    return new Promise(function(resolve, reject) {
        console.log("Searching : " + q);

        var qs = jTool.split(q," ");

        var regexps = qs.map( word => new RegExp("^"+word+"| "+word, 'i'));

        var selected = _.select(data, rec => regexps.some(rx => rx.test(rec.name))) ;

        console.log(selected.length+ " found");
        
        var idexBegin = (page-1)*per_page;
        var result = {
            total: selected.length,

            result: selected.slice( idexBegin, idexBegin+per_page )
        };

        resolve(result);
    });
}