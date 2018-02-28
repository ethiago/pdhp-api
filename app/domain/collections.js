

var collectionRepository = require('../repository/collections');
var discDomain = require('./discs');
var _ = require('underscore');

exports.getById = function (collectionId) {
    
    return collectionRepository.getById(collectionId);
}

exports.search = function (q, page, per_page) {

    return collectionRepository.search(q, page, per_page);
}

exports.update = function(collection){

    return collectionRepository.getById(collection.id)
        .then(function(entity){

            return collectionRepository.update(collection);

        },function(err) { throw err; })

};

exports.validate = function(entity){

	if( !Number.isInteger(entity.id) || entity.id <= 0) return false;
	if( typeof entity.name !== "string" || entity.name.length == 0) return false;
    

    if( entity.discs.length !==  _.uniq(entity.discs).length ) return false;

    for( var i in entity.discs){
        if( !discDomain.validate(entity.discs[i]) ) return false;
    }

    return true;
}

exports.validateCreation = function( entity ){
    return  typeof entity.name === "string" && entity.name.length == 0
}

exports.create = function(entity){
    if(!validateCreation(entity)) return false;
    return collectionRepository.create(entity);
}