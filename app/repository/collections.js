
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

        storedCollection = _(db.collections).find( rec => rec.id === collection.id);

        storedCollection.name = collection.name;
        storedCollection.discs = collection.discs;

        resolve( storedCollection );
    });
};
