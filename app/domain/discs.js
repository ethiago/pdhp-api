
var discsRepository = require('../infrastructure/relationalRepository/discs')

exports.search = function (q, page, per_page) {
    
    return discsRepository.search(q, page, per_page);
    
};

exports.validate = function(entity){

    if( !Number.isInteger(entity.id) || entity.id <= 0) return false;
    if( typeof entity.name !== "string" || entity.name.length == 0) return false;
    
    return true;

};

exports.getById = function (discId) {
    
    return discsRepository.getById(discId);
}

exports.update = function(disc){

    return discsRepository.getById(disc.id)
        .then( d => discsRepository.update(disc)
              ,err => { throw err }
    )
};

exports.validateCreation = function( entity ){
    return  typeof entity.name === "string" && entity.name.length > 0
}

exports.create = function(entity){
    if(!this.validateCreation(entity)) throw 'Invalid Disc';
    return discsRepository.create(entity);
}