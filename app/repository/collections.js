
var db = require('../tools/in_memory_db');

var _ = require('underscore');

var generic = require("./generic");

exports.getById = function(collectionId) {
    return new Promise(function(resolve, reject) {
        console.log("Select collection " + collectionId);
        
        var selected = _.select(db.collections, function(collection) { return collection.id === collectionId; } );
        
        console.log(selected.length + " collections selected");
        resolve(selected);
    });
}

exports.search = function(q, page, per_page) {
    return generic.search(q, page, per_page, db.collections);
}

