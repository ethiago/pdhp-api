var jTool = require('../tools/json_tools');
var _ = require('underscore');

exports.search = function(q, page, per_page, data) {
    return new Promise(function(resolve, reject) {
        console.log("Searching : " + q);

        var qs = jTool.split(q," ");

        var regexps = qs.map(item => new RegExp(item.toLowerCase()) );

        var selected = _.select(data, function(record) {
            var reduced = regexps.some(item => item.test(record.name.toLowerCase())) ;
            return reduced;
       });

        console.log(selected.length+ " found");
        
        var idexBegin = (page-1)*per_page;
        var result = {
            total: selected.length,

            result: selected.slice( idexBegin, idexBegin+per_page )
        };

        resolve(result);
    });
}