
var db = require('../tools/in_memory_db');

var _ = require('underscore');

var generic = require("./generic");

exports.getById = function(collectionId) {
    return new Promise(function(resolve, reject) {
        
        var selected = _.select(db.collections, coll => coll.id === collectionId );
        
        resolve(selected);
    });
}

exports.search = function(q, page, per_page) {
    return generic.search(q, page, per_page, db.collections );
}

exports.update = function(collection){
    return new Promise(function(resolve, reject) {
        db.collections = _.filter(db.collections, coll =>  coll.id !== collection.id );
        db.collections.push(collection);

        resolve( collection );
    });
};
