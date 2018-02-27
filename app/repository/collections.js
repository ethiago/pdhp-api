
var db = require('../tools/in_memory_db');

var _ = require('underscore');

var generic = require("./generic");

exports.getById = function(collectionId) {
    return new Promise(function(resolve, reject) {
        
        var selected = _.select(db.collections, function(collection) { return collection.id === collectionId; } );
        
        resolve(selected);
    });
}

exports.search = function(q, page, per_page) {
    return generic.search(q, page, per_page, db.collection);
}

exports.update = function(collection){
    return new Promise(function(resolve, reject) {
        db.collection = _.reject(db.collection, function(col){ col.id == collection.id });
        db.collection.push(collection);

        resolve( collection );
    });
};
