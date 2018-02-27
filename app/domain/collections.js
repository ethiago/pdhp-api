

var collectionRepository = require('../repository/collections');
var discDomain = require('./discs');
var _ = require('underscore');

exports.getById = function (collectionId) {
    
    return collectionRepository.getById(collectionId)
        .then(function(collections){
            
            if ( collections.length === 1 ) { 
                return collections[0];
            }else if( collections.length === 0 )
            {
                throw 404;
            }else
            {
                throw 501;
            }
        });
}

exports.search = function (q, page, per_page) {

    return collectionRepository.search(q, page, per_page);
}

exports.update = function(collection){

    return collectionRepository.getById(collection.id)
        .then(function(entity){

            return collectionRepository.update(collection);

        },function(err) { throw err; })
        .then(function(updatedEntity){

            return updatedEntity;

        },function(err) { throw err; });

};

exports.validate = function(entity){

	if( !Number.isInteger(entity.id) || entity.id <= 0) return false;
	if( typeof entity.name !== "string" || entity.name.length == 0) return false;
    

    if( entity.discs.length !==  _.uniq(entity.discs).length ) return false;

    for( var i in entity.discs){
        if( !discDomain.validate(entity.discs[1]) ) return false;
    }

    return true;
}