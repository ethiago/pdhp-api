
var discsRepository = require('../repository/discs');

exports.search = function (q, page, per_page) {
    
    return discsRepository.search(q, page, per_page);
    
}