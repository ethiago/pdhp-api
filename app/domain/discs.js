
var discsRepository = require('../repository/discs');

exports.search = function (q, page, per_page) {
    
    return discsRepository.search(q, page, per_page);
    
};

exports.validate = function(entity){

    if( !Number.isInteger(entity.id) || entity.id <= 0) return false;
    if( typeof entity.name !== "string" || entity.name.length == 0) return false;
    
    return true;

};