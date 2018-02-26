var jTool = require('../tools/json_tools');
var _ = require('underscore');

exports.search = function(q, page, per_page, data) {
    return new Promise(function(resolve, reject) {
        console.log("Searching : " + q);

        var qs = jTool.split(q," ");

        var regexps = qs.map(item => new RegExp(item.toLowerCase()) );

        var selected = _.select(data, function(disc) {
            var reduced = regexps.some(item => item.test(disc.name.toLowerCase())) ;
            return reduced;
       });

        console.log(selected.length+ " found");
        
        var idexBegin = (page-1)*per_page;
        var result = {
            total_discs: selected.length,

            discs: selected.slice( idexBegin, idexBegin+per_page )
        };

        resolve(result);
    });
}